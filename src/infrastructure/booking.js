import { DB } from "./common";

export const listBooking = (username) => DB.get(`${username}/bookings`);

export const addBooking = (username, id, data) =>
  DB.set(`${username}/bookings/${id}`, data);
