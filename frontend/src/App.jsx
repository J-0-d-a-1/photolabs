// import PhotoListItem from "./components/PhotoListItem";
import "./App.scss";
import PhotoList from "./components/PhotoList";

// Note: Rendering a single component to build components in isolation
const App = () => {
  // const photos = [];
  // for (let i = 0; i < 3; i++) {
  //   photos.push(<PhotoListItem key={i} photo={sampleDataForPhotoListItem} />);
  // }

  return (
    <div className="App">
      {/* <div className="photo-list">{photos}</div> */}
      <PhotoList />
    </div>
  );
};

export default App;
