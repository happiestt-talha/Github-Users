import mongoose from "mongoose";

const uri = 'mongodb://localhost:27017';

const connectDB = async () => {
    await mongoose.connect(uri);
    console.log('Connected to MongoDB');
}

export default connectDB