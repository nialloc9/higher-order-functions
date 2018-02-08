import asyncErrorHandler from "../asyncErrorHandler";

describe("asyncErrorHandler tests suite", () => {
    it("should throw an error and return it as error with null for response", async () => {
        const TestPromise = () =>
            new Promise((resolve, reject) => {
                throw new Error("error");
            });

        const [error, response] = await asyncErrorHandler(TestPromise());

        expect(error.message).toBe("error");
        expect(response).toBeUndefined();
    });

    it("should return an error when rejected", async () => {
        const TestPromise = () =>
            new Promise((resolve, reject) => {
                reject({
                    message: "error",
                });
            });

        const [error, response] = await asyncErrorHandler(TestPromise());

        expect(error.message).toBe("error");
        expect(response).toBeUndefined();
    });

    it("should return a response and null for error", async () => {
        const TestPromise = () =>
            new Promise((resolve, reject) => {
                resolve("data");
            });

        const [error, response] = await asyncErrorHandler(TestPromise());

        expect(response).toBe("data");
        expect(error).toBeNull();
    });
});
