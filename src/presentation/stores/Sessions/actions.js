import { message } from "antd";
import moment from "moment";
import { logger } from "../../../common/utils/logger";
import {
  addDoctorBooking,
  addPatientBooking,
  getBooking,
  listBooking,
} from "../../../infrastructure/booking";
import { getDoctor, listDoctors } from "../../../infrastructure/doctor";
import { numericalSort } from "../../utils/sorters";
import { timestamp } from "../../utils/time";

const actions = {
  handleListSessions:
    (p_uname) =>
    async ({ setState, getState }) => {
      setState({ loadingSessions: true });
      const { sessions } = getState();
      try {
        if (sessions === null) {
          setState({ loadingSessions: true });
          const snapshot = await listBooking(p_uname);
          if (snapshot.exists()) {
            const sessionsVal = Object.values(snapshot.val())
              .sort((a, b) => numericalSort(a?.stamp, b?.stamp))
              .reverse();
            setState({ sessions: sessionsVal });
          }
        } else {
          logger.message("Loading sessions from cache");
        }
      } catch (error) {
        logger.error(error, "handleListSessions()");
      } finally {
        setState({ loadingSessions: false });
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
      const { doctors, selectedDoctor } = getState();
      try {
        const doctorExists = doctors?.find((doc) => doc?.username === d_uname);
        if (doctorExists) {
          setState({ selectedDoctor: doctorExists });
        } else if (selectedDoctor?.username === d_uname) {
          setState({ selectedDoctor: selectedDoctor });
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

  handleGetSession:
    (username, sid) =>
    async ({ setState, getState, dispatch }) => {
      setState({ loadingSelectedSession: true });
      const { sessions, selectedSession } = getState();
      try {
        const sessionExists = sessions?.find((doc) => doc?.username === sid);
        if (sessionExists) {
          setState({ selectedSession: sessionExists });
          dispatch(actions.handleGetDoctor(sessionExists?.d_uname));
        } else if (selectedSession?.username === sid) {
          setState({ selectedSession: selectedSession });
          dispatch(actions.handleGetDoctor(selectedSession?.d_uname));
        } else {
          const snapshot = await getBooking(username, sid);
          if (snapshot.exists()) {
            setState({ selectedSession: snapshot.val() });
            dispatch(actions.handleGetDoctor(snapshot.val()?.d_uname));
          } else {
            message.error("Session not found!");
          }
        }
      } catch (error) {
        logger.error(error, "handleGetSession()");
      } finally {
        setState({ loadingSelectedSession: false });
      }
    },

  handleBookSession:
    (sid, p_uname, d_uname, selectedDate, selectedTime, onSuccess) =>
    async ({ setState }) => {
      try {
        setState({ adding: true });
        const data = {
          sid,
          d_uname: d_uname,
          p_uname: p_uname,
          stamp: timestamp(
            moment(`${selectedDate} ${selectedTime}`, "DD MM YYYY hh:mm A")
          ),
        };
        await addPatientBooking(p_uname, sid, data);
        await addDoctorBooking(d_uname, sid, data);
        onSuccess();
      } catch (error) {
        logger.error(error, "handleAddSession()");
      } finally {
        setState({ adding: false });
      }
    },
};

export default actions;
