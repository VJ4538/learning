import { debounce, waitForXSec } from "./debounce";

let result = 0;
let text = "";
let updateCalled = 0;

const increment = () => {
  result++;
};

const updateText = (newText) => {
  text = newText;
  updateCalled++;
};

const debouncedIncrement = debounce(increment, 1500);
const debouncedIncrement2 = debounce(increment, 900);
const debouncedIncrement3 = debounce(increment, 900);
const debouncedUpdateText = debounce((newText) => updateText(newText), 500);

const simulateUserAction = async (
  timeInterval,
  lastWaitTime,
  debounceFn,
  intervalMutiple = false,
) => {
  debounceFn();
  for (let i = 0; i < 2; i++) {
    intervalMutiple
      ? await waitForXSec(i * timeInterval)
      : await waitForXSec(timeInterval);
    debounceFn();
  }
  await waitForXSec(lastWaitTime);
  return result;
};

const simulateUserActionUpdateText = async () => {
  let newText = "t";
  debouncedUpdateText("t");
  for (let i = 0; i < 2; i++) {
    await waitForXSec(i * 400);
    newText += i;
    debouncedUpdateText(newText);
  }
  await waitForXSec(1000);
  return [updateCalled, text];
};

describe("Test debounce", () => {
  jest.setTimeout(10000);

  beforeEach(() => {
    result = 0;
    text = "result";
  });

  it("test case 1", async () => {
    // Debounce delay 1.5sec
    // Time interval 1sec for three times
    // Should trigger debounce each time
    const response = await simulateUserAction(1000, 2000, debouncedIncrement);
    expect(response).toEqual(1);
  });

  it("test case 2", async () => {
    // Debounce delay 1sec
    // Time interval 0.9sec for two times
    // Shoule not trigger debounce each time
    const response = await simulateUserAction(900, 1000, debouncedIncrement2);
    expect(response).toEqual(3);
  });

  it("test case 3", async () => {
    // Debounce delay 0.9sec
    // Time interval 0.7sec * i for two times
    // Should only trigger debounce once
    const response = await simulateUserAction(
      700,
      1000,
      debouncedIncrement3,
      true,
    );
    expect(response).toEqual(1);
  });

  it("test case 4", async () => {
    // Debounce delay 0.5sec
    // Time interval 0.4sec * i for two times
    // Update fn should only be called once and text should update
    const result = await simulateUserActionUpdateText();
    expect(result).toEqual([1, "t01"]);
  });
});
