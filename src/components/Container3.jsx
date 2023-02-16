import React from 'react';

import Styles from "../css_files/Container3.module.css";
import Gold from "../Img/gold.jpg";
import Red from "../Img/red.jpg";
import Blue from "../Img/blue.jpg";
import Green from "../Img/green.jpg";
import Orange from "../Img/orange.jpg";





const Container3 = () => {
    return ( <React.Fragment>

            <div className={Styles.contMain}>
                <div className={Styles.containerContent}>
            <div className={Styles.contH2}>
                        <h2>Recomended products</h2>
               
         
            </div>
            <div className={Styles.h2Img}>
                  <img src={Gold} alt="" />
                  </div>
      
                </div>
            </div>


    </React.Fragment> );
}
 
export default Container3;