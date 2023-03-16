import { DB } from "./common";

export const addDoctor = (username, data) =>
  DB.set(`doctors/${username}`, data);

export const listDoctors = () => DB.get(`doctors`);

export const getDoctor = (username) => DB.get(`doctors/${username}`);
