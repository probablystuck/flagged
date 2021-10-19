import { useState } from "react"
import "./App.css"
import InputBox from "./InputBox"
import OutputBox from "./OutputBox"

const App = () => {
  const [flags, setFlags] = useState<{ input: string; output: string }[]>([])

  function handleFlagInput(input: string, output: string) {
    setFlags([...flags, { input: input, output: output }])
  }

  return (
    <>
      <InputBox handleFlagInput={handleFlagInput} />
      <OutputBox flagsTranslated={flags} />
    </>
  )
}

export default App
