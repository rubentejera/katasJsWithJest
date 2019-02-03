describe("correct default test", function () {
    it("true is true", function () {
        expect(true).toBeTruthy();
    });
});

describe("wrong default test", function () {
    it("true is true", function () {
        expect(true).toBeFalsy();
    });
});