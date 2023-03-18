import { View, ColorTitle, ColorContainer, ButtonColor } from './styles'

type Props = {
  title: string
  red: number
  green: number
  blue: number
  alpha:number
}

const ColorPanel = ({title, red, green, blue, alpha } : Props) => {
  return (
    <View>
        <ColorTitle data-cy='color-title'>{title}</ColorTitle>  
    
        <ColorContainer> 
            <h4>{"<ColorPanel"}</h4>
            <p>
              <h4>red={"{red}"}</h4>
              <h4>green={"{green}"}</h4>
              <h4>blue={"{blue}"}</h4>
              <h4>alpha={"{alpha} />"}</h4>
            </p>  
        </ColorContainer>
      
        <ButtonColor>
          <p>
          Red<input type="range" min="0" max="255" />
          Green<input type="range" min="0" max="255" />
          Blue<input type="range" min="0" max="255" />
          Alpha<input type="range" min="0" max="255"/>
          </p>
        </ButtonColor>
    </View>  
  )
}

export default ColorPanel