import {combineReducers} from 'redux';
import SampleReducer from './reducer.sample';

const allReducers = combineReducers({
    sample: SampleReducer
});

export default allReducers
