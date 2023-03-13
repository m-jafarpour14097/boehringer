import styles from "./styles";
import { rectangle } from "./assets";
import {Footer, Heart, LookingJob, Navbar, Card, Search, NewsSlider, Question} from "./components";

const App = () => (
  <div className="w-full max-w-[1800px] overflow-hidden">
    <div className="w-full relative h-screen  md:bg-secondary bg-primary">
        <div className="box-border md:w-[890px] h-0  
        md:border-r-[250px] border-r-transparent
        border-b-[600px] border-b-primary " > 
        <div className={`${styles.blob1}`}></div>
        <div className={`${styles.blob2}`}></div>
        <div className={`${styles.blob3}`}></div>
        <img src={rectangle} className="absolute sm:visible invisible -top-10 -left-16 w-[70%] h-[750px] " />
        <div className="absolute top-0 left-0 ">
            <div className={`${styles.padding} ${styles.flexCenter} w-screen`}>
            <div className={`${styles.boxWidth} z-10`}>
              <Navbar />
            </div>
          </div>
          <div className={`bg-transparent ${styles.flexStart} ${styles.paddingX} md:flex-row flex-col `}>
              <div className={`${styles.flexStart} flex-col w-full `}>
                <h1 className={`${styles.headingLight} ${styles.paddingY}`}>A successful and research driven company</h1>
                <div className="w-[313px] bg-warning border-b-[4px] border-b-warning mb-4 "></div>
                <p className={`${styles.paragraphLight} ${styles.paddingY}`}>Boehringer Ingelheim is a global group of companies embracing many cultures and diverse societies. Learn more about the financial highlights, the corporate vision, the organisation, the Board of Managing Directors and the company's history as well as our engagement for scientific, cultural and environmental purposes.</p>
              </div>
            <Card />
          </div>
        </div>
        </div>
        
    </div>
     <div className={`bg-dimWhite ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Search /> 
        <NewsSlider />
        <Heart /> 
        <LookingJob />
        <Question />
        <Footer /> 
      </div>
    </div>
   
  </div>
);

export default App;
