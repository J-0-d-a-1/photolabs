import TopicListItem from "./TopicListItem";

import "../styles/TopicList.scss";

const TopicList = ({ topics }) => {
  const topicsList = topics.map((topic) => (
    <TopicListItem key={topic.id} title={topic.title} />
  ));

  return <div className="top-nav-bar__topic-list">{topicsList}</div>;
};

export default TopicList;
