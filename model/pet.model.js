const mongoose = require("mongoose");

const PetSchema = ({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        auto: true
      },
    petname:String,
    gender:String,
    animal:String,
    photo:String
});

module.exports = mongoose.model('Pet' , PetSchema)
// mongoose will automatically look for the owners collection by plularizing and lowercasing the model name
