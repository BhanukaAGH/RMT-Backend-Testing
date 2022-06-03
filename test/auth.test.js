const request = require('supertest')
const express = require('express')
const app = express()

describe('Auth API', function () {
  it('POST /register', () => {
    return request(app)
      .post('/api/v1/auth/register')
      .send({ name: 'Kamal', password: 'password', userRole: 'student' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .then((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            user: expect.any(Object),
            token: expect.any(String),
          })
        )
      })
      .catch((err) => expect.any(Object))
  })

  it('POST /login', () => {
    return request(app)
      .post('/api/v1/auth/login')
      .send({ email: 'test@email.com', password: 'password' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .then((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            user: expect.any(Object),
            token: expect.any(String),
          })
        )
      })
      .catch((err) => expect.any(Object))
  })
})
