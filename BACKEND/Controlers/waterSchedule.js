const WaterSchedule = require("../Model/waterSchedule");
const Plant = require("../Model/plantModel");
const nodemailer = require('nodemailer');

const getAllwaterSchedule = async (req, res, next) => {
  let waterSchedules;
  try {
    waterSchedules = await WaterSchedule.find();
  } catch (err) {
    console.log(err);
  }
  if (!waterSchedules) {
    return res.status(404).json({ message: "No waterSchedules found" });
  }
  return res.status(200).json({ waterSchedules });
};

const addWaterSchedule = async (req, res, next) => {
  const { userid, plantname, frequency, wateringtime, status } = req.body;
  const pid = req.params.pid;

  try {
    // Check if the plant exists
    const plant = await Plant.findById(pid);
    if (!plant) {
      return res.status(404).json({ message: "Plant not found" });
    }

    // Create a new watering schedule
    const waterSchedule = new WaterSchedule({
      pid,
      userid,
      plantname,
      frequency,
      wateringtime,
      status,
    });

    await waterSchedule.save();

    return res.status(201).json({
      message: "Watering schedule added successfully",
      waterSchedule,
    });
  } catch (err) {
    console.error("Error adding watering schedule:", err);
    return res.status(500).json({
      message: "Failed to add watering schedule",
      error: err.message,
    });
  }
};

const getwaterScheduleById = async (req, res, next) => {
  const pid = req.params.pid;
  let waterSchedules;
  try {
    waterSchedules = await WaterSchedule.find({ pid });
  } catch (err) {
    console.log(err);
  }
  if (!waterSchedules) {
    return res.status(404).json({ message: "No waterSchedule found" });
  }
  return res.status(200).json({ waterSchedules });
};

const updatewaterSchedule = async (req, res, next) => {
  const id = req.params.id;
  const { userid, plantname, frequency, wateringtime, status } = req.body;
  let waterSchedules;
  try {
    waterSchedules = await WaterSchedule.findByIdAndUpdate(id, {
      plantname: plantname,
      frequency: frequency,
      wateringtime: wateringtime,
      status: status,
    });
    waterSchedules = await waterSchedules.save();
  } catch (err) {
    console.log(err);
  }
  if (!waterSchedules) {
    return res.status(404).json({ message: "No waterSchedule found" });
  }
  return res.status(200).json({ waterSchedules });
};

// const deletewaterSchedule = async (req, res, next) => {
//   const id = req.params.id;
//   let waterSchedules;
//   try {
//     waterSchedules = await WaterSchedule.findByIdAndDelete(id);
//   } catch (err) {
//     console.log(err);
//   }
//   if (!waterSchedules) {
//     return res.status(404).json({ message: "No waterSchedule found" });
//   }
//   return res.status(200).json({ waterSchedules });
// };

const deletewaterSchedule = async (req, res, next) => {
  const id = req.params.id;
  let waterSchedules;
  try {
    waterSchedules = await WaterSchedule.findByIdAndDelete(id);

    if (!waterSchedules) {
      return res.status(404).json({ message: "No waterSchedule found" });
    }
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'markvishwa860@gmail.com',
        pass: 'vpmr rnbk bwwt zlud',
      }
    });

    let mailOptions = {
      from: '"Water Schedule Admin" <markvishwa860@gmail.com>',
      to: '<navodyathathsara860@gmail.com>',
      subject: 'Water Schedule Deleted',
      html: `
      <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; padding: 20px; background-color: #f4f4f4; border-radius: 8px;">
        <h2 style="color: #F44336; text-align: center;">Water Schedule Deleted</h2>
        <p style="font-size: 18px; text-align: center; color: #555;">We regret to inform you that Water Schedule has been removed from Plant Care.</p>
        
        <div style="background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); margin-top: 20px;">
          <p style="font-size: 16px;"><strong>Plant Name:</strong> ${waterSchedules.plantname}</p>
          <p style="font-size: 16px;"><strong> Frequency:</strong> ${waterSchedules.frequency}</p>
        </div>

        <p style="font-size: 14px; color: #888; text-align: center; margin-top: 20px;">If you have any questions, please contact Plant Care Support.</p>
      </div>
    `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Deletion Email sent successfully:", info.messageId);

  } catch (err) {
    console.error("Error deleting Admin or sending email:", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }

  return res.status(200).json({ waterSchedules });
};

exports.getAllwaterSchedule = getAllwaterSchedule;
exports.addWaterSchedule = addWaterSchedule;
exports.getwaterScheduleById = getwaterScheduleById;
exports.updatewaterSchedule = updatewaterSchedule;
exports.deletewaterSchedule = deletewaterSchedule;
