import { useCallback, useState } from 'react'
import { Text, View } from 'react-native'
import { Logic } from '../../logic/logic'
import { Diff } from '../../logic/diff'
import { Mult } from '../../logic/mult'
import { Scenario } from '../../logic/scenario'
import { Sum } from '../../logic/sum'
import { NumPad } from '../../widgets/NumPad'
import { Question } from './Question'
import { Answer } from './Answer'

const logic = new Logic([
  new Sum(),
  new Diff(),
  new Mult(),
])

export function Home() {
  const [scenario, setScenario] = useState<Scenario>(logic.getScenario())
  const answer = scenario.getAnswer().toString()

  const [input, setInput] = useState<string | null>(null)

  const refreshScenario = useCallback(() => {
    setScenario(logic.getScenario())
    setInput(null)
  }, [])

  const onCharPress = useCallback((char: string) => {
    let candidate = input === null ? char : input + char
    const answerSubstr = answer.substring(0, candidate.length)
    if (candidate === answerSubstr) {
      if (candidate === answer) {
        refreshScenario()
      } else {
        setInput(candidate)
      }
    }
  }, [input, answer, refreshScenario])

  return (
    <View style={{height: '100%'}}>
      <View style={{flex: 1}}>
        <Question
          left={scenario.getLeft()}
          right={scenario.getRight()}
          operand={scenario.getOperand()} />
      </View>
      <View style={{flex: 1}}>
        <Answer answer={input} />
      </View>
      <View style={{flex: 1}}>
        <NumPad onCharPress={onCharPress} />
      </View>
    </View>
  )
}