import Axios from "axios";
import { CREATE_VAST, CREATE_VAST_SUCCESS, CREATE_VAST_FAIL, FETCH_VAST, FETCH_VAST_SUCCESS, FETCH_VAST_FAIL } from './constants';

/**
 * @description sends data for creating new vast
 * @param {Object} formValue 
 */
export const createVast = formValue => dispatch => {
    dispatch({
        type: CREATE_VAST
    });
    const { vastURL, position, hideUI } = formValue;
    Axios.post(`${process.env.REACT_APP_BASE_URL}/create_vast/?vastURL=${vastURL}&position=${position}&hideUI=${hideUI}`, {}, 
    { headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
      .then(({data}) => {
          dispatch({
              type: CREATE_VAST_SUCCESS,
              payload: data
          });
      })
      .catch(err => {
          dispatch({
              type: CREATE_VAST_FAIL,
              payload: err.response.data.errors
          });
      });
  }
/**
 * @description fetches vast xml by id
 * @param {Boolean} id 
 */
export const fetchVast = id => dispatch => {
    dispatch({
        type: FETCH_VAST
    });
    return Axios.get(`${process.env.REACT_APP_BASE_URL}/fetch_vast?id=${id}`)
      .then(({data}) => {
          dispatch({
              type: FETCH_VAST_SUCCESS,
              payload: data
          });
      })
      .catch(err => {
          dispatch({
              type: FETCH_VAST_FAIL,
              payload: err.response.data.errors
          })
      });

}