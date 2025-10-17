import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error('Please define the MONGO_URI environment variable');
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return mongoose.connection.db;;
  }

  if (!cached.promise) {
    const options = {
    };

    cached.promise = mongoose.connect(MONGO_URI, options).then((mongoose) => {
      return mongoose.connection.db;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
