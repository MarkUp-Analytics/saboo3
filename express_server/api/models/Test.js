const mongoose = require("mongoose");

const TestSchema = mongoose.Schema({
    name: { type: String }
}, { versionKey: false })

module.exports = mongoose.model("Test", TestSchema, "test");