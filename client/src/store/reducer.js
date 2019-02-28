import { CREATE_VAST, CREATE_VAST_SUCCESS, CREATE_VAST_FAIL, FETCH_VAST, FETCH_VAST_SUCCESS, FETCH_VAST_FAIL } from './constants';

const initialState = {
    isLoading: false,
    vast: '',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_VAST:
            return {
                ...state,
                createVastResult: '',
                error: '',
                isLoading: true
            }
        case CREATE_VAST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                createVastResult: action.payload
            }
        case CREATE_VAST_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case FETCH_VAST:
            return {
                ...state,
                isLoading: false,
                vast: null,
        }
        case FETCH_VAST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                vast: action.payload,
            }
        case FETCH_VAST_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        default:
            return state;
    }
};

export default reducer;