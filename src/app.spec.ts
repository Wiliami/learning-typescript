import request from "supertest";
import { App } from "./app";

describe("My first test", () => {
    it("Should test the server running", async () => {
        const app = new App().app;
        const response = await request(app).get("/");
        expect(response.body).toStrictEqual({ ok: true });   
    });
});