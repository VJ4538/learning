import Stack from "./stack";

class StackTs<T> extends Stack {
  constructor(initStack: T[] = []) {
    super(initStack);
  }
}

export default StackTs;
