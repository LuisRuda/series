import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native'

const AddSerieCard = ({ serie, isFirstColumn, onPress }) => (
    <TouchableOpacity 
        onPress={onPress}
        style={[
        styles.container,
        isFirstColumn ? styles.firstColumn : styles.lastColumn
    ]}>
        <View style={styles.card}>
            <Image
                source={require('../../assets/add.png')}
                style={styles.image}
            />
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    container: {
        width: '50%',
        padding: 5,
        height: Dimensions.get('window').width / 2
    },
    card: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    image: {
        width: '100%',
        height: '100%'
    },
    firstColumn: {
        paddingLeft: 10
    },
    lastColumn: {
        paddingRight: 10
    }
})

export default AddSerieCard