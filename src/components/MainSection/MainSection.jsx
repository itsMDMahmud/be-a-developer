import React, { useEffect, useState } from "react";
import BookmarkBlogs from "../BookmarkBlogs/BookmarkBlogs";
import QuesAns from "../QuesAns/QuesAns";
import SingleCard from "../SingleCard/SingleCard";
import "./MainSection.css";

const MainSection = ({handleBookmark, readTime}) => {
    const [cards, setCards] = useState([]);
    const [time, setTime] = useState(readTime);

    useEffect(() => {
        fetch('generated.json')
	        .then(response => response.json())
	        .then(data => setCards(data))
    });

    useEffect(() => {
      const getReadTimeFromStorage = localStorage.getItem("readTime");
      setTime(getReadTimeFromStorage); 
     }, [readTime]);

  return (
    <>

      <div className="body-component">

        {/*-------- body left side -------- */}
        <div>{cards.map((card) =>(<SingleCard handleBookmark={handleBookmark} card={card}></SingleCard>))}</div>

        
        {/*------- body right side --------- */}

        <div className="body-right">
            <div className="right-heading"><h2>Spend time on read: {readTime} minutes</h2></div>
            <div>
              <BookmarkBlogs readTime={readTime} handleBookmark={handleBookmark}></BookmarkBlogs>
            </div>
        </div>
      </div>
      <QuesAns></QuesAns>
    </>
  );
};

export default MainSection;
