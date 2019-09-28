import { combineReducers } from 'redux-immutable';
import {ui, entity} from 'joy-ui/store';

export default combineReducers({
    ui,
    entity
});
