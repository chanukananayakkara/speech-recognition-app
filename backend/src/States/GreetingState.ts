//in here we will see that if user has input voice command "hello" then it will return the response "Hello! How can I help you today?"

import IState from "./IState";

export default class GreetingState implements IState {
  handle(): string {
    return "Hello! How can I help you today?";
  }
}
