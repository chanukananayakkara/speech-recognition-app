import IState from "./IState";

export default class IdleState implements IState {
  constructor() {
    console.log("IdleState initialized Listning to the user");
  }
  handle(): string {
    throw new Error("Method not implemented.");
  }
}
