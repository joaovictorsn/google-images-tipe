import {BrowserRouter , Route, Routes} from "react-router-dom";
import { Index } from "../../pages/Index/Index";
import { Search } from "../../pages/Search/Search";

 export function Router(){
    return(
    <BrowserRouter>
        <Routes>
            <Route index element={<Index/>}/>
            <Route path="/search/:params" element={<Search/>}/>
            <Route path="*" element={<h1>Page is not found - ERROR 404</h1>}/>
        </Routes>
    </BrowserRouter>
    )
}