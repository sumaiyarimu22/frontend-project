import { useState } from "react";
import { useEffect } from "react";
import KnowlwdgeCafeCart from "./knowlwdgeCafeCart";
import Bookmark from "./Bookmark";

const Home = () => {
  const [knowledgeData, setKnowledgeData] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [spentReadTimes, setSpentReadTimes] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setKnowledgeData(data?.knowledge_cafe_entries));
  }, []);

  const handlerMarkAsRead = (data) => {
    if (bookmarks) {
      setBookmarks([...bookmarks, data]);
    } else {
      setBookmarks([data]);
    }
  };

  const handleTimeBookmark = (data) => {
    // Check if the item is already in spentReadTimes
    const index = spentReadTimes.findIndex((item) => item.id === data.id);

    if (index !== -1) {
      // If it's in the array, remove it and subtract its read_time
      setSpentReadTimes((prevTimes) => {
        const updatedTimes = [...prevTimes];
        updatedTimes.splice(index, 1);
        return updatedTimes;
      });
    } else {
      // If it's not in the array, add it and add its read_time
      setSpentReadTimes([...spentReadTimes, data]);
    }
  };

  let spentTime = 0;
  for (const time of spentReadTimes) {
    spentTime = spentTime + time.read_time;
  }

  return (
    <div className="knowledge-container">
      <div className="knowledge-left">
        {knowledgeData.map((data) => (
          <KnowlwdgeCafeCart
            data={data}
            key={data.id}
            handlerMarkAsRead={handlerMarkAsRead}
            handleTimeBookmark={handleTimeBookmark}
          />
        ))}
      </div>
      <div className="knowledge-right">
        <div className="spent-time">Spent time on read : {spentTime}min</div>
        <div className="bookmark-lists">
          <div className="bookmark-title">
            Bookmarked Blogs : {bookmarks.length}
          </div>
          {bookmarks.map((bookmark) => (
            <Bookmark bookmark={bookmark} key={bookmark.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
