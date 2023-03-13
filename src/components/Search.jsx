import { useState, useRef } from 'react'
import styles from '../styles'
import { search, close } from "../assets"

const Search = () => { 
  const [data, setData] = useState()
  
  const onInput = (e) => setData(e.target.value);

  const handleSearch = () => {
    console.log(data)
  }
  const onClear = () => {
    setData("");
  };
  return (
    <section className={`${styles.boxWidth} ${styles.flexCenter} md:flex hidden flex-col mt-16 `}>
      <div className="w-[750px] flex justify-between items-center mb-2 z-10">
        <button className="cursor-pointer" onClick={() => handleSearch()}> 
          <img src={search} />
        </button>
        <input value={data} type="text" placeholder="Search" className="cursor-text flex-1 mx-2 font-poppins text-xl p-2 focus:outline-none" onInput={onInput}/>
        <button className="cursor-pointer" onClick={() => onClear ()}> 
          <img src={close} />
        </button>
      </div>
      <div className="w-[750px] bg-primary border-b-[2px] border-b-primary mb-2 "></div>
      <div className="w-[750px] mt-2">
        <ul className={`${styles.flexCenter}`}>
          <li className="btn2 font-poppins text-sm mx-3 "><button className="p-3">Clinical Trials</button></li>
          <li className="btn2 font-poppins text-sm mx-3 "><button className="p-3">Sustainability</button></li>
          <li className="btn2 font-poppins text-sm mx-3 "><button className="p-3">Pets</button></li>
          <li className="btn2 font-poppins text-sm mx-3 "><button className="p-3">Taking Cancer On</button></li>
          <li className="btn2 font-poppins text-sm mx-3 "><button className="p-3">Pipeline</button></li>
        </ul>
      </div>
    </section>
  )}


export default Search