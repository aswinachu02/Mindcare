import { createStore, createHook, defaults } from "react-sweet-state";

import initialState from "./initialState";
import actions from "./actions";
import config from "../../../common/config";

const Store = createStore({
  name: `mindcare_${config.ENV}_example`,
  initialState,
  actions,
});

export const useExampleStore = createHook(Store, {
  selector: (state) => state,
});
