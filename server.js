const express = require("express");
const app = express();
const port = 3000; // Change this to your desired port number

app.use(express.json()); // To parse JSON data in the request body

// Addition endpoint
app.post("/add", (req, res) => {
  const { num1, num2 } = req.body;
  const result = num1 + num2;
  res.json({ result });
});

// Subtraction endpoint
app.post("/subtract", (req, res) => {
  const { num1, num2 } = req.body;
  const result = num1 - num2;
  res.json({ result });
});

// Multiplication endpoint
app.post("/multiply", (req, res) => {
  const { num1, num2 } = req.body;
  const result = num1 * num2;
  res.json({ result });
});

// Division endpoint
app.post("/divide", (req, res) => {
  const { num1, num2 } = req.body;
  if (num2 === 0) {
    res.status(400).json({ error: "Division by zero is not allowed" });
  } else {
    const result = num1 / num2;
    res.json({ result });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

/*
app.get("/subtract/:num1/:num2", (req, res) => {
  const num1 = parseFloat(req.params.num1);
  const num2 = parseFloat(req.params.num2);
  const result = num1 - num2;
  res.json({ result });
});

// Define other endpoints similarly for multiplication, division, etc.
app.get("/multiply", (req, res) => {
  const { value1, value2 } = req.query;
  const product = parseFloat(value1) * parseFloat(value2);
  res.send({ product });
});

app.get("/division", (req, res) => {
  const { numerator, denominator } = req.query;
  const result = parseFloat(numerator) / parseFloat(denominator);
  res.send({ result });
});

app.get("/percent", (req, res) => {
  const { value, percent } = req.query;
  const result = (parseFloat(value) * parseFloat(percent)) / 100;

  res.send({ result });
});

// calculate area of a circle

app.get("/circleArea", (req, res) => {
  const { radius } = req.query;
  const area = Math.PI * Math.pow(parseFloat(radius), 2);

  res.send({ area });
});

// claculate volume of a cylinder

app.get("/cylinderVolume", (req, res) => {
  const { radius, height } = req.query;
  const volume = Math.PI * Math.pow(parseFloat(radius), 2) * parseFloat(height);
  res.send({ volume });
});

// calculate pythagoras theorem

app.get("/pythagoras", (req, res) => {
  const { a, b } = req.query;
  const c = Math.sqrt(Math.pow(parseFloat(a), 2) + Math.pow(parseFloat(b), 2));
  res.send({ c });
});
*/
