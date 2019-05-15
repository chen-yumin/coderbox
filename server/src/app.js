'use strict';

import express from 'express';
import path from 'path';

const app = express();

app.use(express.static(path.join(__dirname, '../www'), {
  // extensions: ['html', 'htm']
}));

app.use((req, res, next) => {
  res.sendfile(path.join(__dirname, '../www/index.html'), 200);
});

console.log(process.env.PORT);
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
  console.log('Press Ctrl + C to quit.');
});

export default app;