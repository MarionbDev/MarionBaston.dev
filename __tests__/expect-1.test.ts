describe("What is an assertion : toBe, not.toBe, toBeCloseTo ", () => {
  const result = 1 + 1;
  const object1 = {
    name: "marion",
    age: 40,
  };
  const object2 = object1;
  const object3 = { ...object1 };

  it("test with jest api", () => {
    expect.soft(result).toBe(2);
    expect(result).toBe(2);
  });
  it("test with chai api", () => {
    expect(result).to.equal(2);
  });
  it("test not to be", () => {
    expect(result).not.toBe(3);
  });
  it("test object is toBe, test reference", () => {
    expect(object1).toBe(object1);
  });
  it("test reference", () => {
    expect(object2).toBe(object1);
  });
  it("test object1 is toBe, reference not all properties ", () => {
    expect(object1).not.toBe(object3);
  });
  it("test 0.2 + 0.1", () => {
    expect(0.2 + 0.1).toBeCloseTo(0.3); //ajuste le calcul après virgule
  });
  it("test 0.2 + 0.1, is not equal with toBe", () => {
    expect(0.2 + 0.1).not.toBe(0.3);
  });
});
