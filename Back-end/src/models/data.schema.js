const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  Overhead: { type: String, required: true },
  Jan: { type: Number, required: true },
  Feb: { type: Number, required: true },
  March: { type: Number, required: true },
  April: { type: Number, required: true },
  May: { type: Number, required: true },
  June: { type: Number, required: true },
  July: { type: Number, required: true },
  August: { type: Number, required: true },
  September: { type: Number, required: true },
  October: { type: Number, required: true },
  November: { type: Number, required: true },
  December: { type: Number, required: true }
});

const DataModel = mongoose.model('Data', dataSchema);

module.exports = { DataModel };
