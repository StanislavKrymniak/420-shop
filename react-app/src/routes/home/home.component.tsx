import './home.styles.scss';
import detailsIcon from '../../assets/details-icon.svg'
import detailsImage from '../../assets/details-image.svg'
import detailsVector from '../../assets/details-vector.svg'


export const Home = () => {
  return (
    <nav className="home-container">
      <div className="home-header">
        <div className="home-header header-info">
          <div className="header-info title">420 FOUR TWOO</div>
          <div className="header-info subtitle">Дизайнерская одежда, вдохновлённая уличной культурой</div>
        </div>
      </div>
      <div className="home-details">
        <div className="home-details about">
          <div className="about_container">
              <div className="about_block">
                  <span className="about_block_icon"><img src={detailsVector} alt="" /></span>
                  <div className="about_block_text">отличное качество</div>           
              </div>
              <div className="about_block">            
                  <span className="about_block_icon"><img src={detailsVector} alt="" /></span>
                  <div className="about_block_text">приятный материал</div>
              </div>
              <div className="about_block">
                  <span className="about_block_icon"><img src={detailsVector} alt="" /></span>
                  <div className="about_block_text">доставка по всему миру</div>
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
              <div className="column text">420 Four TwoO — бренд c духом уличной культуры, для людей, которые хотят жить в мире, узнавать разные культуры, быть свободными от предрассудков и носить то, что раскрывает их как личность и отражает их жизненные ценности.</div>
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