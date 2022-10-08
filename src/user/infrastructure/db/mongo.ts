import { connect } from "mongoose";
import { DB_URI } from "../../../config";

const connectDatabase = async () => {
    connect(DB_URI).then(()=>console.log("Database connected"));
}

export default connectDatabase