import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.banner}>
                <Text style={{ fontSize: 24, color: '#fff', fontWeight: 'bold' }}>7 Günde Diyet </Text>
                <Image
                    style={styles.rsm}
                    source={require('../resimler/arpln.png')}
                    resizeMode="contain"
                />
            </View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Konular")} >
                <Text style={styles.buttonYazi}>
                    Günlük Diyet
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonn} onPress={() => navigation.navigate("Endeks")} >
                <Text style={styles.buttonYazii}>
                    Vücut Kitle İndeksi Hesapla
                </Text>
            </TouchableOpacity>
        </View >
    );
};

export default Home

const styles = StyleSheet.create({
    rsm: {
        height: 300,
        width: 300,
    },
    banner: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    container: {
        paddingTop: 40,
        paddingHorizontal: 20,
        height: '100%',
        backgroundColor: '#06d6a0',
    },
    button: {
        width: '100%',
        backgroundColor: "white",
        padding: 20,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 30,
    },
    buttonn: {
        width: '100%',
        backgroundColor: "#469d89",
        padding: 20,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 30,
    },
    buttonYazi: {
        color: "black",
        fontSize: 30,
        fontWeight: '600',
    },
    buttonYazii: {
        color: "white",
        fontSize: 21,
        fontWeight: '600',
    },
})
