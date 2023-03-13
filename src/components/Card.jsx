import styles from "../styles"
import { heroCart } from "../constants"
const Card = () => (
    <section className="cpnatiner w-full flex-auto ">
      {heroCart.map((item,index) => (
        <div className={`${styles.flexCenter} ${index === heroCart.length -2 ? 'sm:flex-row-reverse' : 'flex-row'}`}>
            <div className={`${styles.flexCenter} magnificatin mx-5 my-2 drop-shadow-lg sm:flex hidden w-[130px] h-[130px] bg-slate-200 rounded-full`} >
              <div className={`relative`} >
                  <a href={item.link}>
                    <div className={`absolute -top-[22px] -left-[22px] ${index === heroCart.length -2 ? 'rounding-reverse' : 'rounding'} w-[160px] h-[160px] border-x-8 border-dashed border-warning rounded-full `} />
                    <img src={item.img} alt="hero card image" className="w-[115px] h-[115px] rounded-full bg-contain " />
                  </a>
              </div>    
            </div>
            <div className={`${styles.flexCenter} w-[250px] h-[100px] shadow-xl bg-dimWhite rounded-lg sm:mx-5 m-2`}>
            <a href={item.link} className={`${styles.paragraphDark} p-3`} >
              <span>{item.title}</span>
            </a>
            </div>

        </div>
      ))}

    </section>
  )


export default Card