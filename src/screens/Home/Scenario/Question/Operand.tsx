import { FC } from 'react'
import { Text } from 'react-native'
import { Operand } from '../../../../logic/operand'

export const OperandC: FC<{
  operand: Operand,
}> = props => {
  const { operand } = props

  return (
    <Text style={{fontSize: 40}}>
      {operand.getString()}
    </Text>
  )
}