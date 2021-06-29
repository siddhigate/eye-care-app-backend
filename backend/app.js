const express = require('express');
const app = express();
require('dotenv').config()

const authRoutes = require("./src/routes/auth");

// middlewares
// app.use(express.json());
// app.use(express.urlencoded({ extended: true}));
// app.use(cookieParser());
// app.use(cors());

// Routes
app.use("/api", authRoutes);

// port
const port = process.env.PORT || 8000;

// starting server
app.listen(port, ()=>{
    console.log(`App is running at ${port}`);
})