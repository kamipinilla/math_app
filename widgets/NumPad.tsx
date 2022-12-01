import { FC } from 'react'
import { Text, View } from 'react-native'
import { Button } from './Button'

interface Props {
  onCharPress: (char: string) => void
}

const digits: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

export const NumPad: FC<Props> = props => {
  const { onCharPress } = props

  const buttons = digits.map(digit => {
    return (
      <Button key={digit} onPress={() => onCharPress(digit.toString())}>{digit}</Button>
    )
  })

  return (
    <View>
      {buttons}
    </View>
  )
}

