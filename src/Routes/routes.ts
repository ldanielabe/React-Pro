import { lazy, LazyExoticComponent } from 'react';

type Element = () => JSX.Element;

interface Route{
    to: string,
    path: string,
    Component: Element | LazyExoticComponent<Element>,
    name: string
}

const Lazy1 = lazy(()=> import('../LazyLoad/Pages/LazyPages1'));
const Lazy2 = lazy(()=> import('../LazyLoad/Pages/LazyPages2'));
const Lazy3 = lazy(()=> import('../LazyLoad/Pages/LazyPages3'));

export const route: Route[] =[
    {
        to: '/lazy1',
        path: 'lazy1',
        Component: Lazy1,
        name: 'Lazy 1'
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        Component: Lazy2,
        name: 'Lazy 2'
    },
    {
        to: '/lazy3',
        path: 'lazy3',
        Component: Lazy3,
        name: 'Lazy 3'
    }
];