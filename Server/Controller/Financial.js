const Financial = require('../Model/Financial')

exports.add_financial = (req,res) => {
    Financial.create({
        user_id : req.body.user_id,
        text : req.body.text,
        price : req.body.price,
        type : req.body.type
    })
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.json(error)
    })
}

exports.show_financial = (req,res) => {
    var type = req.params.type;
    var user_id = req.params.user_id;

    if(type === "income"){
        Financial.find({
            type : type,
            user_id : user_id
        })
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.json(error)
        })
    }else if(type === "expense"){
        Financial.find({
            type : type,
            user_id : user_id
        })
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.json(error)
        })
    }
}

exports.show_cashflow = (req,res) => {
    var user_id = req.params.user_id;
    Financial.find({
        user_id : user_id
    })
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.json(error)
    })
}

exports.delete_financial = (req,res) => {
    var id = req.params.id;
    Financial.findByIdAndRemove(id)
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.json(error)
    })
}