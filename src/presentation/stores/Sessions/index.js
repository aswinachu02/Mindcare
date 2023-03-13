import { createStore, createHook } from "react-sweet-state";

import initialState from "./initialState";
import actions from "./actions";
import config from "../../../common/config";

const Store = createStore({
  name: `mindcare_${config.ENV}_sessions`,
  initialState,
  actions,
});

export const useSessionsStore = createHook(Store, {
  selector: (state) => state,
});
