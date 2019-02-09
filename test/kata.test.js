import { exampleFunction } from "../src/kata.js";

describe("example function", function () {
    it("should return true with empty string", function () {
        expect(exampleFunction('')).toBeTruthy();
    });

    it("should return false without empty string", function () {
        expect(exampleFunction()).toBeFalsy();
    });
});