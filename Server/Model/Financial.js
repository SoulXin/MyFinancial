const mongoose = require("../Database/db");

const financialSchema = {
    user_id : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        required : true,
        default: Date.now
    },
    text : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    type : {
        type : String,
        required : true
    }
};

const Financial = mongoose.model("financial", financialSchema);

module.exports = Financial;