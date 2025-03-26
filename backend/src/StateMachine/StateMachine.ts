import ErrorState from "../States/ErrorState";
import GreetingState from "../States/GreetingState";
import IdleState from "../States/IdleState";
import IState from "../States/IState";
import TextIdentifier from "./TextIdentifier";

export default class StateMachine {
  private currentState: IState;
  private answer: string;
  constructor() {
    console.log("StateMachine initialized");
    this.answer = "";
    this.currentState = new IdleState();
  }
  transitionTo(state: IState) {
    this.currentState = state;
  }
  getCurrentState() {
    return this.currentState;
  }

  stateIdentifier(transcript: string) {
    if (TextIdentifier.isGreetings(transcript)) {
      console.log("User said hello");
      this.transitionTo(new GreetingState());
      this.answer = this.currentState.handle();
    } else {
      this.transitionTo(new ErrorState());
      this.answer = this.currentState.handle();
    }
  }

  getAnswer(): string {
    return this.answer;
  }
}
