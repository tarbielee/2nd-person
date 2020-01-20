let Person = require("../src/person");
let person = new Person("Ryan", 30, "male", [
  "being a hardarse",
  "agile",
  "ssd hard drives"
]);

describe("name", function () {
  it("it should expect name", function () {
    expect(person.name).toBe("Ryan");
  });
  it("it should expect age", function () {
    expect(person.age).toBe(30);
  });
  it("it should expect gender", function () {
    expect(person.gender).toBe("male");
  });
  it("it should expect interest", function () {
    expect(person.interests[0]).toBe("being a hardarse");
  });
  it("it should expect the whole sentence", function () {
    expect(person.hello()).toBe(
      "Hello,my name is Ryan I am 30 years old. My interests are being a hardarse,agile,ssd hard drives"
    );
  });
});