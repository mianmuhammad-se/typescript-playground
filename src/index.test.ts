import { getMessage } from ".";

describe("getMessage()", () => {
  it("should return the correct message when called", () => {
    expect(getMessage()).toBe("Hello World!!");
  });
});
