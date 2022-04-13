import { lazy, LazyExoticComponent } from 'react';
import { ShopingPage } from '../ComponentPatterns/Pages/ShopingPage';
import { LazyPages3 } from '../LazyLoad/Pages';
import WithoutLazy from '../LazyLoad/Pages/WithoutLazy';
import { RegisterPage } from '../Form/Pages/RegisterPage';
import { FormikBasicPage } from '../ComponentPatterns/Pages/FormikBasicPage';
import { FormikYupPage } from '../ComponentPatterns/Pages/FormikYupPage';
import { FormikComponentsPage } from '../ComponentPatterns/Pages/FormikComponentsPage';
import { FormikAbstractPage } from '../ComponentPatterns/Pages/FormikAbstractPage';

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
    },
    {
        to: '/formikBasic',
        path: 'formikBasic',
        Component: FormikBasicPage,
        name: 'Formik Basic'
    },
    {
        to: '/formikYup',
        path: 'formikYup',
        Component: FormikYupPage,
        name: 'Formik Yup'
    },
    {
        to: '/formikComponents',
        path: 'formikComponents',
        Component: FormikComponentsPage,
        name: 'Formik Components'
    },
    {
        to: '/formikAbstract',
        path: 'formikAbstract',
        Component: FormikAbstractPage,
        name: 'Formik Abstract'
    }
];