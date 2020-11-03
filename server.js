const express = require('express');

const app = express();

app.use(express.static('./dist/beer-lovers-app'));

app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/beer-lovers-app/'});
});

app.listen(process.env.PORT || 8080);
