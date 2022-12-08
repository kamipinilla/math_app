import { FC } from 'react'
import { View } from 'react-native'
import { Row } from './Row'

export const NumPad: FC<{
  onCharPress: (char: string) => void,
}> = props => {
  const { onCharPress } = props

  const rowStruct: number[][] = [
    [7, 8, 9],
    [4, 5, 6],
    [1, 2, 3],
    [0],
  ]
  const rowComps = rowStruct.map(row => (
    <Row key={row.toString()} digits={row} onCharPress={onCharPress} />
  ))
  return (
    <View style={{flex: 1}}>
      {rowComps}
    </View>
  )
}

