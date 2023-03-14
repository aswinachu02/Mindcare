import { createStore, createHook, defaults } from "react-sweet-state";

import initialState from "./initialState";
import actions from "./actions";
import config from "../../../common/config";

defaults.devtools = true;

const Store = createStore({
  name: `mindcare_${config.ENV}_auth`,
  initialState,
  actions,
});

export const useAuthStore = createHook(Store, {
  selector: (state) => state,
});
