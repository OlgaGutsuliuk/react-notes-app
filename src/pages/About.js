import React from "react";
import Like from "./Like";

export const About = () => {

  return (
    <div className='jumbotron jumbotron-fluid'>
      <div className='container'>
        <h1 className='display-4'>Лучшее React приложение</h1>
        <p className='lead'>
          Версия приложения <strong>1.0.42</strong>
        </p>
      </div>
      <Like/>
    </div>
  );
};
