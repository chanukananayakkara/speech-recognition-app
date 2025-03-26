import IState from "./IState";

export default class ErrorState implements IState {
  handle(): string {
    return "I'm sorry, I didn't understand that.";
  }
}
