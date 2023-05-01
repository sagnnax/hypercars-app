import firebase from "../firebase";

const db = firebase.collection("/hypercars");

class HyperDataService {
    getAll() {
        return db;
    }

    create(hyper) {
        return db.add(hyper);
    }

    update(id, value) {
        return db.doc(id).update(value);
    }

    delete(id) {
        return db.doc(id).delete();
    }
}

export default new HyperDataService();