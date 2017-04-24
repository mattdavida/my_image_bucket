//Create image list component
//Import react
import React from "react";
import ReactDom from "react-dom";
import ImageDetail from "./image_detail";


const ImageList = (props) => {
  const validImages = props.images.filter(image => !image.is_album);
  const RenderedImages = validImages.map((image) => <ImageDetail
                                                  image = {image}
                                                  key = {image.title}
                                                    />);

    return (
      <ul className="media-list list-group">
        {RenderedImages}
      </ul>
    );
}

//export component
export default ImageList;
