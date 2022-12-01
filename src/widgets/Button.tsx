import { FC } from 'react'
import { Text, TouchableOpacity } from 'react-native'

interface Props {
  text?: string
  onPress?: () => void
  enabled?: boolean
  children?: string | number
}

export const Button: FC<Props> = props => {
  const { onPress, children } = props
  const enabled = props.enabled ?? true
  const title = children !== undefined ? children.toString() : 'Button'
  return (
    <TouchableOpacity onPress={() => { if (enabled && onPress !== undefined) onPress() }} style={{ width: '100%', backgroundColor: enabled ? 'teal' : 'gray', paddingVertical: 10, alignItems: 'center', borderRadius: 10 }}>
      <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>{title}</Text>
    </TouchableOpacity>
  )
}