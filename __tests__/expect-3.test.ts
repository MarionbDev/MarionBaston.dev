describe("expect : comparators", () => {
  it("10 is greater than 5", () => {
    expect(10).toBeGreaterThan(5);
  });
  it("10 is greater than or equal to 10", () => {
    expect(10).toBeGreaterThanOrEqual(10);
  });
  it("10 is less than 20", () => {
    expect(10).toBeLessThan(20);
  });
  it("10 is less than or equal 10", () => {
    expect(10).toBeLessThanOrEqual(10);
  });
  it("object types are equal with toBe", () => {
    const obj = { a: 10 };
    const obj2 = obj;
    expect(obj).toBe(obj2); // Compare la référence et non l'intérieur de l'objet
  });
  it("object types are equal with toEqual", () => {
    const obj = { a: 10 };
    const obj2 = obj;
    expect(obj).toEqual(obj2);
    const obj3 = { ...obj };
    expect(obj).toEqual(obj3); // compare les propriété de l'objet
  });
  it("object1 equal object2", () => {
    const obj1 = { name: "Alice" };
    const obj2 = { name: "Alice" };
    expect(obj1).toEqual(obj2);
    // expect(obj1).toBe(obj2);
  });
});
