require("dotenv").config();
let express = require("express");
let cors = require("cors");

let bookingRoutes = require("./routes/bookingRoutes");
let app = express();
app.use(cors());
app.use(express.json());
app.use("/",bookingRoutes);

let PORT = process.env.PORT || 9000
app.listen(9000,()=>console.log("Server is running on port 9000"));