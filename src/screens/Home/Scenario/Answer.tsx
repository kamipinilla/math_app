import { FC } from 'react'
import { Text, View } from 'react-native'

export const Answer: FC<{
  answer: string | null
}> = props => {
  const {answer} = props

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 32}}>{answer ?? ''}</Text>
    </View>
  )
}