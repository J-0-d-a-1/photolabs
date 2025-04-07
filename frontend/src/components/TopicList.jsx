import TopicListItem from "./TopicListItem";

import "../styles/TopicList.scss";

const TopicList = ({ topics, fetchPhotoByTopic }) => {
  const topicsList = topics.map((topic) => (
    <TopicListItem
      key={topic.id}
      title={topic.title}
      id={topic.id}
      fetchPhotoByTopic={fetchPhotoByTopic}
    />
  ));

  return <div className="top-nav-bar__topic-list">{topicsList}</div>;
};

export default TopicList;
