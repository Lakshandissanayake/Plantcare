const express = require('express');
const router = express.Router();
const growthController = require('../Controlers/growthController');

// Routes with multer middleware directly
module.exports = (upload) => {
  // Apply the 'upload' middleware here for POST and PUT requests
  router.post("/:pid/growth", upload.single('file'), growthController.addGrowthRecord);
  router.put("/:id", upload.single('file'), growthController.updateGrowthRecord);
  router.get('/', growthController.getAllGrowthRecords);
  router.get('/:pid/', growthController.getGrowthRecordBypid);
  router.get('/growth/:growthId', growthController.getGrowthRecordByGrowthId);
  router.delete('/:id', growthController.deleteGrowthRecord);
  
  return router;  // Return the router after applying the upload middleware
};