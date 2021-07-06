const request = require('supertest');
const express = require('express');

const app = express();

app.get('/annee', function(req, res) {
  res.status(200);
});

request(app)
  .get('/admin/annee')
  .expect('Content-Type', /json/)
  .expect(200)
  .end(function(err, res) {
    if (err) throw err;
  });


  describe('GET /admin/annee', function() {
    test('responds with json', function(done) {
      request(app)
        .get('/admin/annee')
        .expect(200, done);
    });
  });