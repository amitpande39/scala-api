ScalaPay API is written using supertest and jest runner.

API Endpoint covered:
v2/configurations

Test Execution
* Checkout this project
* Navigate to root level directory
* Perform `npm install`

To run test against staging environment:
`npm test`

To run test against Sandbox environment
`npm run test:sandbox`

NOTE: Every tests against sandbox will fail since the env.sandbox contains URL `https://sandbox.api.scalapay.com` . the intent of this is to ensure that we can run API tests against the multiple environment.  

