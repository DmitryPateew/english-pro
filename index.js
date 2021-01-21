const express = require('express');
const exphbs = require(`express-handlebars`);
const homeRoutes = require(`./source/router/home`);
const bodyParser = require('body-parser');


const app = express();
const hbs = exphbs.create({
  defaultLayout: `main`,
  extname: `hbs`,
});

app.engine(`hbs`, hbs.engine);
app.set(`view engine`, `hbs`);
app.set(`views`, `source`);

app.use(express.static('build'));
app.use(bodyParser.json());

app.use(homeRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`)
});
