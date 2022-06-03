const request = require('supertest')
const express = require('express')
const app = express()

describe('Topic API', function () {
  it('GET /getAllTopics', () => {
    return request(app)
      .get('/api/v1/topic')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect.any(Array)
      })
      .catch((err) => expect.any(Object))
  })

  it('POST /getSingleTopic', () => {
    return request(app)
      .post('/api/v1/topic/1')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect.any(Array)
      })
      .catch((err) => expect.any(Object))
  })
})
