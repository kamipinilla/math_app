import { useCallback, useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { NumPad } from '../../widgets/NumPad'

export function Home() {
  const [answer, setAnswer] = useState<string | null>(null)
  const [input, setInput] = useState<string | null>(null)

  const refreshAnswer = useCallback(() => {
    const num = Math.floor(Math.random() * 10000)
    setAnswer(num.toString())
    setInput(null)
  }, [])

  useEffect(() => {
    refreshAnswer()
  }, [refreshAnswer])

  useEffect(() => {
    if (input === answer) {
      refreshAnswer()
    }
  }, [input, answer, refreshAnswer])

  const onCharPress = useCallback((char: string) => {
    if (answer === null || input === answer) {
      return
    }

    let candidate = input === null ? char : input + char
    const answerSubstr = answer.substring(0, candidate.length)
    if (candidate === answerSubstr) {
      setInput(candidate)
    }
  }, [input, answer])

  if (answer === null) {
    return null
  }

  return (
    <View>
      <Text>{answer}</Text>
      <Text>{input !== null ? input : 'empty'}</Text>
      <NumPad onCharPress={onCharPress} />
    </View>
  )
}

