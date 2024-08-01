import { Component, OnInit, ViewChild, ElementRef, Inject, Input, TemplateRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SiteService } from 'app/core/services/site.service';
import { Site } from 'app/models/site.model';
import Highcharts from "highcharts/highmaps";
import { MatTableDataSource } from '@angular/material/table';
import { AcquisitionService } from 'app/core/services/acquisition.service';
import { DOCUMENT } from '@angular/common';
import { FSDocument, FSDocumentElement } from '@fuse/components/fullscreen';
import { Router } from '@angular/router';
import { TerrainService } from 'app/core/services/terrain.service';
import { Terrain } from 'app/models/terrain.model';
import accessibility from 'highcharts/modules/accessibility'; // Assure-toi d'inclure le module d'accessibilité
import exporting from 'highcharts/modules/exporting'; // Assure-toi d'inclure le module exporting
import tiledwebmap from "highcharts/modules/tiledwebmap";

accessibility(Highcharts);
exporting(Highcharts);


tiledwebmap(Highcharts);

@Component({
    selector: 'app-carto',
    templateUrl: './carto.component.html',
    styleUrls: ['./carto.component.scss']
})
export class CartoComponent implements OnInit {

    @Input() iconTpl: TemplateRef<any>;
    @Input() tooltip: string;
    private _fsDoc: FSDocument;
    private _fsDocEl: FSDocumentElement;
    private _isFullscreen: boolean = false;
    siteAvatarForm = new FormControl('');
    site_id
    site: Site = new Site({});
    geoJSON: any = null;
    typeStructure:any;

    optionsGroup: any[];

    regrouperPar: any;
    afficherLibelleSite: string = "";
    regrouperParForm = new FormControl('');
    Highcharts: typeof Highcharts = Highcharts;
    chartRef: Highcharts.Chart;
    chartConstructor = "mapChart";
    isRefresh = false;
    dataSource: MatTableDataSource<any> = new MatTableDataSource();
    updateFlag = true;

    displayedColumns: string[] = [
        'code',
        'name',
        'contenance',
        'typeLogement'
    ];

    enPleinEcran = false
    chartOptions:any;// Highcharts.Options = {};
    /**
     * Constructor
     */
    constructor( private _siteService: SiteService, private _acquisitionService: AcquisitionService,
        @Inject(DOCUMENT) private _document: Document,
        private _router: Router,
        private _terrainService: TerrainService
     ) {
        this._fsDoc = _document as FSDocument;
     }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        
        this._siteService.getAll().subscribe((data) => {
            const niveaux = data as Site[];
            this.optionsGroup = [];
            this.optionsGroup.push({
                label: 'Pas de choix',
                value: 0,
                description: ''
            })
            niveaux.forEach(niveau => {
                this.optionsGroup.push({
                    label: niveau.libelle,
                    value: niveau.id,
                    description: niveau.description,
                    geoJSON: niveau.geoJSON
                })
            });
            this.regrouperPar = [this.optionsGroup[0]];
            if (sessionStorage.getItem('optionSiteSelect')) {
                const option = JSON.parse(sessionStorage.getItem('optionSiteSelect'));
                const index = this.optionsGroup.find(o=>o.value===option.value);
                this.regrouperPar = [index];
                this.optionClick(index);
            }
        });
        this.initListTerrain();

    }
    listTerrains: Terrain [] = [];
    initListTerrain () {
        if(sessionStorage.getItem("terrain")) {
            let data = JSON.parse(sessionStorage.getItem("terrain"))
            this.listTerrains = data;
        }
        this._terrainService.getAll().subscribe(data=>{
            this.listTerrains = data;
            sessionStorage.setItem("terrain",JSON.stringify(data));
          },err=>{ 
            this.listTerrains = [];
          })
    }

    optionClick(option) {

        // rechercher existance
        if (option.value != 0) {
            this.regrouperParForm.setValue(option);
            sessionStorage.setItem("optionSiteSelect",JSON.stringify(option));
        }

        else this.regrouperParForm.setValue(null);
        this.afficherLibelleSite = option.label;
        this.visualiser()


    }

    visualiser() {
        const thisthis = this;
        this._siteService.getGeoJSONAsJSON(this.regrouperParForm?.value?.geoJSON).subscribe(data => {
            this.geoJSON = data;
            // Fonction pour attribuer une couleur en fonction du type de acquereur
            const getColor = (type) => {
                switch(type) {
                    case 'PARTICULIER': return '#FF5733'; // Rouge
                    case 'ENTREPRISE': return '#D68910'; // Vert
                    case 'INDUSTRIE': return '#82E0AA'; // Bleu
                    case 'PROPRIETAIRE_TERRIEN': return '#1E8449'; // Jaune
                    case 'SERVICE_PUBLIC': return '#2874A6'; // Noir
                    default: return '#F9E79F'; // Blanc
                }
            };
            this.dataSource.data = [];
            this._acquisitionService.findBySite(this.regrouperParForm?.value?.value).subscribe(data=>{

                let listTerrainBySite:any[] = JSON.parse(JSON.stringify(this.listTerrains));
                data.forEach(t=>{
                    this.dataSource.data.push({...t.terrain, 
                        proprietaire: t.acquereur.genre + ' ' + t.acquereur.nom + ' ' + t.acquereur.prenom,
                        typeAcquereur: t.acquereur.typeAcquereur,
                        color: getColor(t.acquereur.typeAcquereur)
                    });
                    let index = listTerrainBySite.findIndex(lt=>lt.id==t.terrain_id);
                    if(index>-1){
                        listTerrainBySite.splice(index,1);
                    }
                });
                console.log("====>",listTerrainBySite)
                listTerrainBySite.forEach(lt=>{
                    this.dataSource.data.push({...lt, 
                        color: getColor(null),
                        occupation: 'NON OCCUPE'
                    });
                });
                
                this.isRefresh = false;
                setTimeout(() => {
                    this.isRefresh = true;
                }, 1);
            }, err=>{
                this.isRefresh = false;
                setTimeout(() => {
                    this.isRefresh = true;
                }, 1);
            });
            
            this.chartOptions = {
                chart: {
                    map: null,
                },
                title: {
                    text: "SITE de " + this.afficherLibelleSite
                },
                subtitle: {},
                mapNavigation: {
                    enabled: true,
                    buttonOptions: {
                        alignTo: "spacingBox"
                    }
                },
                legend: {
                    enabled: true
                },
                colorAxis: {
                    min: 0
                },
                series: [
                    
                    {
                        type: 'tiledwebmap',
                        name: 'Carte OpenStreetMap',
                        provider: {
                        type: 'OpenStreetMap',// Thunderforest|OpenStreetMap|Esri|Stamen
                        theme: 'Standard',// OpenTopoMap|Standard,
                        // type: 'Esri',// Thunderforest|OpenStreetMap|Esri|Stamen
                        // theme: 'WorldStreetMap',// WorldTopoMap|WorldImagery|WorldStreetMap,
                        // type: 'OpenStreetMap',// Thunderforest|OpenStreetMap|Esri|Stamen
                        // theme: 'Standard',// OpenTopoMap|Standard,
                        
                        // subdomain: 'a'
                        // https://www.highcharts.com/docs/maps/tiledwebmap
                        },
                        showInLegend : true,
                        states: {
                        hover: {
                            enabled: true,
                            opacity: 0.2,
                            color: 'rgba(0, 0, 0, 0)', // Couleur transparente au survol
                        },
                        },
                    },
                    {
                        type: "map",
                        name: "Parcelle",
                        states: {
                            hover: {
                                color: "#BADA55"
                            }
                        },
                        mapData: this.geoJSON,
                        showInLegend : true,
                        dataLabels: {
                            enabled: true,
                            format: "{point.name}"
                        },
                        allAreas: true,
                        data: this.dataSource.data,
                        joinBy: ['code', 'code'],
                        point: {
                            events: {
                                click: function(event) {
                                    if (event.ctrlKey || event.shiftKey) {
                                    // thisthis._router.navigate(['terrain/show',this['id']]);
                                    const url = thisthis._router.serializeUrl(
                                        thisthis._router.createUrlTree(['/terrain/show', this['id']])
                                      );
                                      window.open(url, '_blank');
                                    // alert('Parcelle: ' + this.name + '\n' +
                                    //       'Code: ' + this['code'] + '\n' +
                                    //       'Superficie: ' + this['superficie'] + '\n' +
                                    //       (this['typeLogement'] ? 'Type Logement: ' + this['typeLogement'] + '\n' : '') + 
                                    //       (this['proprietaire'] ? 'Nom Acquereur: ' + this['proprietaire'] : ''));
                                }}
                            }
                        }
                    }
                ],
                tooltip: {
                    formatter: function() {
                        return '<b>' + this.point.name + '</b><br>' + 
                               'Code: ' + this.point['code'] + '<br>' + 
                               'Superficie: ' + this.point['superficie']+ '<br>' + 
                               (this.point['typeLogement'] ? 'Type Logement: ' + this.point['typeLogement'] + '<br>' : '') + 
                               (this.point['proprietaire'] ? 'Nom Acquereur: ' + this.point['proprietaire'] + '<br>' : '') +
                               (this.point['typeAcquereur'] ? 'Type Acquereur: ' + this.point['typeAcquereur'] + '<br>' : '') +
                               (this.point['occupation'] ? 'NON OCCUPE' + '<br>' : '');
                    }
                },
                credits: {
                    enabled: false
                },
                exporting: {
                    showTable: true,
                    allowHTML: true
                },
                accessibility: {
                  enabled: true, // Assure-toi que l'accessibilité est activée
                },
            };
        }, err => {
            console.log(err);
            this.geoJSON = null;
        });
    }
    
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle the fullscreen mode
     */
    toggleFullscreen(): void
    {
        // Check if the fullscreen is open
        this._isFullscreen = this._getBrowserFullscreenElement() !== null;

        // Toggle the fullscreen
        if ( this._isFullscreen )
        {
            this._closeFullscreen();
        }
        else
        {
            this._openFullscreen();
        }
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get browser's fullscreen element
     *
     * @private
     */
    private _getBrowserFullscreenElement(): Element
    {
        if ( typeof this._fsDoc.fullscreenElement !== 'undefined' )
        {
            return this._fsDoc.fullscreenElement;
        }

        if ( typeof this._fsDoc.mozFullScreenElement !== 'undefined' )
        {
            return this._fsDoc.mozFullScreenElement;
        }

        if ( typeof this._fsDoc.msFullscreenElement !== 'undefined' )
        {
            return this._fsDoc.msFullscreenElement;
        }

        if ( typeof this._fsDoc.webkitFullscreenElement !== 'undefined' )
        {
            return this._fsDoc.webkitFullscreenElement;
        }

        throw new Error('Fullscreen mode is not supported by this browser');
    }

    /**
     * Open the fullscreen
     *
     * @private
     */
    private _openFullscreen(): void
    {this._fsDocEl = document.getElementById("container")  as FSDocumentElement;
        if ( this._fsDocEl.requestFullscreen )
        {
            this._fsDocEl.requestFullscreen();
            return;
        }

        // Firefox
        if ( this._fsDocEl.mozRequestFullScreen )
        {
            this._fsDocEl.mozRequestFullScreen();
            return;
        }

        // Chrome, Safari and Opera
        if ( this._fsDocEl.webkitRequestFullscreen )
        {
            this._fsDocEl.webkitRequestFullscreen();
            return;
        }

        // IE/Edge
        if ( this._fsDocEl.msRequestFullscreen )
        {
            this._fsDocEl.msRequestFullscreen();
            return;
        }
    }
    changerStructure(event) {
        switch(event) {
            case 'OpenStreetMap':
                this.chartOptions.series[0].provider.type = 'OpenStreetMap';
                this.chartOptions.series[0].provider.theme = 'Standard';
                break;
            case 'Esri':
                this.chartOptions.series[0].provider.type = 'Esri';
                this.chartOptions.series[0].provider.theme = 'WorldImagery';
                break;
            case 'EsriWorldTopoMap':
                this.chartOptions.series[0].provider.type = 'Esri';
                this.chartOptions.series[0].provider.theme = 'WorldTopoMap';
                break;
        }
        this.updateFlag = true;
    }

    /**
     * Close the fullscreen
     *
     * @private
     */
    private _closeFullscreen(): void
    {
        if ( this._fsDoc.exitFullscreen )
        {
            this._fsDoc.exitFullscreen();
            return;
        }

        // Firefox
        if ( this._fsDoc.mozCancelFullScreen )
        {
            this._fsDoc.mozCancelFullScreen();
            return;
        }

        // Chrome, Safari and Opera
        if ( this._fsDoc.webkitExitFullscreen )
        {
            this._fsDoc.webkitExitFullscreen();
            return;
        }

        // IE/Edge
        else if ( this._fsDoc.msExitFullscreen )
        {
            this._fsDoc.msExitFullscreen();
            return;
        }
    }

}