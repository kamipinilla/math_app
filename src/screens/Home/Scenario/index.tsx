import { FC } from 'react'
import { View } from 'react-native'
import { Scenario as ScenarioT } from '../../../logic/scenario'
import { Answer } from './Answer'
import { FailView } from './FailView'
import { Question } from './Question'

export const ScenarioC: FC<{
  scenario: ScenarioT
  input: string | null
  failVisible: boolean
}> = props => {
  const { scenario, input, failVisible } = props
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Answer answer={input} />
      </View>
      <Question
        left={scenario.getLeft()}
        right={scenario.getRight()}
        operand={scenario.getOperand()} />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {failVisible && <FailView />}
      </View>
    </View>
  )
}