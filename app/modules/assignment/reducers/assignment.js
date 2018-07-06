import { ASSIGNMENT_SET_TITLE, ASSIGNMENT_SET_TYPE, ASSIGNMENT_REQUEST_INFO, ASSIGNMENT_RECEIVE_INFO, ASSIGNMENT_ERROR_INFO, ASSIGNMENT_SET_URL, ASSIGNMENT_AUTHORIZE_USER } from "../constants"

const initialState = {
  name: "",
  type: "",
  url: "",
  isFetching: false,
  error: null,
  authorized: false,
}

const assignment = (state = initialState, action) => {
  switch (action.type) {
  case ASSIGNMENT_SET_URL:
    return Object.assign({}, state, {url: action.url})
  case ASSIGNMENT_REQUEST_INFO:
    return Object.assign({}, state, {isFetching: true})
  case ASSIGNMENT_RECEIVE_INFO:
    return Object.assign({}, state, action.payload, {isFetching: false, error: null})
  case ASSIGNMENT_ERROR_INFO:
    return Object.assign({}, state, {isFetching: false, error: action.error})
  case ASSIGNMENT_SET_TITLE:
    return Object.assign({}, state, {name: action.payload})
  case ASSIGNMENT_SET_TYPE:
    return Object.assign({}, state, {type: action.payload})
  case ASSIGNMENT_AUTHORIZE_USER:
    return Object.assign({}, state, {authorized: action.payload})
  default:
    return state
  }
}

export default assignment
