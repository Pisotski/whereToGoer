const express = require('express');
const path = require('path');
const { placeMatch } = require('../helpers/apis');

const app = express();

const port = process.env.PORT || 3000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  );
  next();
});
app.use('/', express.static(path.join(__dirname, '../public')));

app.get('/places', (req, res) => {
  const categories = req.query.categories[0];
  if (categories === 'HackReactor') {
    res.status(200).json({
      name: 'Tempest',
      image_url: 'https://s3-media3.fl.yelpcdn.com/bphoto/hQoz_p7_sCdEtQVSLAm3Sw/o.jpg',
    });
  }
  placeMatch(categories)
    .then((response) => {
      const list = response.jsonBody.businesses;
      const lucky = Math.floor(Math.random() * list.length);
      res.status(200).json(list[lucky]);
    })
    .catch(e => e);
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
