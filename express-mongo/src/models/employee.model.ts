import mongoose from "mongoose";
import { employeeSchema } from "../schemas/employee.schema";

export const EmpModel = mongoose.model("mangesh", employeeSchema);
