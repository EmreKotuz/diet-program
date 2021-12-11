import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

const Result = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View>
                <Text>Result</Text>
            </View>
            <View style={styles.banner}>
                <Image
                    style={styles.rsm}
                    source={require('../resimler/arpln.png')}
                    resizeMode="contain"
                />
            </View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <Text>
                        Home
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Result

const styles = StyleSheet.create({
    rsm: {
        height: 300,
        width: 300,
    },
    banner: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        paddingTop: 40,
        paddingHorizontal: 20,
    },
})
