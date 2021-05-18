const supertest = require('supertest');
const baseLibrary = require('../utils/base-library');
const getConfigurationResponse = require('../json-data/response-bodies/get-configuration-response.json')

require('dotenv-safe').config();
let response;
const request = supertest(process.env.BASE_URL);
const authToken = process.env.AUTH_TOKEN;

describe('Positive Specs :GET: V2 Configuration', () => {
    beforeAll(async () => {
        authHeaderGeneric = await baseLibrary.authHeaderGeneric();
        response = await request.get('/v2/configurations')
        .set('Authorization', 'bearer ' + authToken)
        .set(authHeaderGeneric);
    })

    it('Should return 200 response code', () => {
        expect(response.statusCode).toBe(200);
    })

    it('response body has type', () => {
        expect(response.body.type).toEqual(getConfigurationResponse.type);
    })

    it('response body has description', () => {
        expect(response.body.description).toEqual(getConfigurationResponse.description);
    })

    it('response has minimum amount', () => {
        expect(response.body.minimumAmount.amount).toEqual(getConfigurationResponse.minimumAmount);
    })

    it('response has maximum amount', () => {
        expect(response.body.maximumAmount.amount).toEqual(getConfigurationResponse.maximumAmount);
    })

    it('response has currency', () => {
        expect(response.body.minimumAmount.currency).toEqual(getConfigurationResponse.currency);
    })

    it('response has number of payments', () => {
        expect(response.body.numberOfPayments).toEqual(getConfigurationResponse.numberOfPayments);
    })

    it('response has promotion URL', () => {
        expect(response.body.promotionUrl).toEqual(getConfigurationResponse.promotionURL);
    })

    it('response has 3 locales', () => {
        expect(response.body.locales.length).toBe(3);
    })

    it('response has currency property', () => {
        expect(response.body.maximumAmount).toHaveProperty('currency');
    })
})