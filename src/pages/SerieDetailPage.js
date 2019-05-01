import React from 'react'
import { ScrollView, Text, StyleSheet, Image, Button, View } from 'react-native'

import { connect } from 'react-redux'
import { deleteSerie } from '../actions'

import Line from '../components/Line'
import LongText from '../components/LongText'

class SerieDetailPage extends React.Component {
    render() {
        const { navigation } = this.props
        const { serie } = navigation.state.params
        return (
            <ScrollView>
                {
                    serie.img
                        ? <Image
                            style={styles.image}
                            source={{
                                uri: this.props.navigation.state.params.serie.img
                            }}
                        />
                        : null
                }
                <Line label="Título" content={this.props.navigation.state.params.serie.title} />
                <Line label="Gênerp" content={this.props.navigation.state.params.serie.gender} />
                <Line label="Nota" content={this.props.navigation.state.params.serie.rate} />
                <LongText label="Descrição" content={this.props.navigation.state.params.serie.description} />

                <View style={styles.button}>
                    <Button
                        title="Editar"
                        onPress={() => { navigation.navigate('SerieForm', { serieToEdit: serie }) }} />
                </View>
                <View style={styles.button}>
                    <Button
                        color='#ff0004ff'
                        title="Deletar"
                        onPress={ async () => {
                            const hasDeleted = await this.props.deleteSerie(serie)
                            if (hasDeleted) {
                                navigation.goBack()
                            }
                        }} />
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        aspectRatio: 1
    },
    button: {
        margin: 10
    }
})

export default connect(null, { deleteSerie })(SerieDetailPage)