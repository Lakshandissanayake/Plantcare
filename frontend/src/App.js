import React from "react";
import { Routes, Route } from "react-router-dom";
import { NotificationProvider } from "./contexts/NotificationContext"; // 👈 import your provider

// Components
import Home from './Components/Home';
import Myplants from "./Components/Myplants";
import AddPlant from "./Components/AddPlant";
import SinglePlantVeiw from "./Components/SinglePlantVeiw";
import UpdatePlant from "./Components/UpdatePlant";
import GrowthForm from "./Components/GrowthForm";
import GrowthPage from "./Components/GrowthPage";
import GrowthUpdate from "./Components/GrowthUpdate";
import WateringSchedule from './views/WateringSchedule';
import WateringScheduleInsert from './views/WaterShedulingInsert';
import WateringUpdate from './views/WaterShedulingUpdate';
import ReadCategory from "./pages/readcategory";
import AddCategory from "./pages/addcategory";
import EditCategory from "./pages/editcategory";

const App = () => {
  return (
    <NotificationProvider> 
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/myplants" element={<Myplants />} />
        <Route exact path="/addplant" element={<AddPlant />} />
        <Route exact path="/plant/:pid" element={<SinglePlantVeiw />} />
        <Route exact path="/updatePlant/:pid" element={<UpdatePlant />} />

        <Route path="/watering-schedule/:pid" element={<WateringSchedule />} />
        <Route path="/watering-schedule-insert/:pid" element={<WateringScheduleInsert />} />
        <Route path="/watering-schedule-update/:pid" element={<WateringUpdate />} />

        <Route path="/addcategory" element={<AddCategory />} />
        <Route path="/editcategory/:id" element={<EditCategory />} />
        <Route path="/readcategory" element={<ReadCategory />} />

        <Route exact path="/growth/:pid" element={<GrowthForm />} />
        <Route path="/upgrowth/:growthId" element={<GrowthUpdate />} />
        <Route exact path="/showgrowth/:pid" element={<GrowthPage />} />
      </Routes>
    </NotificationProvider>
  );
};

export default App;
