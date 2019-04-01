import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const SerieDetailPage = props => (
    <View>
        <Text>{props.navigation.state.params.serie.title}</Text>
    </View>
)

const styles = StyleSheet.create({

})

export default SerieDetailPage