import React from 'react';
import TextCards from '../TextCards/TextCards';
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Col, Button
} from 'reactstrap';
import './OneCard.scss';


const OneCard = (props) => {
  return (
    <Card className="OneCard">
      <CardBody>
        <CardTitle style={{ color: "red" }}>{props.title}</CardTitle>
        <CardSubtitle>{props.subtitle} </CardSubtitle>
      </CardBody>
      <Col className="photo-size">
        <CardImg top width="100%" src={props.imageUrl} alt={props.title} />
      </Col>
      <CardText>{props.testLabel}</CardText>
      <CardBody>
        <CardText>
          {
            props.infoArr.map(text => (
              <TextCards
                imgUrl="/assets/check-bg-green.svg"
                text={text}
                />
            ))
          }
        </CardText>
      </CardBody>
    </Card>
  );
};

export default OneCard;
