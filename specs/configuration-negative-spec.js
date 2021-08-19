const supertest = require('supertest');
const baseLibrary = require('../utils/base-library');

require('dotenv-safe').config();
let response;
const request = supertest(process.env.BASE_URL);
const authToken = process.env.INVALID_TOKEN;

xdescribe('Negative Specs :GET: V2 Configuration', () => {
    beforeAll(async () => {
        authHeaderGeneric = await baseLibrary.authHeaderGeneric();
        response = await request.get('/v2/configurations')
        .set('Authorization', 'bearer ' + authToken)
        .set(authHeaderGeneric);

    })

    it('Should return 401 with incorrect Authentication token', () => {
        console.log(">>>>>>>>>>>>>>>>>>>>>>>", response)
        const obj = JSON.parse(response);
        console.log(">>>>>>>>>>>>>>>>>>>>>>>", obj.status)
        console.log(">>>>>>>>>>>>", JSON.parse(response))
        expect(response.Status).toBe(401);
    })
})
