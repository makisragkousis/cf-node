const mathOperations = require("../index");

describe("Calculator Tests", () => {
  test("Addition of 2 numbers", () => {
    let result = mathOperations.sum(1, 2);

    expect(result).toBe(3);
  });

  test("Subtraction of 2 number", () => {
    let result = mathOperations.diff(10, 2);

    expect(result).toBe(8);
    expect(result).not.toBe(10);
  });

  test("Multiplication of 2 numbers", () => {
    let result = mathOperations.product(2, 8);

    expect(result).toBe(16);
    expect(result).toBe(10);
  });

  test("Division of 2 numbers", () => {
    let result = mathOperations.divide(24, 8);
    expect(result).toBe(3);
  });
});
