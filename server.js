const express = require('express') 
const app = express();
const port = process.env.PORT
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger/swagger.json');
const {db} = require("./firebase/firebase.ts")


app.get('/', (req, res) => {
  res.send('Hello World!');
});

const docRef = db.collection('users').doc('fyawvl5eUVLoFHpnjfZF');

docRef.get().then(doc => {
  if (!doc.exists) {
    console.log('No such document!');
  } else {
    console.log(doc.data());
  }
}).catch(err => {
  console.log('Error getting document', err);
});

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

