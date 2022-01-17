const mongoose = require('mongoose');

const OwnerSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        auto: true
      },
    id:String,
    name: String,
    gender: String,
    petCount: Number,
    address: String
}, {
    timestamps: false
});

module.exports = mongoose.model('Owner', OwnerSchema);

// let demo = {
//     "_id": { "$oid": "61e5162e4a31aacf8aa88ab7" },
//     "name": "Kunal",
//     "gender": "Male",
//     "petCount": 1,
//     "address": "Pune"
// }