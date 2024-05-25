const express = require('express');
const { DataModel } = require('../models/data.schema');
const dataRouter = express.Router();

// Get all data
dataRouter.get('/data', async (req, res) => {
    try {
        const data = await DataModel.find();
        return res.status(200).json({ error: false, items: data });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: true, msg: "Unable to get the data." });
    }
});

module.exports = { dataRouter };
