import {Link, Route, Routes} from "react-router-dom";
import Home from "./home";
import CorePage from "@/ui/core";


export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ui/core" element={<CorePage />} />
        </Routes>
    );
}
