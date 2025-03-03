const express = require("express");
const cors = require('cors');
const dotenv = require('dotenv');
const connectDb = require('./utils/db');
const authRouter = require('./routers/auth-router');
const path = require('path');

const app = express();

dotenv.config();
app.use(express.json());

const corsOptions = {
  origin: 'http://localhost:5173/',
  methods: 'GET, POST, PUT, DELETE, PATCH, HEAD',
  credentials: true,
};

app.use(cors(corsOptions));

app.use('/api/auth', authRouter);   
const PORT = process.env.PORT || 5001;

// Resolve dirname using CommonJS
app.use(express.static(path.join(__dirname, '/client/dist')));

//render client
app.get('*', (req,res) => res.sendFile(path.join(__dirname, '/client/dist/index.html')))

connectDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running at port: ${PORT}`);
    });
  })
  .catch(error => {
    console.error('Failed to connect to the database and start the server:', error.message);
  });
