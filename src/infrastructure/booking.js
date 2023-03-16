import { DB } from "./common";

export const listBooking = (username) => DB.get(`${username}/bookings`);

export const addPatientBooking = (username, id, data) =>
  DB.set(`patients/${username}/bookings/${id}`, data);

export const addDoctorBooking = (username, id, data) =>
  DB.set(`doctors/${username}/bookings/${id}`, data);
