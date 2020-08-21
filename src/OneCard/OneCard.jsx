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
      {
        props.additionalLabel &&
        <div className="AdditionalBloc">
          <p style={{ padding: "3px", backgroundColor:"#F1F1F1", borderRadius:"50px"}}>
            {props.additionalLabel}
          </p>
        <img src="/assets/icon-plus.svg" alt="icon plus"/>
        </div>

      }
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
    </Card >
  );
};

export default OneCard;
