import {useState} from 'react'
import styles from "../styles"
import { logo, menu, close } from "../assets"
import { navLink } from '../constants'

const Navbar = () =>  {
  const [toggle, setToggle] = useState(false)
  const [show, setShow] = useState(false)
  const [menuData , setMenuData] = useState({})

  const handleLinks = (links) => {
    setMenuData(links)
    setShow(true)
  }
  const handleHide = () => {
    setShow(false)
    setToggle ((prev) => !prev)
  }


  const ShowItems = () => {
    if(!show){
      return null
    }
    {
      return (
        <div className={`p-5 absolute sm:top-[30px] top-[235px] -left-6  my-2 w-auto`}>
          <ul className="list-none flex sm:flex-row sm:flex-wrap flex-col justify-start sm:justify-evenly items-start bg-blue-gradient sidebar p-2 mt-2 rounded-xl" onMouseLeave={()=> setShow(false)}>
          {menuData && (menuData.map((link , index) => {
              return(
                <li key={link.id} className={`sm:p-2 ${index === menuData.length -1 ? 'pb-0' : 'pb-[2px]'}`}>
                  <a href={link.link} className="font-poppins sm:font-normal text-[14px] text-gray cursor-pointer hover:text-[#1a4f94]">{link.name}</a>
                </li>
              )
            }))}
          </ul>

        </div>
      )
    }
  }

  return (
      <nav className="w-full flex py-2 sm:justify-start justify-between items-center navbar relative">
        <img src={logo}  alt="Boheringer ingelhiem" className="w-[124px] h-[50px] mr-10 cursor-pointer"/>
        <div className=" flex justify-start items-center">
            <ul className="list-none sm:flex hidden justify-start items-center flex-1">
            {navLink.map ((nav,index) => (
                  <li key={nav.id} className={` ${index === navLink.length -1 ? 'md:text-primary text-white mr-0' : 'text-white mr-4'}`} >
                    <button type="button" className={`${styles.flexCenter} font-poppins font-normal cursor-pointer md:text-[14px] text-[12px] hover:underline `}  onClick={() => handleLinks(nav.links)} >
                    <span>{nav.title}</span>
                    </button>
                  </li>
              ))}
            </ul>
        </div>


        <div className="sm:hidden flex justify-end items-center " >
        <img 
          src={toggle ? close : menu} 
          alt="menu"
          className="w-[30px] h-[30px] object-content cursor-pointer"
          onClick={ () => handleHide()}
        />
        <div className={`${toggle ? 'flex' : 'hidden'} p-3 absolute top-[40px] -left-8 mx-4 my-2 w-auto`} >
                <ul className="list-none flex flex-col justify-start items-start flex-1 bg-blue-gradient sidebar p-5 rounded-xl" >
                  {navLink.map ((nav,index) => (
                    <li key={nav.id} className={`${index === navLink.length -1 ? 'mb-0' : 'mb-3'}`} >
                      <button type="button" className="font-poppins font-normal cursor-pointer hover:text-[#94baec] text-[14px] text-gray"  onClick={()=> handleLinks(nav.links)}>
                        <span>{nav.title}</span>
                      </button>
                    </li>
                  ))}
                </ul> 
              </div>
          </div>  
          <ShowItems />
      </nav>
    )
}


export default Navbar