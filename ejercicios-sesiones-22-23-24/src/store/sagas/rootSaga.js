import { takeLatest } from "redux-saga/effects";
import { getToken } from "./login/login";
import { sagaGetAllUsers } from "./users/users";

export default function* rootSaga() {
  yield takeLatest("Login/startLogin", getToken);
  yield takeLatest("Users/getUsers", sagaGetAllUsers);
}
