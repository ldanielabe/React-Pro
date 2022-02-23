import { NavLink, Route, Routes } from "react-router-dom";
import { route } from "../../Routes/routesIntern";


export const LazyLayout = () => {
  return (
    <div>
        <h1>LazyLayout Page</h1>
        <ul>
            {route.map(({to, name})=>(
                <li key={to}>
                <NavLink to={to}>
                    {name}
                </NavLink>
                </li>
            ))}
        </ul>
        <Routes>
            {route.map(({to,path,Component})=>
                <Route key={to} path={path} element={<Component/>} />
            )}
        </Routes>
    </div>);
};

export default LazyLayout;