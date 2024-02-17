import React, { Component } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import { FaPlayCircle } from "react-icons/fa";

export class VideoTentangKami extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }
  render() {
    return (
      <div>
        <ModalVideo
          channel="youtube"
          isOpen={this.state.isOpen}
          videoId="d3hmAPToFyk"
          onClose={() => this.setState({ isOpen: false })}
        />
        <section>
          <a className="play-button-in-section video-btn">
            <button className="btn " onClick={this.openModal}>
              <FaPlayCircle />
            </button>
            <span className="waves wave-1" />
            <span className="waves wave-2" />
            <span className="waves wave-3" />
            <span className="waves wave-4" />
          </a>
        </section>
      </div>
    );
  }
}

export default VideoTentangKami;
