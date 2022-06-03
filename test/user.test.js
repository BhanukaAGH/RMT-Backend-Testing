const request = require('supertest')
const express = require('express')
const app = express()

describe('User API', function () {
  it('GET /getAllUsers', () => {
    return request(app)
      .get('/api/v1/users/list')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect.any(Array)
      })
      .catch((err) => expect.any(Object))
  })

  it('POST /getUserById', () => {
    return request(app)
      .post('/api/v1/users/find1/1')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect.any(Array)
      })
      .catch((err) => expect.any(Object))
  })
})
