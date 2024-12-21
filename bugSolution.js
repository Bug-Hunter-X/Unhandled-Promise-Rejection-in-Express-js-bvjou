const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  someAsyncOperation()
    .then(() => {
      res.send('Hello World!');
    })
    .catch(err => {
      console.error('Error during async operation:', err);
      res.status(500).send('Internal Server Error'); // Send an error response
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    const success = Math.random() < 0.5;
    setTimeout(() => {
      if (success) {
        resolve();
      } else {
        reject(new Error('Simulated asynchronous operation failed'));
      }
    }, 1000);
  });
}