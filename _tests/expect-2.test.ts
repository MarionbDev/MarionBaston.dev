describe("expect, assertion : toBeDefined, toBeUndefined, toBeNull...", () => {
  it("variable is defined", () => {
    const variable = 1;
    expect(variable).toBeDefined();
  });
  it("variable is undefined", () => {
    let variable: string;
    expect(variable).toBeUndefined();
  });
  it("object is undefined", () => {
    let object: object;
    expect(object).toBeUndefined;
  });
  it("property is undefined", () => {
    const object = {
      name: "john doe",
      age: 25,
      job: undefined,
    };
    expect(object.job).toBeUndefined;
  });
  it("variable is null", () => {
    const variable = null;
    expect(variable).toBeNull();
  });
  it("variable is a number", () => {
    const variable = 1;
    expect(variable).toBeTypeOf("number");
  });
  it("variable is not a string", () => {
    const variable = 1;
    expect(variable).not.toBeTypeOf("string");
  });
  it("is instance date", () => {
    const date = new Date();
    expect(date).toBeInstanceOf(Date);
  });
});
