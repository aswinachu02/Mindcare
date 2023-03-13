import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get } from "firebase/database";
import config from "../../common/config";

const { FIREBASE_CONFIG } = config;

const App = initializeApp(FIREBASE_CONFIG);
const Database = getDatabase(App);

const customGet = (path) => get(ref(Database, path));
const customSet = (path, data) => set(ref(Database, path), data);

const DB = { get: customGet, set: customSet };

export { DB };
