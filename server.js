let express = require("express");
let cors = require("cors");

let bookingRoutes = require("./routes/bookingRoutes");
let app = express();
app.use(cors());
app.use(express.json());
app.use("/",bookingRoutes);

app.listen(9000,()=>console.log("Server is running on port 9000"));