import { waitForXSec } from "./debounce";
import throttle from "./throttle";

let result = 0;

const increment = () => {
  result++;
};

const throttleIncrement = throttle(increment, 1000);

const simulateUserAction = async (timeInterval, throttleFn) => {
  for (let i = 0; i < 5; i++) {
    await waitForXSec(timeInterval);
    throttleFn();
  }

  await waitForXSec(1500);
  throttleFn();
  await waitForXSec(1500);
  throttleFn();

  return result;
};

describe("Test throttle", () => {
  jest.setTimeout(10000);

  beforeEach(() => {
    result = 0;
  });

  it("test case 1", async () => {
    // Throttle limit 1 sec
    // call throttle 5 times in 0.5 sec  ( expect only one increment )
    // wait 1.5sec and call throttle twice
    const response = await simulateUserAction(100, throttleIncrement);
    expect(response).toEqual(3);
  });

  it("test case 2", async () => {
    // Throttle limit 1 sec
    // call throttle 5 times in 2.5 sec  ( expect two increment )
    // wait 1.5sec and call throttle twice
    const response = await simulateUserAction(500, throttleIncrement);
    expect(response).toEqual(4);
  });

  it("test case 3", async () => {
    // Throttle limit 1 sec
    // call throttle 5 times in 3.0 sec  ( expect three increment )
    // wait 1.5sec and call throttle twice
    const response = await simulateUserAction(600, throttleIncrement);
    expect(response).toEqual(5);
  });
});
