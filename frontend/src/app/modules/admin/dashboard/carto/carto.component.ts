import { Component, OnInit, ViewChild, ElementRef, Inject, Input, TemplateRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SiteService } from 'app/core/services/site.service';
import { Site } from 'app/models/site.model';
import Highcharts from "highcharts/highmaps";
import { MatTableDataSource } from '@angular/material/table';
import { AcquisitionService } from 'app/core/services/acquisition.service';
import { DOCUMENT } from '@angular/common';
import { FSDocument, FSDocumentElement } from '@fuse/components/fullscreen';

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

    optionsGroup: any[];

    regrouperPar: any;
    afficherLibelleSite: string = "";
    regrouperParForm = new FormControl('');
    Highcharts: typeof Highcharts = Highcharts;
    chartRef: Highcharts.Chart;
    chartConstructor = "mapChart";
    isRefresh = false;
    dataSource: MatTableDataSource<any> = new MatTableDataSource();

    displayedColumns: string[] = [
        'code',
        'name',
        'contenance',
        'typeLogement'
    ];

    enPleinEcran = false
    chartOptions: Highcharts.Options = {};
    /**
     * Constructor
     */
    constructor( private _siteService: SiteService, private _acquisitionService: AcquisitionService,
        @Inject(DOCUMENT) private _document: Document
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
        });

    }

    optionClick(option) {

        // rechercher existance
        if (option.value != 0) {
            this.regrouperParForm.setValue(option);
        }

        else this.regrouperParForm.setValue(null);
        this.afficherLibelleSite = option.label;
        this.visualiser()


    }

    visualiser() {
        this._siteService.getGeoJSONAsJSON(this.regrouperParForm?.value?.geoJSON).subscribe(data => {

            this.geoJSON = data;
            // Fonction pour attribuer une couleur en fonction du type de acquereur
            const getColor = (type) => {
                switch(type) {
                    case 'PARTICULIER': return '#FF0000'; // Rouge
                    case 'ENTREPRISE': return '#00FF00'; // Vert
                    case 'INDUSTRIE': return '#0000FF'; // Bleu
                    case 'PROPRIETAIRE_TERRIEN': return '#FFFF00'; // Jaune
                    case 'SERVICE_PUBLIC': return '#000000'; // Noir
                    default: return '#FFFFFF'; // Blanc
                }
            };
            this.dataSource.data = [];
            this._acquisitionService.findBySite(this.regrouperParForm?.value?.value).subscribe(data=>{
                data.forEach(t=>{
                    this.dataSource.data.push({...t.terrain, 
                        proprietaire: t.acquereur.nom + ' ' + t.acquereur.prenom,
                        color: getColor(t.acquereur.typeAcquereur)
                     })
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
            
            this.chartOptions =
            {
                chart: {
                    map: this.geoJSON
                },
                title: {
                    text: "SITE de " + this.afficherLibelleSite
                },
                subtitle: {
                },
                mapNavigation: {
                    enabled: true,
                    buttonOptions: {
                        alignTo: "spacingBox"
                    },
                },
                legend: {
                    enabled: false
                },
                colorAxis: {
                    min: 0
                },
                series: [
                    {
                        type: "map",
                        name: "Parcelle",
                        states: {
                            hover: {
                                color: "#BADA55"
                            }
                        },
                        dataLabels: {
                            enabled: true,
                            format: "{point.name}"
                        },
                        allAreas: true,
                        data: this.dataSource.data,
                        joinBy : [ 'code', 'code'],
                    }
                ],
                tooltip: {
                    formatter: function() {
                        return '<b>' + this.point.name + '</b><br>' + 
                               'Code: ' + this.point['code'] + '<br>' + 
                               'Superficie: ' + this.point['superficie']+ '<br>' + 
                               (this.point['typeLogement']?'Type Logement: ' + this.point['typeLogement'] + '<br>': ' ') + 
                               (this.point['proprietaire']?'Nom Acquereur: ' + this.point['proprietaire']:'');
                    }
                },

                exporting: {
                    showTable: true,
                    allowHTML: true,

                },
            };

        }, err => {
            console.log(err)
            this.geoJSON = null
        })
    }

    togglePleinEcran() {
        this.enPleinEcran = !this.enPleinEcran;
        this.isRefresh = false;
        setTimeout(() => {
            this.isRefresh = true;
        }, 1);
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