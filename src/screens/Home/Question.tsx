import { FC } from 'react'
import { Text, View } from 'react-native'
import { Operand } from '../../logic/operand'

export const Question: FC<{
  left: number
  right: number
  operand: Operand
}> = props => {
  const {left, right, operand} = props

  return (
    <View>
      <Text>{`${left} ${operand.getString()} ${right}`}</Text>
    </View>
  )
}