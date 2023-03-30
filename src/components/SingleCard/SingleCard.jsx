import React from 'react';
import './SingleCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBookmark } from '@fortawesome/free-solid-svg-icons'

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
              <p className='readtime'>0{card.ReadTime} minute to read <span className='bookmark'><FontAwesomeIcon icon={faBookmark} /></span></p>
            </div>
          </div>
          <h1>{card.BlogTitle}</h1>
          <p className='hashtag'>#beginners  #programming</p>
          <a className='card-a' href="">Mark as read</a>
        </div>
    );
};

export default SingleCard;