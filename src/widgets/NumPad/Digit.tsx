import { FC } from 'react'
import { Pressable, Text } from 'react-native'

export const Digit: FC<{
  digit: number
  onCharPress: (char: string) => void
}> = props => {
  const { digit, onCharPress } = props
  return (
    <Pressable
      onPress={() => onCharPress(digit.toString())}
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 26, fontWeight: '500'}}>{digit}</Text>
    </Pressable>
  )
}