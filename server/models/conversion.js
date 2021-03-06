const mongoose = require('mongoose');
// Conversion Model
// Schema:
// name: filename
// createdAt:  date of creation
// type: pdf/html
// status: conversion status
// data: conversion data
const CONVERSION_TYPES = ['pdf', 'html'];
const Schema = mongoose.Schema;
const ConversionSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  type: {
    type: String,
    required: true,
    enum: CONVERSION_TYPES,
  },
  status: {
    type: Number,
    required: false,
  },
  data: {
    type: Schema.Types.Mixed,
    required: true,
  },
  text: {
    type: String,
    required: false,
  },
});

const Conversion = () => {
  try {
    return mongoose.model('conversion', ConversionSchema);
  } catch (e) {
    if (e.name !== 'OverwriteModelError') throw e;
    return mongoose.model('conversion');
  }
};

module.exports = Conversion();
