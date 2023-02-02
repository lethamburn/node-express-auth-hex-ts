const USER = (db: any) => {
    const userSchema = new db.Schema(
        {
            username: { type: String, required: true },
            password: { type: String, required: true }
        },
        {
            timestamps: true
        }
    );
    return db.model("user", userSchema)
}

export default USER