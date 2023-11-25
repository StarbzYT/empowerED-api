const express = require('express');
const main = require('./api/response'); // Import the main function
const cors = require('cors');

const app = express();

app.use(express.json()); // Middleware for parsing JSON bodies

app.use(cors());

app.post('/api/completion', async (req, res) => {
  const message = req.body.message;

  try {
    const gptResponse = await main(message);
    res.json(gptResponse);
  } catch (err) {
    console.log(err); // Log the error for debugging
    res.status(500).send(err);
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
