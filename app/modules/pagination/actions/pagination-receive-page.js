import {RECEIVE_PAGE} from "../constants"

export const receivePage = (page, data) => {
  return {
    type: RECEIVE_PAGE,
    id: page,
    payload: data
  }
}