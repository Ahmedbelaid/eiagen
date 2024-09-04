import styles from '../style'
import { log, robot,website, linkedin } from '../assets'
import "../style/hero.css"

const Hero = () => {
  return (
    <section id='home' className={`flex flex-col ${styles.paddingY}`}>
      
  

      {/* First Section: Title and Image */}
      <div className='flex flex-col md:flex-row w-full justify-between items-center'>
        {/* Title Section */}
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
          <div className='flex flex-row items-center py-[6px] px-4  mb-2'>
            <img
              src={log}
              alt='logo'
              className='w-[150px] h-[150px]'
            />
       
          </div>
          <div className='flex flex-row justify-between items-center w-full'>
            <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-black ss:leading-[70.8px] leading-[65px]'>
              The Next <br className='sm:block hidden'/> {" "}
              <span className='text-gradient'>Generative AI</span> {" "}
            </h1>
           
          </div>
          <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-black ss:leading-[100px] leading-[75px] w-full'>
            Is here        
          </h1>
        </div>

        {/* Image Section */}
        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
          <img
            src={robot}
            alt='billing'
            className='w-[100%] h-[100%] relative z-[5]'
          />
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full black__gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"/>
        </div>
      </div>

      {/* Second Section: Text Details (Centered) */}
      <div className={`w-full flex flex-col items-center justify-center text-center xl:px-0 sm:px-16 px-6 mt-10`}>
        <h2 className='font-poppins font-semibold text-[48px] text-black leading-[75px] mb-5'>
          The Navinspire IA Family
        </h2>
        <p className={`${styles.paragraph} max-w-[700px] mb-5`}>
          Welcome to the official Hugging Face organization for Navininspire, and our innovative generative AI models! 
          To access these models, please visit one of the repositories and agree to the mit licence license terms and acceptable use policy.
        </p>

        {/* <h3 className='font-poppins font-semibold text-[36px] text-white leading-[50px] mb-5'>
          Current:
        </h3>
        <p className={`${styles.paragraph} max-w-[700px] mb-5`}>
          <strong>NavinLLM-7B</strong>: A 7 billion-parameter multilingual language model trained on a hybrid architecture (SSM/SSD - Mamba2 & Transformers) with a dataset of 3.2 TB (~800 billion tokens). Available in French and English.
        </p>
        <p className={`${styles.paragraph} max-w-[700px] mb-5`}>
          <strong>NavinLLM-200M, 400M, and 7B</strong>: Multilingual (French and English) models for text-based applications.
        </p>
        <p className={`${styles.paragraph} max-w-[700px] mb-5`}>
          <strong>NavinLLM-2B SSM</strong>: Specialized version focused on French-only language tasks.
        </p> */}

        {/* <h3 className='font-poppins font-semibold text-[36px] text-white leading-[50px] mb-5'>
          Additional Tools:
        </h3>
        <p className={`${styles.paragraph} max-w-[700px] mb-5`}>
          <strong>Navintok Tokenizers</strong>: Custom tokenizers <em>Navintok_32k</em> and <em>Navintok_52k</em> developed using SentencePiece BPE architecture to handle specialized domain characters efficiently.
        </p> */}

        <h3 className='font-poppins font-semibold text-[36px] text-black leading-[50px] mb-5'>
          Applications:
        </h3>
        <p className={`${styles.paragraph} max-w-[700px] mb-5`}>
          <strong>Generative AI for Travel</strong>: Offering personalized recommendations and seamless user interactions.
        </p>
        <p className={`${styles.paragraph} max-w-[700px] mb-5`}>
          <strong>E-commerce and Generative AI</strong>: Creating interactive and personalized shopping experiences while enhancing business operations.
        </p>

        <p className={`${styles.paragraph} max-w-[700px] mb-5`}>
          <strong>Upcoming:</strong> Our NavinLLM models will be available on Hugging Face soon for non-commercial use under the Apache 2.0 license.
        </p>
        <div className="flex flex-row items-center justify-center mt-10 space-x-10">
          <a href="https://www.linkedin.com/company/navinspire-ia" target="_blank" rel="noopener noreferrer" className='flex flex-row items-center text-black'>
            <img src={linkedin} alt='LinkedIn' className='w-[40px] h-[40px] mr-2' />
            <span>Visit our LinkedIn</span>
          </a>
          <a href="https://www.navinspire.com" target="_blank" rel="noopener noreferrer" className='flex flex-row items-center text-black'>
            <img src={website} alt='Website' className='w-[40px] h-[40px] mr-2' />
            <span>Visit our Website</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
