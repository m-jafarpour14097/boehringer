import styles from "../styles"
import {job3,job2,job1} from "../assets"

const LookingJob = () => (
  <div className="w-full h-auto bg-secondary md:mt-24 mt-5">
  <h1 className={`${styles.headingDark} text-center`}>WORKING AT <span className="text-warning">BOEHRINGER INGELHEIM</span></h1>
  <div className="flex justify-center items-center  mt-10 mx-5">
    <div className="relative mr-5 md:block hidden">
      <img src={job1} alt="heart" className="w-10/12" />
    </div>
    <div className="flex justify-center md:items-start items-center flex-col mx-2">
      <h1 className={`${styles.headingDark} md:text-left text-center mb-2`}>Being part of a global family</h1>
      <div className="w-[300px] bg-warning border-b-[4px] border-b-warning mb-2 "/>
      <p className={`${styles.paragraphDark} md:w-[50%] md:text-left text-center`} >Join us to grow, collaborate, innovate and improve lives</p>
      <button type="button" className="btn1 p-2 mt-8">Explore career opportunities</button>
    </div>
  </div>
</div>
  )


export default LookingJob