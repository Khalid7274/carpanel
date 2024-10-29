
import './App.css'
import Car from './components/CarShow';
import './components/styles/Header.css';


function App() {


  return (
    <>
      <div className='cp-header'>
      <h1 >Welcome to the Car Panel</h1>
      <h2>Here, you can seamlessly manage your car collection. Add new cars, update existing ones, or delete those you no longer need. Whether it's a sleek city cruiser, a rugged off-roader, or a family-friendly SUV, you have the power to curate your fleet.</h2>
      </div>
      <Car />
    </>
  )
}

export default App
