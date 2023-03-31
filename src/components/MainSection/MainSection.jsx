import React, { useEffect, useState } from "react";

import QuesAns from "../QuesAns/QuesAns";
import SingleCard from "../SingleCard/SingleCard";
import "./MainSection.css";

const MainSection = ({ handleBookmark, readTime, bookMarkBlogs, bmBlog }) => {
  const [cards, setCards] = useState([]);
  const [time, setTime] = useState(readTime);

  useEffect(() => {
    fetch("generated.json")
      .then((response) => response.json())
      .then((data) => setCards(data));
  });

  useEffect(() => {
    const getReadTimeFromStorage = localStorage.getItem("readTime");
    setTime(getReadTimeFromStorage);
  }, [readTime]);

  return (
    <>
      <div className="body-component">
        {/*-------- body left side -------- */}
        <div>
          {cards.map((card) => (
            <SingleCard
              handleBookmark={handleBookmark}
              bookMarkBlogs={bookMarkBlogs}
              card={card}
            ></SingleCard>
          ))}
        </div>

        {/*------- body right side --------- */}

        <div className="body-right">
          <div className="right-heading">
            <h2>Spend time on read: {readTime} minutes</h2>
          </div>
          <div>
            <div className="bookmarked-blogs">
              <h2>Bookmarked blogs: {bmBlog.length}</h2>
              <div>
                {/* <div className='blog-names'><h2>Be a web application developer</h2></div> */}
                {bmBlog.map((bm) => <h2 key={bm.length} >{bm}</h2> )}
              </div>
            </div>
            {/* readTime={readTime} */}
          </div>
        </div>
      </div>
      <QuesAns></QuesAns>
    </>
  );
};

export default MainSection;
