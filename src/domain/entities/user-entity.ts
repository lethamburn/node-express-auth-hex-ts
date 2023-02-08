import { Mongoose, Model } from "mongoose";
import bcrypt from "bcrypt";
import { Entity, IUser } from "./types";

export const User: Entity<IUser> = (db: Mongoose): Model<IUser> => {
    const userSchema = new db.Schema<IUser>({
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true }
    }, {
        timestamps: true
    })

    userSchema.pre("save", function (next) {
        this.password = bcrypt.hashSync(this.password, 10);
        next()
    })

    return db.model<IUser>("user", userSchema)
}
