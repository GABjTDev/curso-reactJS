import { call, put } from "redux-saga/effects";
import { actionGetAllUsers } from "../../actions/actionUsers";
import {
  usersPending,
  UsersSuccess,
  UsersError,
} from "../../reducers/userSlice";

export function* sagaGetAllUsers() {
  yield put(usersPending());
  try {
    const response = yield call(actionGetAllUsers);
    const users = response.data.data;
    yield put(UsersSuccess({ users }));
  } catch (e) {
    yield put(UsersError({ message: "Hubo un error" }));
  }
}
