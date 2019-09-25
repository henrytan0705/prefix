import React from 'react';
import VideoDisplayContainer from './video/display/video_display_container';
import VideoSection from './video/content/video_section';

class Main extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        if(!Object.keys(this.props.videos).length || 
            !Object.keys(this.props.genres).length ){
            this.props.retrieveVideos();
            this.props.retrieveGenres();
        }

        if (!this.props.myList.fetched) {
            this.props.retrieveList(this.props.userId);
        }
    }

    render() {
        if (!Object.values(this.props.videos).length || !Object.values(this.props.genres).length) return null;

        let videosArray = Object.values(this.props.videos);
        let videos = this.props.videos;
        let path = this.props.path;

        if (path.length > 2) {
            let id = parseInt(path[path.length - 1]);
            let genre = this.props.genres[id];
            let genreVideos = videosArray.filter(vid => vid.genres.includes(genre.genre));
            videos = genreVideos;
        }

            let filteredVideos = Object.values(videos);
            let displayVideo = filteredVideos[0];

        return(
            <div className="main-content">
                <VideoDisplayContainer video={displayVideo}/>                
                <VideoSection videos={videos} genres={this.props.genres}/>
            </div>
        )
    }
}

export default Main;