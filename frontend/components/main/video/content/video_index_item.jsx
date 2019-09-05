import React from 'react';
import { Link } from 'react-router-dom';
import { PlayCircle } from 'react-feather';
import VideoDescriptionContainer from './description/video_description_container.js';

class VideoIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false,
            description: false, 
            focus: false
        }
        this.playTrailer = this.playTrailer.bind(this);
        this.showThumbnail = this.showThumbnail.bind(this);
        this.setVideoToState = this.setVideoToState.bind(this);
        // this.showDescription = this.showDescription.bind(this);
        // this.description = null;
        // this.vidRef = React.createRef();
    }

    componentDidMount(){
        this._mounted = true;
    }

    componentWillUnmount(){
        this._mounted = false;
    }

    playTrailer(){
        if (!this.props.previewVideoId) {
            this.playId = setTimeout(
                function () {
                    if (this._mounted) {
                        this.setVideoToState(this.props.video);
                        this.setState({ hover: true });
                    }
                }
                .bind(this),
                600
            );  
        }
    }

    showThumbnail(){
        // if (this.props.previewVideoId) {

        // }
        clearTimeout(this.playId);
        this.props.clearCurrentVideo();
        if (this._mounted) this.setState({hover: false});

    }

    setVideoToState(video) {
        // return () => { this.props.retrieveVideo(video.id);}
        this.props.retrieveVideo(video.id);
    }

    render(){   
        let video = this.props.video || {
            id: "",
            title: "",
            description: "",
            year: "",
            photoUrl: "",
            videoUrl: "", 
        }
        
        
        
        let path = `/watch/${video.id}`;
        
        let content1 =
            this.state.hover === false ? (
            <div className="thumbnail-position">
                    <img
                        id={`video-${video.id}`}
                        className="video-thumbnail"
                        src={video.photoUrl}
                        onClick={this.props.show(video)}
                    >
                    </img>
                
                {/* <span className="description-container" onClick={this.props.show(video)}></span> */}
            </div>
            ) : (
            <>
                <Link to={path}
                    className="video-item"
                >
                    <video
                        // className="video-item"
                        className="video-item-1"
                        src={video.videoUrl}
                        autoPlay
                    >
                    </video>
                </Link>

                <Link to={path}
                    className="display-play-button">
                    <PlayCircle />
                </Link>

                <span className="description-container" onClick={this.props.show(video)}>
                        {/* <i class="fas fa-angle-down"></i> */}
                </span>
                {/* <span className="description-container" onClick={this.focusVideo(this.props, video)}></span> */}
            </>
            );

        // debugger
     
        // let indexItemHoverEffect = (this.props.previewVideoId) ? "vid" : "video-index-item";

        return (
            <div 
                className="video-index-item"
                // className={indexItemHoverEffect}
                onMouseEnter={this.playTrailer}
                onMouseLeave={this.showThumbnail}
            >
                {content1}
            
                {/* {this.description} */}

            </div>
        )
    }
}

export default VideoIndexItem;