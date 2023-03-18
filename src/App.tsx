import { useState } from 'react'
import ColorPanel from './components/ColorPanel'
import { ButtonPanel } from './styles'

const App = () => {
  //const [color, setColor] = useState(0)
  const [red, setRed] = useState(255)
  const [green, setGreen] = useState(255)
  const [blue, setBlue] = useState(255)
  const [alpha, setAlpha] = useState(1)
  return (
    <> 
      <ColorPanel red={red} green={green} blue={blue} alpha={0.1} title={''}></ColorPanel>
      <ButtonPanel
        
        data-cy="button-red" min={0} max={255}
        onChange={(event: { target: { value: any } }) =>
        setRed(Number(event.target.value))} />
              
    </>
    )
}

export default App
