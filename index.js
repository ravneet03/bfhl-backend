const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Root route
app.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to BFHL API! Use /bfhl for requests." });
});

// GET /bfhl - Returns operation_code
app.get("/bfhl", (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

// POST /bfhl - Process input data
app.post("/bfhl", (req, res) => {
    const { data } = req.body;

    if (!data || !Array.isArray(data)) {
        return res.status(400).json({ is_success: false, message: "Invalid input. 'data' must be an array." });
    }

    const user_id = "ravneet_singh"; 
    const email = "22bcs15231@cuchd.in";
    const roll_number = "22BCS15231";

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

// ✅ Export the app for Vercel (DO NOT use app.listen())
module.exports = app;
