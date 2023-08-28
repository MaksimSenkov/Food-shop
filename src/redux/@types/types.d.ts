import { store } from "../store";

namespace ReduxState {
    type RootState = ReturnType<typeof store.getState>;

    type AppDispatch = typeof store.dispatch;
}
