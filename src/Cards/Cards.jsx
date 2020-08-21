import React from 'react';
import OneCard from '../OneCard/OneCard';
import {
  Row, Col, Container
} from 'reactstrap';
// import './Cards.scss';

const firstArray = [
  "2 à 3 publications par semaine",
  "Story Facebook / Instagram",
  "Développement d'une stratégie de contenue et d'une direction artistique",
  "Conseil et suivi stratégique",
  "Administration et gestion de vos comptes",
  "Réalisation de créations graphiques uniques",
  "Mise en place et administration du compte publicitaire",
  "Intéraction avec la communauté de fans"
];

const secondArray = [
  "2 à 4 publications par semaine",
  "Veille strégique",
  "Veille concurrentielle",
  "Réalisation d'une affiche pour chaque meeting",
  "Interactions avec des championnats, pilotes et partenaires",
  "Mise en place d'un jeu concours par mois"
]; 

const thirdArray = [
  "4 à 8 publications par semaine",
  "Retours statistiques",
  "Reactive marketing",
  "Réalisation de mini montages vidéos",
  "Mise en place et administration du compte publicitaire"
];

const Cards = () => (
  <Container>
    <Row>
      <Col lg="4" xs="12" sm="6">
        <OneCard
          title="START"
          subtitle="A partir de 800 €/mois"
          imageUrl="/assets/start.svg"
          infoArr ={firstArray}
        />
      </Col>
      <Col lg="4" sm="6">
        <OneCard
          title="POLE"
          subtitle="A partir de 1100 €/mois"
          imageUrl="/assets/pole.svg"
          testLabel="yes"
          infoArr ={secondArray}
          additionalLabel="Inclut le contenu de l'offre START"
        />
      </Col>
      <Col lg="4" sm="6">
        <OneCard
          title="WIN"
          subtitle="A partir de 2000 €/mois"
          imageUrl="/assets/win.svg"
          testLabel="yes"
          infoArr ={thirdArray}
          additionalLabel="Inclut le contenu de l'offre START + Pole"
        />
      </Col>
    </Row>
  </Container >
)

export default Cards;