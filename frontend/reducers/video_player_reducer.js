import { RECEIVE_VIDEO } from '../actions/video_actions';
import { merge } from 'lodash'

const videoPlayerReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_VIDEO:
            return merge({}, action.video);
        default:
            return state;
    }
}

export default videoPlayerReducer;