import react, { useState } from 'react'
import { Configuration , OpenAIApi } from 'openai'
import './App.css';
import OptionSelection from './components/OptionSelection';
import {arrayItems} from './AIOptions'
import Translation from './components/Translate.jsx'

function App() {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
  })
  const openai = new OpenAIApi(configuration);
  console.log(process.env.OPENAI_API_KEY)

  const [option, setOption ] =useState({})
  const [input, setInput] = useState({}) 
  const [results, setResults] = useState({}) 
  const selectOption =(option) =>{
    setOption(option)
  }
  const doStuff = async ()=>{
    let dataobject = { ...option, prompt: input }
    const response = await openai.createCompletion(dataobject)
    setResults(response.data.choices[0].text)
  }

  return (
    <div className="App">
      
      {
        Object.values(option).length === 0 ? (
          <OptionSelection arrayItems={arrayItems} selectOption={selectOption} />
        ) : (
            <Translation doStuff={doStuff} setInput={setInput} results={results}/>
        )
      }
      </div>
  );
}

export default App;
