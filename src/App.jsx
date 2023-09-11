import Header from './components/Header'
import './App.css'
import Bottles from './components/Bottles/Bottles'
// import Watch from './Watch'

function App() {


  // const [watches, setWatches] = useState([]);

  // useEffect(() => {
  //   fetch('watches.json')
  //     .then(res => res.json()
  //       .then(data => setWatches(data)));
  // }, []);


  return (
    <div>
     
      <Header></Header>
      <Bottles></Bottles>
     
      {/* {
        watches.map(watch => <Watch key={watch.id} watch={watch}></Watch>)
      } */}
    
    </div>
  )
}

export default App
