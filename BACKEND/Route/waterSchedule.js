const experess = require('express');
const router = experess.Router();
//const WaterSchedule = require("../Model/waterSchedule");
const WaterController = require("../Controlers/waterSchedule");

router.get("/",WaterController.getAllwaterSchedule);
router.post("/:pid",WaterController.addWaterSchedule);
router.get("/:pid",WaterController.getwaterScheduleById);
router.put("/:id",WaterController.updatewaterSchedule);
router.delete("/:id",WaterController.deletewaterSchedule);

module.exports = router;