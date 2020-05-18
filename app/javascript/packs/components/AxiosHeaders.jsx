// app/javascript/packs/components/AxiosHeaders.jsx
import axios from 'axios'
import PropTypes from "prop-types";
import _ from "lodash";
const setAxiosHeaders = () => {
  const csrfToken = document.querySelector('[name=csrf-token]')
  if (!csrfToken) {
      console.log("ppppppp")
    return
  }
  const csrfTokenContent = csrfToken.content
  csrfTokenContent &&
    (axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfTokenContent)
}

export default setAxiosHeaders