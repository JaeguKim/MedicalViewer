var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    _id : String,
    _pw : String,
    first_name: String,
    last_name: String,
    birth_date : {type : Date, default: Date.now},
    checkup_date : { type: Date, default: Date.now  },
    hospital : String,
    address : String,
    pressure : String,
    creatinine : String,
    glucose : String,
    hb : String,
    CA : String,
    ph : String,
    plt : String,
    rbc : String,
    tsh : String,
    wbc : String,
    is_CT : Boolean,
    is_MRI : Boolean,
    is_urine_sugar: Boolean,
    is_albumin: Boolean,
    is_urine_blood: Boolean
});

module.exports = mongoose.model('user', userSchema);
