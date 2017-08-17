import * as ActionTypes from '../ActionTypes';
import {fetchWeather} from "../actions";
import { Observable } from 'rxjs/Observable';
import {RxHttpRequest} from 'rx-http-request'
import 'rxjs/add/observable/dom/ajax';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';

import {fetchWeatherFulfilled} from "../actions";

const API_KEY = 'cd4c039fb3dca06186399ff210331f9b';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export  const fetchWeatherEpic = (action$) => {
    const options = {
       json: true
    };
    return action$.filter((action$)=> action$.type === ActionTypes.FETCH_WEATHER)
        .mergeMap(action$ => (
                    RxHttpRequest.get(`${ROOT_URL}&q=${action$.payload},us`, options)
                        .map(res => {return res.body})
                        .map(response => fetchWeatherFulfilled(response), (err) => {debugger; console.log(err)}))

        );
};