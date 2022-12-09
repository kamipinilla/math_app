import { FC } from 'react'
import { View } from 'react-native'
import { Scenario as ScenarioT } from '../../../logic/scenario'
import { Answer } from './Answer'
import { Question } from './Question'

export const Scenario: FC<{
  scenario: ScenarioT
  input: string | null
}> = props => {
  const { scenario, input } = props
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Answer answer={input} />
      </View>
      <Question
        left={scenario.getLeft()}
        right={scenario.getRight()}
        operand={scenario.getOperand()} />
      <View style={{flex: 1}} />
    </View>
  )
}