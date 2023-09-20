const Bookmark = ({ bookmark }) => {
  console.log(bookmark);
  return bookmark.heading_title ? (
    <li className="bookmark-item">{bookmark.heading_title}</li>
  ) : (
    ""
  );
};

export default Bookmark;
