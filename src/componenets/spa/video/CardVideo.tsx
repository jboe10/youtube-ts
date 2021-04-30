import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {Card} from 'react-bootstrap';

interface CardVideoProps {
  image: any,
  title: string,
  creator: string,
  views: string,
  postedDate: string,
}

export const CardVideo: React.FC<CardVideoProps> = ({image,title,creator,views,postedDate}) => {
  return (
    <div className="card-video">
      <Card>
        <Card.Img variant="top" width="272px" height="152px"src={image} />
        <Card.Body>
          <div className="body-sections">
            <div className="section-left">
                <img className="circle-pic" src={image} alt="circle"/>
            </div>
            <div className="section-right">
              <div className="video-title">{title}</div>
              <div className="video-creator">{creator}</div>
              <div className="video-views-dates">
                <div className="video-views">{views}</div>
                <div className="dot">
                  <FontAwesomeIcon icon={faCircle} style={{width: '2px'}}/>
                </div>
                <div className="video-date">{postedDate}</div>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}