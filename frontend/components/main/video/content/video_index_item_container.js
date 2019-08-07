import { connect } from 'react-redux'
import { retrieveVideo } from '../../../../actions/video_actions';
import VideoIndexItem from './video_index_item';

const msp = state => {
    return {
        // video: state.videos[2],
        // videos: state.videos
        // genre: ""
    }
}

const mdp = dispatch => {
    return {
        retrieveVideo: (id) => dispatch(retrieveVideo(id)),
        // retrieveVideos: () => dispatch(retrieveVideos())
    }
}

export default connect(msp, mdp)(VideoIndexItem);