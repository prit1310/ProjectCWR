const validateBankDetails = (req, res, next) => {
    const { bankName, accountHolder, accountNumber, ifscCode, upiId } = req.body;
  
    // Check if all required fields are present
    if (!bankName || !accountHolder || !accountNumber || !ifscCode) {
      return res.status(400).json({ msg: "All fields except UPI ID are required" });
    }
  
    // Validate account number (should be numeric & 6-18 digits)
    const accountNumberRegex = /^[0-9]{6,18}$/;
    if (!accountNumberRegex.test(accountNumber)) {
      return res.status(400).json({ msg: "Invalid account number" });
    }
  
    // Validate IFSC code (should be 11 alphanumeric characters)
    const ifscRegex = /^[A-Z]{4}0[A-Z0-9]{6}$/;
    if (!ifscRegex.test(ifscCode)) {
      return res.status(400).json({ msg: "Invalid IFSC code" });
    }
  
    // Validate UPI ID (optional, should match UPI format)
    if (upiId && !/^[a-zA-Z0-9.\-_]{2,256}@[a-zA-Z]{2,64}$/.test(upiId)) {
      return res.status(400).json({ msg: "Invalid UPI ID format" });
    }
  
    next();
  };
  
  module.exports = validateBankDetails;
  