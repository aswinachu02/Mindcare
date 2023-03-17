import { DB } from "./common";

export const listBooking = (username) =>
  DB.get(`patients/${username}/bookings`);

export const getBooking = (username, sid) =>
  DB.get(`patients/${username}/bookings/${sid}`);

export const addPatientBooking = (username, sid, data) =>
  DB.set(`patients/${username}/bookings/${sid}`, data);

export const addDoctorBooking = (username, sid, data) =>
  DB.set(`doctors/${username}/bookings/${sid}`, data);
