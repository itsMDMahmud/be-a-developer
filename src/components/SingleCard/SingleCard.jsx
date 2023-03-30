import React from 'react';
import './SingleCard.css'

const SingleCard = (props) => {
    const {card} = props;
    return (
        <div className='single-card'>
            <img className='blogCoverImage' src={card.BlogCoverImage} alt="image" />
          <div className="author-name-time">
            <img className='authorImage' src={card.AuthorImage} alt="aut-img" />
            <div className="name-time">
              <div className="name-date">
                <h2>{card.AuthorName}</h2>
                <p className='date'>{card.PublishDate}</p>
              </div>
              <p className='readtime'>0{card.ReadTime} minute read</p>
            </div>
          </div>
          <h1>{card.BlogTitle}</h1>
          <p className='hashtag'>#beginners  #programming</p>
          <a className='card-a' href="">Mark as read</a>
        </div>
    );
};

export default SingleCard;