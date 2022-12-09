import { FC } from 'react'
import { View } from 'react-native'
import { Operand } from '../../../../logic/operand'
import { Number } from './Number'
import { OperandC } from './Operand'

export const Question: FC<{
  left: number
  right: number
  operand: Operand
}> = props => {
  const {left, right, operand} = props

  return (
    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
      <View style={{flex: 1, flexDirection: 'row-reverse'}}>
        <Number number={left} />
      </View>
      <View style={{marginHorizontal: 20}}>
        <OperandC operand={operand} />
      </View>
      <View style={{flex: 1}}>
        <Number number={right} />
      </View>
    </View>
  )
}