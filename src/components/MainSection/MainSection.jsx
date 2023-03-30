import React, { useEffect, useState } from "react";
import QuesAns from "../QuesAns/QuesAns";
import SingleCard from "../SingleCard/SingleCard";
import "./MainSection.css";

const MainSection = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('generated.json')
	        .then(response => response.json())
	        .then(data => setCards(data))
    });

  return (
    <>

      <div className="body-component">

        {/*-------- body left side -------- */}
        <div>
        {
            cards.map((card) => (
                <SingleCard card={card}></SingleCard>
            ))
        }</div>

          {/* <SingleCard></SingleCard> */}
        
        {/*------- body right side --------- */}

        <div className="body-right">
            <div className="right-heading"><h2>Spend time on read: 0 minutes</h2></div>
            <div>
              
            </div>
        </div>
      </div>
      <QuesAns></QuesAns>
    </>
  );
};

export default MainSection;
