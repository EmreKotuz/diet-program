import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import BirinciHafta from '../gunler/birinciGun';

import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';

const Konular = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View style={styles.tumu}>
                <ScrollView styles={styles.options}>
                    <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('BirinciHafta')}>
                        <Text style={styles.coolTextt}>0 - 1. Gün</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionButton2} onPress={() => navigation.navigate("IkinciHafta")}>
                        <Text style={styles.coolTextt}>2. Gün</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionButton3} onPress={() => navigation.navigate("UcuncuHafta")}>
                        <Text style={styles.coolTextt}>3. Gün</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionButton4} onPress={() => navigation.navigate("DorduncuHafta")}>
                        <Text style={styles.coolTextt}>4. Gün</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionButton5} onPress={() => navigation.navigate("BesinciGun")}>
                        <Text style={styles.coolTextt}>5. Gün</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionButton6} onPress={() => navigation.navigate("AltinciGun")}>
                        <Text style={styles.coolTextt}>6. Gün</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionButton7} onPress={() => navigation.navigate("YedinciGun")}>
                        <Text style={styles.coolTextt}>7. Gün</Text>
                    </TouchableOpacity>

                </ScrollView>

            </View>
        </View >
    );
};

export default Konular;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        flex: 1,
        backgroundColor: '#a9d6e5',
        textAlign: 'center',
        justifyContent: 'center',
    },
    options: {
        marginVertical: 16,
        flex: 1,
    },
    bottom: {
        marginBottom: 22,
        paddingVertical: 20,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    button: {
        width: '30%',
        backgroundColor: "#0d3b66",
        padding: 20,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 30,
        paddingHorizontal: 20,
    },
    buttonText: {
        color: "#fff",
        fontSize: 17,
        fontWeight: '600',
    },
    coolText: {
        fontSize: 28,
    },
    optionButton: {
        paddingVertical: 23,
        marginVertical: 6,
        backgroundColor: '#89c2d9',
        paddingHorizontal: 12,
        borderRadius: 13,
    },
    optionButton2: {
        paddingVertical: 23,
        marginVertical: 6,
        backgroundColor: '#61a5c2',
        paddingHorizontal: 12,
        borderRadius: 13,
    },
    optionButton3: {
        paddingVertical: 23,
        marginVertical: 6,
        backgroundColor: '#168aad',
        paddingHorizontal: 12,
        borderRadius: 13,
    },
    optionButton4: {
        paddingVertical: 23,
        marginVertical: 6,
        backgroundColor: '#1a759f',
        paddingHorizontal: 12,
        borderRadius: 13,
    },
    optionButton5: {
        paddingVertical: 23,
        marginVertical: 6,
        backgroundColor: '#1e6091',
        paddingHorizontal: 12,
        borderRadius: 13,
    },
    optionButton6: {
        paddingVertical: 23,
        marginVertical: 6,
        backgroundColor: '#184e77',
        paddingHorizontal: 12,
        borderRadius: 13,
    },
    optionButton7: {
        paddingVertical: 23,
        marginVertical: 6,
        backgroundColor: '#003049',
        paddingHorizontal: 12,
        borderRadius: 13,
    },
    coolTextt: {
        fontSize: 24,
        fontWeight: '500',
        color: 'white',
        textAlign: 'center',
        justifyContent: 'center',
    },

})
