import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Myplants from "./Components/Myplants";
import AddPlant from "./Components/AddPlant";
import SinglePlantVeiw from "./Components/SinglePlantVeiw";
import UpdatePlant from "./Components/UpdatePlant";
import GrowthForm from "./Components/GrowthForm";
import GrowthPage from "./Components/GrowthPage";
import GrowthUpdate from "./Components/GrowthUpdate";


const App = () => {
  return (
    <div>
      <React.Fragment>
        <Routes>
          <Route exact  path="/" element = {<Home/>}/>
          <Route exact path="/myplants" element = {<Myplants/>}/>
          <Route exact path="/addplant" element = {<AddPlant/>}/>
          <Route exact path="/plant/:pid" element={<SinglePlantVeiw/>}/>
          <Route exact path="/updatePlant/:pid" element={<UpdatePlant />} />

          <Route exact path="/growth/:pid" element={<GrowthForm />} />
          <Route  path="/upgrowth/:growthId" element={<GrowthUpdate />} />
          <Route exact path="/showgrowth/:pid" element={<GrowthPage />} />  


          
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
