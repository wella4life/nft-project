import './App.css'
import Header from './components/Header'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Punklist from './components/Punklist'
import Main from './components/Main'

function App() {
  const [punkListData, setPunkListData] = useState([])
  const [selectedPunk, setSelectedPunk] = useState(0)

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0xA621E0b815c79deEe3900D663E03d1192f7ede89&order_direction=asc')
      console.log(openseaData.data.assets)
      setPunkListData(openseaData.data.assets)
    }

    return getMyNfts()
  }, [])

  return (
    <div className='app'>
      <Header />
      {punkListData.length > 0 && (
        <>
          <Main punkListData={punkListData} selectedPunk={selectedPunk} />
          <Punklist punkListData={punkListData}
            setSelectedPunk={setSelectedPunk} />
          )
        </>
      )}
    </div>
  )
}

export default App
