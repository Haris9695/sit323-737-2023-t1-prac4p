const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Addition endpoint
app.post('/addition', (req, res) => {
  const num1 = Number(req.body.num1);
  const num2 = Number(req.body.num2);

  if (isNaN(num1) || isNaN(num2)) {
    res.status(400).json({ error: 'Invalid input parameters' });
    return;
  }

  const result = num1 + num2;
  res.json({ result });
});

// Subtraction endpoint
app.post('/subtraction', (req, res) => {
  const num1 = Number(req.body.num1);
  const num2 = Number(req.body.num2);

  if (isNaN(num1) || isNaN(num2)) {
    res.status(400).json({ error: 'Invalid input parameters' });
    return;
  }

  const result = num1 - num2;
  res.json({ result });
});

// Multiplication endpoint
app.post('/multiplication', (req, res) => {
  const num1 = Number(req.body.num1);
  const num2 = Number(req.body.num2);

  if (isNaN(num1) || isNaN(num2)) {
    res.status(400).json({ error: 'Invalid input parameters' });
    return;
  }

  const result = num1 * num2;
  res.json({ result });
});

// Division endpoint
app.post('/division', (req, res) => {
  const num1 = Number(req.body.num1);
  const num2 = Number(req.body.num2);

  if (isNaN(num1) || isNaN(num2)) {
    res.status(400).json({ error: 'Invalid input parameters' });
    return;
  }

  if (num2 === 0) {
    res.status(400).json({ error: 'Division by zero is not allowed' });
    return;
  }

  const result = num1 / num2;
  res.json({ result });
});

app.listen(port, () => {
  console.log(`App listening at `);
});
