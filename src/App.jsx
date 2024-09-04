import { 
  Hero, 
} from './components'
import styles from './style'
import "./style/app.css"

const App = () => {

  return (
    <div className=' w-full overflow-hidden'>
      <div className={` ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
   
    </div>
  );
};

export default App;