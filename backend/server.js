const express = require("express");
const app = express();
const cors = require("cors");

const PORT = 3000;
app.use(cors());
// Middleware to parse JSON
app.use(express.json());

// Simple Route
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.post("/api/speech-service", async (req, res) => {
  const { transcript } = await req.body;
  console.log("Data recieved from the front end", transcript);
  res.send({ transcript: transcript });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
