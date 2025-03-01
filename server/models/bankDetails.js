const mongoose = require("mongoose");

const bankDetailSchema = new mongoose.Schema({
  bankName: { type: String, required: true },
  accountHolder: { type: String, required: true },
  accountNumber: { type: String, required: true, unique: true },
  ifscCode: { type: String, required: true },
  upiId: { type: String },
}, { timestamps: true });

const BankDetail = mongoose.model("BankDetail", bankDetailSchema);

module.exports = BankDetail;
