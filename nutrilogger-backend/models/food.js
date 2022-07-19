import mongoose from 'mongoose';

const foodSchema = mongoose.Schema({
    name: String
});

const Food = mongoose.model('Food', foodSchema);

export default Food;
