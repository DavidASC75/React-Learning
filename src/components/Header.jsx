import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import Styles from '../css_files/FrontPageLayout.module.css';
import LogoImage from '../Img/Logo.png';
import ArenaImage from '../Img/arena.jpg';

const Header = () => {
    const tags = [
        {
          id: 0,
          name: 'Home',
          link: 'https://www.youtube.com/watch?v=v7ScGV5128A',
        },
        {
          id: 1,
          name: 'Products',
          link: 'https://www.youtube.com/watch?v=6n3pFFPSlW4',
        },
        {
          id: 2,
          name: 'About us',
          link: 'https://www.youtube.com/watch?v=J1Oq3QtRUEw',
        },
        {
          id: 3,
          name: 'Contact',
          link: 'https://www.youtube.com/watch?v=5-gy9y9Mvqc',
        },
        {
          id: 4,
          name: 'Account',
          link: 'https://youtu.be/MLS4YdHaLQk?t=455',
        },
      ];
    
      const cart = <FontAwesomeIcon icon={faShoppingCart} size='2x' />;
    
      return (
        <React.Fragment>
          
          <div className={Styles.header}>
            <div className={Styles.headerNavbar}>
              <div className={Styles.navbarContent}>
                <div className={Styles.navbarContentLogo}>
                  <img src={LogoImage} alt='' />
                </div>
                <div className={Styles.navbarContentNavigation}>
                  <ul>
                    {tags.map((tag) => (
                      <li key={tag.id} name={tag.name}>
                        <a href={tag.link} target='_blank'>
                          {tag.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={Styles.navbarContentCart}>{cart}</div>
              </div>
            </div>
    
            <div className={Styles.headerRow}>
                <div className={Styles.headerRowLeft}>
                    <div className={Styles.headerRowLeftContent}>
                    <div className={Styles.headerRowLeftH1}>
                        <h1>BEYBLADE</h1>
                    </div>
                    <div className={Styles.headerRowLeftDescription}>
                        <p>Come and get your super duper beyblade</p>
                    </div>
                    <div className={Styles.headerRowLeftButton}>
                        <button> Explore now &#8594;</button>
                    </div>
                    </div>
                </div>
                <div className={Styles.headerRowRight}>
                    <div className={Styles.headerRowRightContent}>
                    <div className={Styles.headerRowRightContentImage}>
                        <img src={ArenaImage} alt='' />
                    </div>
                    </div>
                </div>
           
            </div>
          </div>
          
        </React.Fragment> );
}
 
export default Header;