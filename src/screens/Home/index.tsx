import { useCallback, useState } from 'react'
import { View } from 'react-native'
import { game } from '../../config'
import { Scenario } from '../../logic/scenario'
import { NumPad } from '../../widgets/NumPad'
import { ScenarioC } from './Scenario'

export function Home() {
  const [scenario, setScenario] = useState<Scenario>(game.getScenario())
  const answer = scenario.getAnswer().toString()

  const [input, setInput] = useState<string | null>(null)

  const refreshScenario = useCallback(() => {
    setScenario(game.getScenario())
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

  const scenarioPerc = 60
  return (
    <View style={{height: '100%'}}>
      <View style={{flex: scenarioPerc}}>
        <ScenarioC scenario={scenario} input={input} />
      </View>
      <View style={{flex: 100 - scenarioPerc}}>
        <NumPad onCharPress={onCharPress} />
      </View>
    </View>
  )
}