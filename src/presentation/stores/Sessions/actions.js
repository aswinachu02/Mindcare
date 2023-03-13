import moment from "moment";
import { logger } from "../../../common/utils/logger";
import { addBooking, listBooking } from "../../../infrastructure/booking";
import { numericalSort } from "../../utils/sorters";
import { timestamp } from "../../utils/time";

const actions = {
  handleListSessions:
    (username) =>
    async ({ setState }) => {
      try {
        setState({ loading: true });
        const snapshot = await listBooking(username);
        if (snapshot.exists()) {
          const sessions = Object.values(snapshot.val())
            .sort((a, b) => numericalSort(a?.stamp, b?.stamp))
            .reverse();
          setState({ sessions });
        }
      } catch (error) {
        logger.error(error, "handleListSessions()");
      } finally {
        setState({ loading: false });
      }
    },

  handleAddSession:
    (username, selectedDate, selectedTime, onSuccess) =>
    async ({ setState }) => {
      try {
        setState({ adding: true });
        const sid = Date.now();
        const date = {
          d_uname: `doctor${Math.floor(Math.random() * 10 + 1)}`,
          p_uname: username,
          stamp: timestamp(
            moment(`${selectedDate} ${selectedTime}`, "DD MM YYYY HH:mm A")
          ),
        };
        await addBooking(username, sid, date);
        onSuccess();
      } catch (error) {
        logger.error(error, "handleAddSession()");
      } finally {
        setState({ adding: false });
      }
    },
};

export default actions;
