import { request } from 'express';
import supertest from 'supertest';
import { expect } from '@jest/globals';
import { describe } from 'yargs';
import app from '../server.js';

describe("Should check for 200 http status", () => {
    test("Check for 200 http status", async () => {
        const response = await request(app).get("/")
        expect(response.statusCode).toBe(200)
    })
})