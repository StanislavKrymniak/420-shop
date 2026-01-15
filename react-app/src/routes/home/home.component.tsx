import './home.styles.scss';
import detailsIcon from '../../assets/details-icon.svg';
import detailsImage from '../../assets/details-image.svg';
import detailsVector from '../../assets/details-vector.svg';

export const Home = () => {
  return (
    <main className="home-container">
      <header className="home-header">
        <div className="home-header header-info">
          <h1 className="header-info title">420 FOUR TWOO</h1>
          <p className="header-info subtitle">
            Designer clothing inspired by street culture
          </p>
        </div>
      </header>

      <div className="home-details">
        <section className="home-details about" aria-labelledby="features-heading">
          <h2 id="features-heading" className="visually-hidden">
            Atuty marki
          </h2>
          <ul className="about_container">
            <li className="about_block">
              <span className="about_block_icon">
                <img src={detailsVector} alt='' />
              </span>
              <div className="about_block_text">excellent quality</div>
            </li>
            <li className="about_block">
              <span className="about_block_icon">
                <img src={detailsVector} alt='' />
              </span>
              <div className="about_block_text">nice material</div>
            </li>
            <li className="about_block">
              <span className="about_block_icon">
                <img src={detailsVector} alt='' />
              </span>
              <div className="about_block_text">worldwide shipping</div>
            </li>
          </ul>
        </section>

        <section className="home-details body" aria-labelledby="about-brand-heading">
          <h2 id="about-brand-heading" className="visually-hidden">
            O marce
          </h2>
          <div className="home-details_columns">
            <div className="home-details_columns column_1">
              <div className="column image">
                <img src={detailsImage} alt="Modelka w stylizacji 420 Four TwoO" />
              </div>
            </div>
            <div className="home-details_columns column_2">
              <div className="column icon">
                <img src={detailsIcon} alt="Logo 420 Four TwoO" />
              </div>
              <p className="column text">
                420 Four TwoO is a brand with a street culture spirit for people
                who want to live in the world, learn about different cultures, be
                free from prejudices and wear what reveals them as an individual
                and reflects their life values.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;

/*import './home.styles.scss';
import detailsIcon from '../../assets/details-icon.svg'
import detailsImage from '../../assets/details-image.svg'
import detailsVector from '../../assets/details-vector.svg'


export const Home = () => {
  return (
    <nav className="home-container">
      <div className="home-header">
        <div className="home-header header-info">
          <div className="header-info title">420 FOUR TWOO</div>
          <div className="header-info subtitle">Designer clothing inspired by street culture</div>
        </div>
      </div>
      <div className="home-details">
        <div className="home-details about">
          <div className="about_container">
              <div className="about_block">
                  <span className="about_block_icon"><img src={detailsVector} alt="" /></span>
                  <div className="about_block_text">excellent quality</div>           
              </div>
              <div className="about_block">            
                  <span className="about_block_icon"><img src={detailsVector} alt="" /></span>
                  <div className="about_block_text">nice material</div>
              </div>
              <div className="about_block">
                  <span className="about_block_icon"><img src={detailsVector} alt="" /></span>
                  <div className="about_block_text">worldwide shipping</div>
              </div>
          </div>
        </div>
        <div className="home-details body">
          <div className="home-details_columns">
            <div className="home-details_columns column_1">
              <div className="column image"><img src={detailsImage} alt="" /></div>
            </div>
            <div className="home-details_columns column_2">
              <div className="column icon"><img src={detailsIcon} alt="" /></div>
              <div className="column text">420 Four TwoO is a brand with a street culture spirit for people who want to live in the world, learn about different cultures, be free from prejudices and wear what reveals them as an individual and reflects their life values.</div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Home
























/*import React from 'react';
import myImage from '../../assets/main.svg';


export const Home = () => {
  return (
    <nav className="Home-container">
      <img src={myImage} alt="" />
    </nav>
  );
};

export default Home;
*/