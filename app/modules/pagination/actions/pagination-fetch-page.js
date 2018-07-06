import {paginationReceivePage} from "./pagination-receive-page"
import {paginationSetNextPage} from "./pagination-set-next-page"
import {submissionCreate} from "../../submissions/actions/submission-create"
import LinkHeader from "http-link-header"

export const fetchPage = (repoURL, page) => {
  return dispatch => {
    return fetch(`${repoURL}?page=${page}&per_page=2`, {
      credentials: "include"
    }).then(response => {
      if (response.headers.get("Link")) {
        var link = LinkHeader.parse(response.headers.get("Link"))
        if (link.has("rel", "next") && link.get("rel", "next").length > 0) {
          dispatch(paginationSetNextPage(link.get("rel", "next")[0].params.page))
        } else {
          dispatch(paginationSetNextPage(null))
        }
      }
      return response.json()
    }).then((json) => {
      dispatch(paginationReceivePage(page, json))
      dispatch(submissionCreate(json))
    })
  }
}
