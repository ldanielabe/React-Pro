import { lazy, LazyExoticComponent } from 'react';
import { LazyPages3 } from '../LazyLoad/Pages';
import WithoutLazy from '../LazyLoad/Pages/WithoutLazy';

type Element = () => JSX.Element;

interface Route{
    to: string,
    path: string,
    Component: Element | LazyExoticComponent<Element>,
    name: string
}

const LazyLayout = lazy(()=> import(/* webpackChunkName: "LazyLayout" */ '../LazyLoad/Layout/LazyLayout'));

export const route: Route[] =[
    {
        to: '/lazyLoad',
        path: 'lazyLoad/*',
        Component: LazyLayout,
        name: 'Lazy Load'
    },
    {
        to: '/withoutLazy',
        path: 'withoutLazy',
        Component: WithoutLazy,
        name: 'withoutLazy'
    }
];