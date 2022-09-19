import { RoutePath } from "types/routes";
import { Route, Routes } from "../node_modules/react-router-dom/dist/index";
import Home from "pages/Home";

const Router = ()=> {
    return (
        <Routes>
            <Route path={RoutePath.HOME} element={<Home/>}/>
        </Routes>
    );
}

export default Router;