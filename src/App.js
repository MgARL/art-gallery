import './App.css';
import Gallery from './components/Gallery';
import ButtonBar from './components/ButtonBar';
import Title from './components/Title';
import ManualInput from './components/ManualInput';
import { useState, useEffect} from 'react'

function App() {
  
  let [artId, setArtId] = useState(12720)
  let [data,setData] = useState({})

  // handle Gallery Component
  useEffect( async () => {
    if(data.artistDisplayName){
      document.title = data.artistDisplayName
    }else {
      document.title = 'Welcome to ArtWorld!'
    }
    let response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
    let resData = await response.json()
    setData(resData)
    setInputNumber(artId)
  },[artId])

  // Handle ButtonBar Component
  const handleIterate = (e) => {
    setArtId( parseInt(artId) + Number(e.target.value))
  }
  // handle Manual Input Component

  let [inputNumber, setInputNumber] = useState(artId)
  const inputNumberRetriever = (e) => {
    setInputNumber(e.target.value)
  }

  const manualInputHandler = () => {
    setArtId(inputNumber)
  }

  return (
    <div className="App">
      <Title title={data.title} />
      <Gallery imgURL={data.primaryImage} title={data.title} artist={data.artistDisplayName}/>
      <ButtonBar handleIterate={handleIterate} />
      <ManualInput inputNumberRetriever={inputNumberRetriever} manualInputHandler={manualInputHandler} artId={artId}/>
    </div>
  );
}

export default App;
