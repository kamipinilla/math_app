import { useCallback, useState } from 'react'
import { View } from 'react-native'
import { game } from '../../config'
import { Scenario } from '../../logic/scenario'
import { NumPad } from '../../widgets/NumPad'
import { ScenarioC } from './Scenario'

export function Home() {
  const [scenario, setScenario] = useState<Scenario>(() => game.getScenario())
  const answer = scenario.getAnswer().toString()

  const [input, setInput] = useState<string | null>(null)
  const [failVisible, setFailVisible] = useState<boolean>(false)

  const handleCorrectAnswer = useCallback(() => {
    let newScenario = game.getScenario()
    while (newScenario.equals(scenario)) {
      newScenario = game.getScenario()
    }

    setScenario(newScenario)
    setInput(null)
  }, [scenario])

  const handleCorrectInput = useCallback(() => {
    if (failVisible) {
      setFailVisible(false)
    }
  }, [failVisible])

  const handleWrongInput = useCallback(() => {
    if (!failVisible) {
      setFailVisible(true)
    }
  }, [failVisible])

  const onCharPress = useCallback((char: string) => {
    let candidate = input === null ? char : input + char
    const answerSubstr = answer.substring(0, candidate.length)
    if (candidate === answerSubstr) {
      handleCorrectInput()
      if (candidate === answer) {
        handleCorrectAnswer()
      } else {
        setInput(candidate)
      }
    } else {
      handleWrongInput()
    }
  }, [input, answer, handleCorrectAnswer, handleWrongInput, handleCorrectInput])

  const scenarioPerc = 60
  return (
    <View style={{height: '100%'}}>
      <View style={{flex: scenarioPerc}}>
        <ScenarioC scenario={scenario} input={input} failVisible={failVisible} />
      </View>
      <View style={{flex: 100 - scenarioPerc}}>
        <NumPad onCharPress={onCharPress} />
      </View>
    </View>
  )
}