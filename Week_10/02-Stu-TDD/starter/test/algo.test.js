const Algo = require("../algo");

describe("Algo", () => {
  describe("reverse", () => {
    it("Testing reverse function..", () => {
      const input = "Hello";
      const result = new Algo().reverse(input);

      expect(result).toEqual("olleH");
    });
  });

  describe("isPalindrome", () => {
    it("Testing isPalindrome function false", () => {
      const input = "racecar";
      const result = new Algo().isPalindrome(input);

      expect(result).toEqual(true);
    });
    it("Testing isPalindrome function true", () => {
      const input = "Hello";
      const result = new Algo().isPalindrome(input);

      expect(result).toEqual(false);
    });

  });

  describe("capitalize", () => {
    it("Testing capitalize function", () => {
      const input = "hello word";
      const result = new Algo().capitalize(input);

      expect(result).toEqual("Hello Word");
    });
  });
});
