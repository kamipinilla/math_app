import Svg, { Circle } from 'react-native-svg'

export const FailView = () => {
  return (
    <Svg height="100%" width="100%" viewBox="0 0 100 100" >
      <Circle cx="50" cy="50" r="8" fill="lightgray" />
    </Svg>
  )
}