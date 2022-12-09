import { useCallback, useState } from 'react'
import { View } from 'react-native'
import { Logic } from '../../logic/logic'
import { Diff } from '../../logic/diff'
import { Mult } from '../../logic/mult'
import { Scenario as ScenarioT } from '../../logic/scenario'
import { Sum } from '../../logic/sum'
import { NumPad } from '../../widgets/NumPad'
import { Scenario } from './Scenario'

const logic = new Logic([
  new Mult(),
  new Sum(),
  new Diff(),
])

export function Home() {
  const [scenario, setScenario] = useState<ScenarioT>(logic.getScenario())
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

  const scenarioPerc = 50
  return (
    <View style={{height: '100%'}}>
      <View style={{flex: scenarioPerc}}>
        <Scenario scenario={scenario} input={input} />
      </View>
      <View style={{flex: 100 - scenarioPerc}}>
        <NumPad onCharPress={onCharPress} />
      </View>
    </View>
  )
}