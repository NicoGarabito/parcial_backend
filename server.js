const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./models');

const productoRoutes = require('./routes/productoRoutes');

const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());

app.use('/productos', productoRoutes);

const PORT = process.env.PORT || 3000;
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
