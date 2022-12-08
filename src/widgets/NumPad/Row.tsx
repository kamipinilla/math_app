import { FC } from 'react'
import { View } from 'react-native'
import { Button } from '../Button'

export const Row: FC<{
  digits: number[],
  onCharPress: (char: string) => void,

}> = props => {
  const { digits, onCharPress } = props
  const numberComps = digits.map(digit => (
    <View key={digit} style={{flex: 1}}>
      <Button key={digit} onPress={() => onCharPress(digit.toString())}>{digit}</Button>
    </View>
  ))
  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      {numberComps}
    </View>
  )
}