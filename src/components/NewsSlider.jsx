import React, { useState } from 'react';
import styles from "../styles";
import { arrowleft, arrowright, inner, outer } from '../assets';
import { newsCard } from "../constants";

const NewsSlider = () => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentItemIndex(prevIndex => (prevIndex - 1 + newsCard.length) % newsCard.length);
  };
  
  const handleNextClick = () => {
    setCurrentItemIndex(prevIndex => (prevIndex + 1) % newsCard.length);
  };

  const currentItem = newsCard[currentItemIndex];

  return (
    <section className={`${styles.flexStart} mt-8 flex-col w-full bg-secondary`}>
      <div className="p-2" >
        <div className="w-[200px] bg-warning border-b-[4px] border-b-warning mb-2 "/>
        <h1 className={styles.headingDark}>Explore our News & Stories</h1>
        <p className={styles.paragraphDark}>Stay up to date with helpful information, announcements, and trending topics.</p>
      </div>
      <div className={`${styles.flexCenter} w-full h-auto`}>
        <div className="flex relative overflow-hidden">
          <div className="flex sm:flex-row flex-col justify-between items-center ">
          <button type="button" className=" transform -translate-y-1/2 sm:ml-2 mt-8" onClick={handlePrevClick}>
               <img src={arrowleft} alt="Previous" />
            </button>
            <div className="relative md:block hidden w-[420px] h-[520px] ">
              <img
                src={currentItem.img}
                alt={currentItem.title}
                className="absolute top-12 left-12 w-[380px] h-[380px] bg-cover rounded-full"
              />
              <img src={inner} alt="inner" className="absolute top-[4.2rem] left-[4.2rem] w-[340px] h-[340px] rounding-reverse2" />
              <img src={outer} alt="inner" className="absolute top-[1.93rem] left-[1.92rem] rounding2 bg-contain" />
            </div>
            <div className={`${styles.flexStart} flex-1 flex-col sm:mx-16 mx-2 sm:mt-8 mb-10`}>
              <div className="w-[100px] bg-warning border-b-[4px] border-b-warning mb-2" />
              <h1 className={styles.headingDark}>{currentItem.title}</h1>
              <p className={styles.paragraphDark}>{currentItem.des}</p>
            </div>
            
            <button type="button" className=" transform -translate-y-1/2 sm:mr-2 mb-1" onClick={handleNextClick}>
                <img src={arrowright} alt="Next" />
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default NewsSlider;
