import styles from "../styles"
import {heart, heartgroup } from "../assets"

const Heart = () => (
    <div className="w-full h-auto">
      <h1 className={`${styles.headingDark} text-center`}>HEART <span className="text-warning">FAILURE</span></h1>
      <div className="flex justify-center items-center  mt-10 mx-5">
        <div className="flex justify-center md:items-start items-center flex-col mx-5">
          <h1 className={`${styles.headingDark} md:text-left text-center mb-2`}>Heart Failure in Women</h1>
          <div className="w-[200px] bg-warning border-b-[4px] border-b-warning mb-2 "/>
          <p className={`${styles.paragraphDark} md:w-[50%] md:text-left text-center`} >Gain knowledge on how gender disparities appear in heart failure care. You’ll hear from global experts on how women can be supported through their journey and empowered to manage their care, from diagnosis to disease management.</p>
          <button type="button" className="btn1 p-2 mt-8">Read More</button>
        </div>
        <div className="relative mr-5 md:block hidden">
          <img src={heart} alt="heart" className="md:w-[65rem] heart z-0" />
          <img src={heartgroup} alt="ellips" className="absolute -top-8 "/>
        </div>
      </div>
    </div>
  )


export default Heart