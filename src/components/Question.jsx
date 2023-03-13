import styles from "../styles"

const Question = () => (
    <div className="w-full h-auto md:flex hidden flex-col justify-center items-center  my-10">
      <h1 className={`${styles.headingDark} text-center mb-5`}>Are you a Healthcare Professional?</h1>
      <p className={`${styles.paragraphDark} text-center mb-5 w-[50%]`}>If you are an Healthcare Professional and need more information please visit our dedicated website.</p>
      <button type="button" className="btn1 p-2">Healthcare Professional Area</button>
    </div>
  )


export default Question