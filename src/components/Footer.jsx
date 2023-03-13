import styles from "../styles"
import { logo, facebook, twitter, youtube, instagram, linkedin, rectangle  } from "../assets"
import {footerLinks} from "../constants"

const Footer = () => (
    <section className="w-full h-auto mt-3 bg-primary relative">
      <img src={rectangle} alt="rectangle" className="absolute top-0 -left-10 z-0 sm:block hidden"/>
      <img src={logo} alt="logo" className="absolute top-5 left-5"/>
      <div className={`${styles.flexCenter} flex-col`}>
        <div className={`grid md:grid-cols-4 grid-cols-2 justify-start items-start z-10 mt-36 mb-10 md:mx-auto mx-3`}>
          {footerLinks.map((item) => (
            <div key={item.title} className={`${styles.flexStart} flex-col md:mx-5`}>
                <h1 className="font-poppins font-bold md:text-[1.2rem] text-dimWhite mb-2">{item.title}</h1>
                {item.links.map((link) => (
                  <div key={link.name} className={`${styles.flexCenter} flex-col md:mt-2`}>
                    <a href={link.link} className="font-poppins font-normal text-dimWhite md:mt-2 cursor-pointer">{link.name}</a>
                  </div>
                ))}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:gap-x-36 gap-x-8 mx-5 mb-2">
          <div className={`${styles.flexStart} flex-col`}>
            <h2 className={`${styles.headingLight}`}>Address:</h2>
            <p className={`${styles.paragraphLight}`}>26 W 12th St. New York, NY 10342, NYC</p>
          </div>
          <div className={`${styles.flexStart} flex-col mt-5`}>
            <h2 className={`${styles.headingLight}`}>Follow us:</h2>
            <div className={`${styles.flexStart}`}>
              <a href="#" className="mx-2">
                <img src={facebook} alt="facebook" />
              </a>
              <a href="#" className="mx-2">
                <img src={twitter} alt="twitter" />
              </a>
              <a href="#" className="mx-2">
                <img src={youtube} alt="youtube" />
              </a>
              <a href="#" className="mx-2">
                <img src={instagram} alt="instagram" />
              </a>
              <a href="#" className="mx-2">
                <img src={linkedin} alt="linkedin" />
              </a>
            </div>
          </div>
        </div>
        
      </div>
      <div className={`${styles.flexCenter} flex-col w-full my-2 opacity-50`}>
        <div className="w-[70%] bg-warning border-b-[4px] border-b-warning mb-2 "/>
        <p className={styles.paragraphLight}>© 2010-2021 Boehringer Ingelheim International GmbH. All rights reserved.</p>
      </div>
    </section>
  )


export default Footer