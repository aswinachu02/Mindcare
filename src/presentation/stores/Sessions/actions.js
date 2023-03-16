import { message } from "antd";
import moment from "moment";
import { logger } from "../../../common/utils/logger";
import {
  addDoctorBooking,
  addPatientBooking,
  listBooking,
} from "../../../infrastructure/booking";
import { getDoctor, listDoctors } from "../../../infrastructure/doctor";
import { numericalSort } from "../../utils/sorters";
import { timestamp } from "../../utils/time";

const actions = {
  handleListSessions:
    (p_uname) =>
    async ({ setState, getState }) => {
      const { doctors } = getState();
      if (doctors === null) {
        try {
          setState({ loadingSessions: true });
          const snapshot = await listBooking(p_uname);
          if (snapshot.exists()) {
            const sessions = Object.values(snapshot.val())
              .sort((a, b) => numericalSort(a?.stamp, b?.stamp))
              .reverse();
            setState({ sessions });
          }
        } catch (error) {
          logger.error(error, "handleListSessions()");
        } finally {
          setState({ loadingSessions: false });
        }
      } else {
        logger.message("Loading sessions from cache");
      }
    },

  handleListDoctors:
    () =>
    async ({ setState, getState }) => {
      const { doctors } = getState();
      if (doctors === null) {
        setState({ loadingDoctors: true });
        try {
          const snapshot = await listDoctors();
          if (snapshot.exists()) {
            setState({ doctors: Object.values(snapshot.val()) });
          } else {
            message.error("No doctors found");
          }
        } catch (error) {
          logger.error(error, "handleListDoctors()");
        } finally {
          setState({ loadingDoctors: false });
        }
      } else {
        logger.message("Loading doctors from cache");
      }
    },

  handleGetDoctor:
    (d_uname) =>
    async ({ setState, getState }) => {
      setState({ loadingSelectedDoctor: true });
      const { doctors } = getState();
      try {
        const doctorExists = doctors?.find((doc) => doc?.username === d_uname);
        if (doctorExists) {
          setState({ selectedDoctor: doctorExists });
        } else {
          const snapshot = await getDoctor(d_uname);
          if (snapshot.exists()) {
            setState({ selectedDoctor: snapshot.val() });
          } else {
            message.error("Doctor not found!");
          }
        }
      } catch (error) {
        logger.error(error, "handleGetDoctor()");
      } finally {
        setState({ loadingSelectedDoctor: false });
      }
    },

  handleBookSession:
    (p_uname, d_uname, selectedDate, selectedTime, onSuccess) =>
    async ({ setState }) => {
      try {
        setState({ adding: true });
        const sid = Date.now();
        const date = {
          d_uname: d_uname,
          p_uname: p_uname,
          stamp: timestamp(
            moment(`${selectedDate} ${selectedTime}`, "DD MM YYYY hh:mm A")
          ),
        };
        await addPatientBooking(p_uname, sid, date);
        await addDoctorBooking(d_uname, sid, date);
        onSuccess();
      } catch (error) {
        logger.error(error, "handleAddSession()");
      } finally {
        setState({ adding: false });
      }
    },
};

export default actions;
