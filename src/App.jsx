import React from "react";
import { createBrowserRouter, Outlet, RouterProvider, Route, createRoutesFromElements,  } from "react-router-dom";
import TopBox from "./components/topBox/TopBox";
import Navbar from "./components/navbar/Navbar";
import ScoreCard from "./pages/scoreCard/ScoreCard";
import Squads from "./pages/squads/Squads";
import Commentary from "./pages/commentary/Commentary";
import HighLights from "./pages/highlights/Highlights";
import { useEffect } from "react";
import { useContext } from "react";
import { ScoreContext } from "./context/ScoreContext";
import axios from "axios";

const Layout = () => {
    return (
        <>
            <div>
                <TopBox />
                <Navbar />
                <div>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Layout/>}>
                <Route index element={<ScoreCard />} />
                <Route path="squads" element={<Squads />} />
                <Route path="commentary" element={<Commentary />} />
                <Route path="highlights" element={<HighLights />} />
            </Route>
        </>
    )
)

const App = () => {
    const { dispatch } = useContext(ScoreContext);

    useEffect(()=>{
        const fetchData = async() => {
            dispatch({ type: "LOADING_START" })
            try{
                const res = await axios.get("https://production-rest-microservice.thesportstak.com//api/v2/cricket/getScoreCard/56622");
                // console.log(res.data.data);
                dispatch({ type: "LOADING_SUCCESS", payload: res.data.data });
            }catch(err){
                console.log(err);
                dispatch({ type: "LOADING_FAILURE" });
            }
        }
        fetchData();
    },[])

    return (
        <div className="mainApp">
            <RouterProvider router={router} />
        </div>
    )
}

export default App