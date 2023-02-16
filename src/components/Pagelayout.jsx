import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import '../components/Pagelayout.css';

const Pagelayout = () => {
  //const [tags, setTags] = useState([{ id: 0, name: "Home", link: "https://www.youtube.com/watch?v=v7ScGV5128A"}]);
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

  /* const handleClick =(e)=>{
    console.log(e.target);
  } */
  console.log(typeof tags[0].link);

  const cart = <FontAwesomeIcon icon={faShoppingCart} size='2x' />;

  return (
    <React.Fragment>
      <div className='header'>
        <div className='header-navbar'>
          <div className='navbar-logo'>
            <img src='../../img/logo.jpg' alt='' width='100%' height='100%' />
          </div>
          <div className='navbar-navigation'>
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
          <div className='navbar-cart'>
            <div className='cart'>{cart}</div>
          </div>
        </div>

        <div className='header-row'>
          <div className='row-main'>
            <div className='row-content'>
              <h1 className='row-content-h1'>BEYBLADE</h1>
              <p>Come and get your super duper beyblade</p>
              <button className='header-row-button'>
                Explore now &#8594;
              </button>
            </div>
          </div>
          <div className='row-img'>
            <img src='../../img/arena.jpg' alt='' />
            
          </div>
        </div>
      </div>

      <div className='container-2'>
        <div className='categories'></div>
      </div>

      <div className='container-3'></div>

      <div className='container-4'></div>

      <div className='container-5'></div>

      <div className='container-6'></div>

      <div className='footer'></div>
    </React.Fragment>
  );
};

export default Pagelayout;
