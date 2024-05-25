/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id   : 'dashboard',
        title: 'Tableau de Bord',
        type : 'basic',
        icon : 'iconsmind:dashboard',
        link : '/dashboard',
        roles: 'ADMIN,USER'
    },
    {
        id   : 'acquisitions',
        title: 'Acquisitions',
        type : 'basic',
        icon : 'heroicons_solid:database',
        link : '/acquisitions',
        roles: 'ADMIN,USER,COLLECTE,VISITEUR'
    },
    {
        id   : 'acquereur',
        title: 'Acquereurs',
        type : 'basic',
        icon : 'heroicons_outline:users',
        link : '/acquereur',
        roles: 'ADMIN,USER,COLLECTE'
    },
    {
        type: 'divider',
        roles: 'ADMIN,USER'
    },
    {
        id   : 'terrain',
        title: 'Terrains',
        type : 'basic',
        icon : 'heroicons_solid:database',
        link : '/terrain',
        roles: 'ADMIN,USER'
    },
    {
        id   : 'site',
        title: 'Sites',
        type : 'basic',
        icon : 'map',
        link : '/site',
        roles: 'ADMIN,USER'
    },
    {
        id   : 'utilisateurs',
        title: 'Utilisateurs',
        type : 'basic',
        icon : 'heroicons_outline:users',
        link : '/utilisateurs',
        roles: 'ADMIN,USER'
    },
    {
        id   : 'projets',
        title: 'Projet',
        type : 'basic',
        icon : 'iconsmind:project',
        link : '/projets',
        roles: 'ADMIN,USER'
    },
    {
        type: 'divider',
        roles: 'ADMIN,USER,COLLECTE,VISITEUR'
    }
];
export const compactNavigation: FuseNavigationItem[] = [
   
    {
        id   : 'dashboard',
        title: 'Tableau de Bord',
        type : 'basic',
        icon : 'iconsmind:dashboard',
        link : '/dashboard',
        roles: 'ADMIN,USER'
    },
    {
        id   : 'acquisitions',
        title: 'Acquisitions',
        type : 'basic',
        icon : 'heroicons_solid:database',
        link : '/acquisitions',
        roles: 'ADMIN,USER,COLLECTE,VISITEUR'
    },
    {
        id   : 'acquereur',
        title: 'Acquereurs',
        type : 'basic',
        icon : 'heroicons_outline:users',
        link : '/acquereur',
        roles: 'ADMIN,USER,COLLECTE'
    },
    {
        type: 'divider',
        roles: 'ADMIN,USER'
    },
    {
        id   : 'terrain',
        title: 'Terrains',
        type : 'basic',
        icon : 'heroicons_solid:database',
        link : '/terrain',
        roles: 'ADMIN,USER'
    },
    {
        id   : 'site',
        title: 'Sites',
        type : 'basic',
        icon : 'map',
        link : '/site',
        roles: 'ADMIN,USER'
    },
    {
        id   : 'utilisateurs',
        title: 'Utilisateurs',
        type : 'basic',
        icon : 'heroicons_outline:users',
        link : '/utilisateurs',
        roles: 'ADMIN,USER'
    },
    {
        id   : 'projets',
        title: 'Projet',
        type : 'basic',
        icon : 'iconsmind:project',
        link : '/projets',
        roles: 'ADMIN,USER'
    },
    {
        type: 'divider',
        roles: 'ADMIN,USER,COLLECTE,VISITEUR'
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id   : 'dashboard',
        title: 'Tableau de Bord',
        type : 'basic',
        icon : 'iconsmind:dashboard',
        link : '/dashboard',
        roles: 'ADMIN,USER'
    },
    {
        id   : 'acquisitions',
        title: 'Acquisitions',
        type : 'basic',
        icon : 'heroicons_solid:database',
        link : '/acquisitions',
        roles: 'ADMIN,USER,COLLECTE,VISITEUR'
    },
    {
        id   : 'acquereur',
        title: 'Acquereurs',
        type : 'basic',
        icon : 'heroicons_outline:users',
        link : '/acquereur',
        roles: 'ADMIN,USER,COLLECTE'
    },
    {
        type: 'divider',
        roles: 'ADMIN,USER'
    },
    {
        id   : 'terrain',
        title: 'Terrains',
        type : 'basic',
        icon : 'heroicons_solid:database',
        link : '/terrain',
        roles: 'ADMIN,USER'
    },
    {
        id   : 'site',
        title: 'Sites',
        type : 'basic',
        icon : 'map',
        link : '/site',
        roles: 'ADMIN,USER'
    },
    {
        id   : 'utilisateurs',
        title: 'Utilisateurs',
        type : 'basic',
        icon : 'heroicons_outline:users',
        link : '/utilisateurs',
        roles: 'ADMIN,USER'
    },
    {
        id   : 'projets',
        title: 'Projet',
        type : 'basic',
        icon : 'iconsmind:project',
        link : '/projets',
        roles: 'ADMIN,USER'
    },
    {
        type: 'divider',
        roles: 'ADMIN,USER,COLLECTE,VISITEUR'
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id   : 'dashboard',
        title: 'Tableau de Bord',
        type : 'basic',
        icon : 'iconsmind:dashboard',
        link : '/dashboard',
        roles: 'ADMIN,USER'
    },
    {
        id   : 'acquisitions',
        title: 'Acquisitions',
        type : 'basic',
        icon : 'heroicons_solid:database',
        link : '/acquisitions',
        roles: 'ADMIN,USER,COLLECTE,VISITEUR'
    },
    {
        id   : 'acquereur',
        title: 'Acquereurs',
        type : 'basic',
        icon : 'heroicons_outline:users',
        link : '/acquereur',
        roles: 'ADMIN,USER,COLLECTE'
    },
    {
        type: 'divider',
        roles: 'ADMIN,USER'
    },
    {
        id   : 'terrain',
        title: 'Terrains',
        type : 'basic',
        icon : 'heroicons_solid:database',
        link : '/terrain',
        roles: 'ADMIN,USER'
    },
    {
        id   : 'sites',
        title: 'Sites',
        type : 'basic',
        icon : 'map',
        link : '/site',
        roles: 'ADMIN,USER'
    },
    {
        id   : 'utilisateurs',
        title: 'Utilisateurs',
        type : 'basic',
        icon : 'heroicons_outline:users',
        link : '/utilisateurs',
        roles: 'ADMIN,USER'
    },
    {
        id   : 'projets',
        title: 'Projet',
        type : 'basic',
        icon : 'iconsmind:project',
        link : '/projets',
        roles: 'ADMIN,USER'
    },
    {
        type: 'divider',
        roles: 'ADMIN,USER,COLLECTE,VISITEUR'
    }
];
