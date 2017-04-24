import React from "react";
import ReactDOM from "react-dom";
import ImageScore from "./image_score";

class ImageDetail extends React.Component {
  constructor(props) {
    super(props);
    this.title = props.image.title;
    this.image = props.image.link;
    this.description = props.image.description;
    this.ups = props.image.ups;
    this.downs = props.image.downs;
  }
  render() {
    return (
      <li className="media list-group-item">
        <div className="media-left">
          <img src={this.image} />
        </div>
        <div className="media-body">
          <h4 className="media-heading">
            {this.title}
          </h4>
          <p>
            {this.description}
          </p>
          <ImageScore
            ups = {this.ups}
            downs = {this.downs}
          />
        </div>
      </li>
    );
  };
};

export default ImageDetail;
