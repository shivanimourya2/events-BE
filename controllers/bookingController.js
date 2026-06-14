let bookingModel = require("../models/bookingModel");

let addController = async (req, res) => {
    bookingModel.add(req.body,res);
}

let getAllController = async(req,res) =>
{
    bookingModel.get(res);
}

let updateController = async(req,res)=>{
    bookingModel.updateBooking(req.params.id , req.body ,res);
}

let deleteController = async(req,res)=>{
    bookingModel.deleteBooking(req.params.id,res);
}

module.exports = { addController , getAllController , updateController , deleteController};
