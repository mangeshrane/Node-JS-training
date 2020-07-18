import mongoose from "mongoose";

export const employeeSchema = new mongoose.Schema(
    {
        empno: {
            required: true,
            type: Number,
            unique: true,
        },
        ename: {
            required: false,
            type: String,
            unique: false,
        },
        salary: {
            required: true,
            type: Number,
            unique: false,
        },
    },
    { timestamps: true },
);
