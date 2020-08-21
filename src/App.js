import React from 'react';
import './App.scss';
import Button from './Button/Button';
import Cards from './Cards/Cards';

function App() {
  return (
    <div className="App">
      <h1>Abonnements</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua. </p>
      <a href="https://s3.invisionapp-cdn.com/storage.invisionapp.com/screens/files/418114568.png?x-amz-meta-iv=6&response-cache-control=max-age%3D2419200&x-amz-meta-ck=4b790180e52011d446019a9ef78f38eb&AWSAccessKeyId=AKIAJFUMDU3L6GTLUDYA&Expires=1601510400&Signature=pwtHdASsU1DxovSxn56TZHgnvg8%3D" target="_blank" rel="noopener noreferrer">
        <Button buttonName="Abonnements hors-meeting" />
      </a>
      <Button buttonName="Abonnements comme live" />
      <Cards />
    </div >
  );
}

export default App;
