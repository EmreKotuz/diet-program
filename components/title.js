import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Title = () => {
    return (
        <View style={styles.container}>
            <Text styles={styles.titleYazi}>Quizler</Text>
        </View>
    )
}

export default Title

const styles = StyleSheet.create({
    titleYazi: {
        fontSize: 36,
        fontWeight: '600',
        backgroundColor: "black",
    },
    container: {
        paddingVertical: 16,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
