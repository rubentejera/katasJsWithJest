const exampleFunction = require('../src/kata');

describe("example function", function () {
    it("should return true with empty string", function () {
        expect(exampleFunction('')).toBeTruthy();
    });

    it("should return false without empty string", function () {
        expect(exampleFunction()).toBeFalsy();
    });
});