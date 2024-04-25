import http from 'node:http';
import crypto from 'node:crypto';
import { json } from '../middlewares/json.js';

const users = [];

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  await json(req, res);

  if (method === 'GET' && url === '/users') {
    return res.end(JSON.stringify(users));
  }

  if (method === 'POST' && url === '/users') {
    const { name, email } = req.body;
    users.push({
      id: crypto.randomBytes(8).toString('hex'),
      name,
      email,
    });

    return res.writeHead(201).end('User has created successfully!');
  }

  return res.writeHead(404).end('Not Found');
});


server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
