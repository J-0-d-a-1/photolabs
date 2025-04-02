import PhotoListItem from "./components/PhotoListItem";
import "./App.scss";

const sampleDataForPhotoListItem = {
  id: 1,
  location: {
    city: "Montreal",
    country: "Canada",
  },
  urls: {
    full: "/Image-1-Full.jpeg",
    regular: "/Image-1-Regular.jpeg",
  },
  user: {
    username: "exampleuser",
    name: "Joe Example",
    profile: "/profile-1.jpg",
  },
};

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      <PhotoListItem
        username={sampleDataForPhotoListItem.user.username}
        imageSource={sampleDataForPhotoListItem.urls.full}
        id={sampleDataForPhotoListItem.id}
        location={sampleDataForPhotoListItem.location}
        profile={sampleDataForPhotoListItem.user.profile}
      />
    </div>
  );
};

export default App;
