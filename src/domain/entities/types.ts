import { Mongoose, Model } from "mongoose"

export interface IUser {
    username: string,
    password: string
}

export type Entity<Type> = (db: Mongoose) => Model<Type>