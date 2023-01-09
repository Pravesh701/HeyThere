import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

//Custom Imports
import styles from './styles'
import constants from '../../utils/constants'
import routeName from '../../navigation/routeName'

type Props = {
    navigation: any;
    route: any;
}

const Home = (props: Props) => {

    const onPressChat = () => {
        props.navigation.navigate(routeName.CHAT)
    }
    const onPressMap = () => {
        props.navigation.navigate(routeName.MAP)
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPressChat} activeOpacity={0.8} style={[styles.buttonContainer, { marginTop: 100 }]}>
                <Text style={styles.buttonText}>{constants.chat_screen}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressMap} activeOpacity={0.8} style={[styles.buttonContainer, { marginTop: 20 }]}>
                <Text style={styles.buttonText}>{constants.map_screen}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home;