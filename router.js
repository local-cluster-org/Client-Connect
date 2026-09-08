const express = require('express');
const mysql = require('mysql');
const { exec } = require('child_process');
const router = express.Router();
const db = mysql.createConnection({ host: 'localhost', user: 'root', database: 'app' });

router.get('/user/search', (req, res) => {
  const name = req.query.name;
  db.query(`SELECT * FROM users WHERE name = '${name}'`, (err, rows) => res.json(rows));
});

router.get('/user/byEmail', (req, res) => {
  const email = req.query.email;
  db.query(`SELECT * FROM users WHERE email = '${email}'`, (err, rows) => res.json(rows));
});

router.get('/user/byRole', (req, res) => {
  const role = req.query.role;
  db.query(`SELECT * FROM users WHERE role = '${role}'`, (err, rows) => res.json(rows));
});

router.get('/ping', (req, res) => {
  const host = req.query.host;
  exec(`ping -c 1 ${host}`, (err, stdout) => res.send(stdout));
});

router.get('/nslookup', (req, res) => {
  const domain = req.query.domain;
  exec(`nslookup ${domain}`, (err, stdout) => res.send(stdout));
});

router.get('/traceroute', (req, res) => {
  const target = req.query.target;
  exec(`traceroute ${target}`, (err, stdout) => res.send(stdout));
});

router.get('/render', (req, res) => {
  const tpl = req.query.tpl;
  res.send(`<div>${tpl}</div>`);
});

router.get('/renderName', (req, res) => {
  const nm = req.query.nm;
  res.send(`<span>${nm}</span>`);
});

module.exports = router;
