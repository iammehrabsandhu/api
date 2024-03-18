const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./api.html"));
});

app.post("/bfhl", (req, res) => {
  try {
    const data = req.body.data;
    console.log(data);

    

    const user_id = "Mehrab_Sandhu_20092002";
    const email = "mehrab0880.be21@chitkara.edu.in";
    const roll_number = "2110990880";
    const even_numbers = [];
    const odd_numbers = [];
    const alphabets = [];


    for (let i = 0; i < data.length; i++) {
      if (data[i] >= "0" && data[i] <= "9") {
        let c = parseInt(data[i]);
        if (c % 2 == 0) {
          even_numbers.push(data[i]);
        } else {
          odd_numbers.push(data[i]);
        }
      } else if (typeof data[i] === "string") {
        const uppercase = data[i].toUpperCase();
        alphabets.push(uppercase);
      }
    }


    const response = {
      is_success: true,
      user_id: user_id,
      email: email,
      roll_number: roll_number,
      even_numbers: even_numbers,
      odd_numbers: odd_numbers,
      alphabets: alphabets,
    };
 
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
