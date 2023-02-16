import React from 'react';

import Styles from '../css_files/Container2.module.css';
import Beyblade1 from '../Img/beyblade1.png';
import Beyblade3 from '../Img/beyblade3.png';
import Beyblade2 from '../Img/beyblade2.png';

const Container2 = () => {
  return (
    <React.Fragment>
      <div className={Styles.containerCategoriesMain}>
        <div className={Styles.containerCategoriesMainContent}>
          <div className={Styles.catgoriesScalediv}>
            <div className={Styles.containerCatImg1}>
              <img src={Beyblade1} alt='' />
              <p>Category 1</p>
            </div>
            <div className={Styles.containerCatImg2}>
              <img src={Beyblade2} alt='' />
              <p>Category 2</p>
            </div>
            <div className={Styles.containerCatImg3}>
              <img src={Beyblade3} alt='' />
              <p>Category 3</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Container2;
