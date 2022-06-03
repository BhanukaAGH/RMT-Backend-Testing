const request = require('supertest')
const express = require('express')
const app = express()

describe('Create MarkScheme API', function () {
    //get all marking schemes method
    it('GET all Marking schemes', () => {
        return request(app)
          .get('/api/v1/get')
          .expect('Content-Type', /json/)
          .expect(200)
          .then((response) => {
            expect.any(Array)
          })
          .catch((err) => expect.any(Object))
      })
  
    //Post method creates marking scheme
    it('POST Create Marking scheme', () => {
      return request(app)
        .post('/api/v1/create')
        .send({markSchemeName:"test", Description:"test", schemeType:"test" })
        .expect('Content-Type', /json/)
        .expect(200)
        .then((response) => {
          expect.any(Array)
        })
        .catch((err) => expect.any(Object))
    })
  })