import { BrowserRouter, Navigate, Routes, Route, NavLink} from 'react-router-dom';
import { Suspense } from 'react';
import { route } from './routes'

import logo from '../logo.svg'

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
        <BrowserRouter>
        {Suspense}
            <div className='main-layout'>
                <nav>
                    <img src={logo} alt='React logo'></img>
                    <ul>
                        {route.map(({to, name})=>(
                            <li key={to}>
                            <NavLink to={to} className={({isActive})=>isActive? 'nav-active': ''}>
                                {name}
                            </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                <Routes>
                    {route.map(({to,path,Component})=>
                        <Route key={to} path={path} element={<Component/>} />
                    )}
                    
                    <Route path="/*" element={<Navigate to={route[0].to} replace/>} />

                </Routes>
            </div>
        </BrowserRouter>
    </Suspense>
  )
};
