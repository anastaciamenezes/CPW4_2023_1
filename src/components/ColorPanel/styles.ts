import styled from 'styled-components'

export const View = styled.div`
  background-color: white;
  padding: 30px 20px;
`
export const ColorTitle = styled.h1`
  font-family: 'bold';
  color: black;
`
export const ColorContainer = styled.div`
  font-family: 'bold';
  font-size: 30px;
  color: white;
  margin-right: 10px;
  width: 280px;
  background: rgb(178,102,255);
  box-shadow: rgba(0, 0, 0, 0.1);
  padding: 30px;
  text-align: center;
  margin: auto;
  border: 10px;
`
export const ButtonColor = styled.div`
input[type=range] {
    -webkit-appearance: none;
    appearance: none;
    display: inline-block;
    width: 5em;
    height: 0.5em;
    position: center;
    left: 4em;
    border-radius: 5px;
    background-color: #3071a9;
    outline: none;
}

input[type=range]::-webkit-slider-thumb{
    border-radius: 50%;
}
`




