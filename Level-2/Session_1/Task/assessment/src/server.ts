import "dotenv/config";
import app from "./app";
import { connectDB } from "./config/db";

const PORT = process.env.PORT || 3000;

const startServer = async (): Promise<void> => {
  // TODO: await connectDB()
  // TODO: app.listen(PORT, ...) and log the URL
};

startServer();
