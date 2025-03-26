import express, { Request, Response } from "express";
import StateMachine from "./StateMachine/StateMachine";
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Simple Route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, Express with TypeScript!");
});

app.post("/api/speech-service", (req: Request, res: Response) => {
  const { transcript } = req.body;
  //intitialize the state machine
  const stateMachine: StateMachine = new StateMachine();
  stateMachine.stateIdentifier(transcript);
  //   console.log("Data received from the frontend:", transcript);
  res.json({ transcript: stateMachine.getAnswer() });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
