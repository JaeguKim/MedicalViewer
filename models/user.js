var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    _id : String,
    _pw : String,
    first_name: String,
    last_name: String,
    checkup_data : { type: Date, default: Date.now  },
    pressure : String,
    creatinine : String,
    glucose : String,
    hb : String,
    CA : String,
    ph : String,
    plt : String,
    rbc : String,
    tsh : String,
    wbc : String
});

module.exports = mongoose.model('user', userSchema);
