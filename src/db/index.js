import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const maskMongoUri = (uri) => {
    if (!uri) return uri;
    // mask the password portion in mongodb+srv://user:pass@...
    return uri.replace(/(mongodb\+srv:\/\/[^:\/]+:)([^@]+)(@.*)/, "$1***$3");
};

const connectDB = async () => {
    const uri = process.env.MONGODB_URI;

    if (!uri) {
        console.error("MONGODB_URI is not set. Make sure your .env file is loaded and contains MONGODB_URI.");
        process.exit(1);
    }

    if (!DB_NAME) {
        console.error("DB_NAME is not set. Check src/constants.js.");
        process.exit(1);
    }

    const maskedUri = maskMongoUri(uri);
    console.log(`Connecting to MongoDB: ${maskedUri}/${DB_NAME}`);

    try {
        const connectionInstance = await mongoose.connect(`${uri}/${DB_NAME}`);

        console.log(`\nMongoDB connected!! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("MONGODB connection error:", error.message);
        console.error(
            "This usually means Atlas is blocking your IP (not whitelisted) or the cluster is down.\n" +
                "Visit https://www.mongodb.com/docs/atlas/security-whitelist/ to allow your IP, or use 0.0.0.0/0 for testing."
        );
        process.exit(1);
    }
};

export default connectDB;