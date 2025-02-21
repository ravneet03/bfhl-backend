const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// GET /bfhl - Returns operation_code
app.get("/bfhl", (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

// POST /bfhl - Process input data
app.post("/bfhl", (req, res) => {
    const { data } = req.body;
    
    if (!data || !Array.isArray(data)) {
        return res.status(400).json({ is_success: false, message: "Invalid input" });
    }

    const user_id = "ravneet_singh_21022025";  // Change with your details
    const email = "your-email@cuchd.in";
    const roll_number = "21BCSXXXX";

    const numbers = data.filter(x => !isNaN(x));
    const alphabets = data.filter(x => /^[a-zA-Z]$/.test(x));
    const highest_alphabet = alphabets.length ? [alphabets.sort().pop()] : [];

    res.json({
        is_success: true,
        user_id,
        email,
        roll_number,
        numbers,
        alphabets,
        highest_alphabet
    });
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
