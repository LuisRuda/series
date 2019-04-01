import React from 'react'
import { ScrollView, Text, StyleSheet, Image } from 'react-native'

import Line from '../components/Line'
import LongText from '../components/LongText'

class SerieDetailPage extends React.Component {
    render() {
        return (
            <ScrollView>
                <Image 
                    style={styles.image}
                    source={{
                        uri: this.props.navigation.state.params.serie.img
                    }}
                />
                <Line label="Título" content={this.props.navigation.state.params.serie.title}/>
                <Line label="Gênerp" content={this.props.navigation.state.params.serie.gender}/>
                <Line label="Nota" content={this.props.navigation.state.params.serie.rate}/>
                <LongText label="Descrição" content={this.props.navigation.state.params.serie.description}/>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        aspectRatio: 1
    }
})

export default SerieDetailPage