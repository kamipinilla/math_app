import { FC } from 'react'
import { Text } from 'react-native'
import { Operand as OperandT } from '../../../../logic/operand'

export const Operand: FC<{
  operand: OperandT,
}> = props => {
  const { operand } = props

  return (
    <Text style={{fontSize: 48}}>
      {operand.getString()}
    </Text>
  )
}