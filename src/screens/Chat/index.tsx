import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import color from '../../utils/color'

type Props = {}

const Chat = (props: Props) => {
    return (
        <View style={styles.container}>
            <Text>index</Text>
        </View>
    )
}

export default Chat

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: color.yellow_light
    }
})