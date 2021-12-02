const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const UserSchema = new mongoose.Schema({
    email: { type: String },
    password: { type: String },
})

const RevueSchema = new mongoose.Schema({
    idFilm: { type: String },
    idUser: { type: String },
    date: { type: String },
    content: { type: String },
    rate: { type: String },
})

const FavorisSchema = new mongoose.Schema({
    idFilm: { type: String },
    idUser: { type: String },
    poster_path: { type: String },
    title: { type: String },
})

const User = mongoose.model("user", UserSchema);
const Revue = mongoose.model("revue", RevueSchema);
const Favoris = mongoose.model("favoris", FavorisSchema);


module.exports = {
    async signup(email, password) {
        const persone = new User({ email: email, password: password });
        return await persone.save();
    },

    async existingEmail(email) {
        const c = await User.countDocuments({ email: email });
        return c;
    },

    async signin(email, password) {
        const c = await User.find({ email: email, password: password });
        return c;
    },

    async deleteUser(id) {
        const deleteu = await User.findByIdAndRemove(id).exec();
        return deleteu;
    },


    async addRevue(data) {
        const revue = new Revue({
            idFilm: data["idFilm"],
            idUser: data["idUser"],
            date: data["date"],
            content: data["content"],
            rate: data["rate"]
        })
        return await revue.save();
    },

    async getRevues(idFilm) {
        const revues = await Revue.find({ idFilm: idFilm });
        return revues;
    },
    
    async addFavoris(data) {
        const favoris = new Favoris({
            idFilm: data["idFilm"],
            idUser: data["idUser"],
            poster_path: data["poster_path"],
            title: data["title"],
        })
        return await favoris.save();
    },

    async getFavoris(idUser) {
        const listFavoris = await Favoris.find({ idUser: idUser });
        return listFavoris;
    },

    async isInFavoris(idUser,idFilm) {
        const listFavoris = await Favoris.find({ idUser: idUser,idFilm:idFilm });
        return listFavoris;
    },
}