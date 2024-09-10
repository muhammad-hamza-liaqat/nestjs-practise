import mongoose from 'mongoose';

export const connectionWithDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    // console.log("db", process.env.MONGODB_URI)
    console.log('DB connected');
  } catch (error) {
    console.error('MongoDB connection error', error.message);
    throw error;
  }
};
