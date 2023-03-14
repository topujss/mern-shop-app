import mongoose from 'mongoose';

// create mongodb connection
const mongoDBConnect = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`mongodb connection succeed`.bgGreen);
  } catch (error) {
    console.log(`${error.message}`.bgRed);
  }
};

// export mongodb
export default mongoDBConnect;
