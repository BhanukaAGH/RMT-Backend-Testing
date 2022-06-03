const request = require('supertest')
const express = require('express')
const app = express()


describe('Stduent Create Group API', function () {

    //create student gorup
    it('POST Create STudent Group', () => {
      return request(app)
        .post('/api/v1/groupRegister')
        .send({ leaderId: 'test', member2Id: 'test', member3Id: 'test' ,member4Id: 'test',member3Id: 'test'})
        .expect('Content-Type', /json/)
        .expect(200)
        .then((response) => {
          expect.any(Array)
        })
        .catch((err) => expect.any(Object))
    })
  })
  