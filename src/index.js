// Any JS in here is automatically ran for us //

//Import React Library
import React from "react";
import ReactDOM from "react-dom";
import ImageList from "./components/image_list";
import axios from "axios";

//Create a component
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
  };

  componentWillMount() {
    //Load our data
    axios.get("https://api.imgur.com/3/gallery/hot/viral/0").then((data) => {
      this.setState({
        images: data.data.data
      })
    }).catch((err) => {
      console.log(err);
    });
  };

  render() {
    return (
      <div>
      <div className="page-header text-center">
        <h2> The most viral images on the internet, sorted by popularity </h2>
        <p>Todays most popular posts</p>
      </div>
        <ImageList
          images = {this.state.images}
        />
      </div>
    );
  };
};
//Render the component to the screen
ReactDOM.render(<App />, document.getElementById("root"));
