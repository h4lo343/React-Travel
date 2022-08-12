import { Middleware } from "redux"

export const actionLog : Middleware = (store) => (next) => (action) => {
  console.log("current state:", store.getState())
  console.log(action)
  next(action)
  console.log("new state:", store.getState())
}