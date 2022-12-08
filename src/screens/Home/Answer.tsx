import { FC } from 'react'
import { Text, View } from 'react-native'

export const Answer: FC<{
  answer: string | null
}> = props => {
  const {answer} = props

  return (
    <View>
      <Text>{answer ?? '<empty>'}</Text>
    </View>
  )
}