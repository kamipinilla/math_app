import { FC } from 'react'
import { Text } from 'react-native'

export const Number: FC<{
  number: number,
}> = props => {
  const { number } = props

  return (
    <Text style={{fontSize: 44}}>
      {number}
    </Text>
  )
}