const express = require('express');
const app = express();
const port = 3011;

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
