const express = require('express') 
const app = express();
const port = process.env.PORT
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger/swagger.json');


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

