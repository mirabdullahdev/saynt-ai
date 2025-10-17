const { default: dbConnect } = require("./config/db");
import { ObjectId } from "mongodb";

export const formatId = (id) => {
    if (id instanceof ObjectId) return id;
    return ObjectId.createFromHexString(id);
};

export const add = async (dbCollection, data) => {
    const db = await dbConnect();
    const collection = db.collection(dbCollection);
    return await collection.insertOne(data);
}

export const modifyOne = async (dbCollection, id, data) => {
    const db = await dbConnect();
    const collection = db.collection(dbCollection);
    return await collection.updateOne({ _id: formatId(id) }, { $set: data });
}

export const removeOne = async (dbCollection, id) => {
    const db = await dbConnect();
    const collection = db.collection(dbCollection);
    return await collection.deleteOne({ _id: formatId(id) });
};

export const getOne = async (dbCollection, id) => {
    const db = await dbConnect();
    const collection = db.collection(dbCollection);
    return await collection.findOne({ _id: formatId(id) });
};

export const getAllWhere = async (dbCollection, condition) => {
    const db = await dbConnect();
    const collection = db.collection(dbCollection);
    return await collection.find(condition).toArray();
};

export const modifyAllWhere = async (dbCollection, condition, data) => {
    const db = await dbConnect();
    const collection = db.collection(dbCollection);
    return await collection.updateMany(
        condition, 
        { $set: data }
    );
};

export const removeAllWhere = async (dbCollection, condition) => {
    const db = await dbConnect();
    const collection = db.collection(dbCollection);
    return await collection.deleteMany(condition);
};