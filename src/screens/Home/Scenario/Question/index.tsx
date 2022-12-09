import { FC } from 'react'
import { View } from 'react-native'
import { Operand as OperandT } from '../../../../logic/operand'
import { Number } from './Number'
import { Operand } from './Operand'

export const Question: FC<{
  left: number
  right: number
  operand: OperandT
}> = props => {
  const {left, right, operand} = props

  return (
    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
      <Number number={left} />
      <View style={{marginHorizontal: 20}}>
        <Operand operand={operand} />
      </View>
      <Number number={right} />
    </View>
  )
}