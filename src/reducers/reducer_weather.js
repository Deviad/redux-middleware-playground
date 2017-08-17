import * as ActionTypes from "../ActionTypes";

export default function weatherReducer(state={}, action) {
    switch (action.type) {
        case ActionTypes.FETCH_WEATHER_FULFILLED:
            return [
                ...state,
                // `login` is the username
                action.payload
            ];
        // return    Object.assign({}, state, {weather: action.payload});
        default:
            return state;
    }
};