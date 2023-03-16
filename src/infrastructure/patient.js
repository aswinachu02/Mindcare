import { DB } from "./common";

export const getPatient = (username) => DB.get(`patients/${username}`);
