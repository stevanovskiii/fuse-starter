/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const glavnoMeni: FuseNavigationItem[] = [
    {
        id   : 'test',
        title: 'Test',
        type : 'basic',
        icon : 'heroicons_outline:home',
        link : '/home'
    }
]
export const defaultNavigation: FuseNavigationItem[] = [
    {
        id   : 'home',
        title: 'Дома',
        type : 'basic',
        icon : 'heroicons_outline:home',
        link : '/home'
    },
    {
        id   : 'projects',
        title: 'Проекти',
        type : 'basic',
        icon : 'heroicons_outline:clipboard-check',
        link : '/zadaci'
    },
    {
        id   : 'settings',
        title: 'Подесувања',
        type : 'basic',
        icon : 'heroicons_outline:cog',
        link : '/settings'
    },
    {
        id   : 'hdome',
        title: 'Извештаи',
        type : 'basic',
        icon : 'heroicons_outline:document-report',
        link : '/izvestai'
    }
];


export const compactNavigation: FuseNavigationItem[] = [
    {
        id   : 'home',
        title: 'Дома',
        type : 'basic',
        icon : 'heroicons_outline:home',
        link : '/home'
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id   : 'home',
        title: 'Дома',
        type : 'basic',
        icon : 'heroicons_outline:home',
        link : '/home'
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id   : 'home',
        title: 'Дома',
        type : 'basic',
        icon : 'heroicons_outline:home',
        link : '/home'
    }
];

