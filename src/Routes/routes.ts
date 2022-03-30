import { lazy, LazyExoticComponent } from 'react';
import { ShopingPage } from '../ComponentPatterns/Pages/ShopingPage';
import { LazyPages3 } from '../LazyLoad/Pages';
import WithoutLazy from '../LazyLoad/Pages/WithoutLazy';
import { RegisterPage } from '../Form/Pages/RegisterPage';

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
    },
    {
        to: '/shopping',
        path: 'shopping',
        Component: ShopingPage,
        name: 'Shopping'
    },
    {
        to: '/register',
        path: 'register',
        Component: RegisterPage,
        name: 'Register'
    }
];