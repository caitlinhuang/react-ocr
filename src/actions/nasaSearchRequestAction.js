import {GET_IMAGES} from "./types";
import {GET_IMAGES_RETURN} from "./types";
import axios from "axios";
import { NASA_SEARCH_API_URL } from "./api";

export default function nasaSearchRequest(postData) {
    return function(dispatch) {
      dispatch({ type: GET_IMAGES });
      console.log("action");
      console.log(postData);
      axios
        .get(NASA_SEARCH_API_URL + "search?q=" + postData)
  
        .then(res => {
          dispatch({
            type: GET_IMAGES_RETURN,
            imageData: res.data
          });
          console.log(res.data);
        })
  
        .catch(error => {
          dispatch({
            type: GET_IMAGES,
            imageData: error.data
          });
          alert(error);
        });
    };
  }
  