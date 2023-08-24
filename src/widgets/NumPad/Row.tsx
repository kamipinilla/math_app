import { FC } from 'react'
import { View } from 'react-native'
import { Digit } from './Digit'

export const Row: FC<{
  digits: number[],
  onCharPress: (char: string) => void,

}> = ({ digits, onCharPress }) => {
  const numberComps = digits.map(digit => (
    <View key={digit} style={{flex: 1}}>
      <Digit digit={digit} onCharPress={onCharPress} />
    </View>
  ))
  return (
    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
      {numberComps}
    </View>
  )
}