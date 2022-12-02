import { useCallback, useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { Logic } from '../../logic/logic'
import { Diff } from '../../logic/diff'
import { Mult } from '../../logic/mult'
import { Scenario } from '../../logic/scenario'
import { Sum } from '../../logic/sum'
import { NumPad } from '../../widgets/NumPad'

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

  const left = scenario.getLeft()
  const right = scenario.getRight()
  const operand = scenario.getOperand().getString()

  return (
    <View>
      <Text>{`${left} ${operand} ${right}`}</Text>
      <Text>{input !== null ? input : ''}</Text>
      <NumPad onCharPress={onCharPress} />
    </View>
  )
}

