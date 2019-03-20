import React from 'react'
import { View, StyleSheet, TextInput, Button, ActivityIndicator } from 'react-native'

import firebase from 'firebase'

import FormRow from '../components/FormRow'

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            mail: '',
            password: '',
            isLoading: false
        }
    }

    componentDidMount() {
        const config = {
            apiKey: "AIzaSyCGweWdK_SimVw-TPj5K6ZhwIisYw0dtfk",
            authDomain: "series-dec22.firebaseapp.com",
            databaseURL: "https://series-dec22.firebaseio.com",
            projectId: "series-dec22",
            storageBucket: "series-dec22.appspot.com",
            messagingSenderId: "550669891409"
        };
        firebase.initializeApp(config);
    }

    onChangeHandler(field, value) {
        this.setState({
            [field]: value
        })
    }

    tryLogin() {
        this.setState({ isLoading: true })
        const { mail, password } = this.state

        firebase
            .auth()
            .signInWithEmailAndPassword(mail, password)
            .then(user => {
                console.log('Usuário autenticado!', user)
            })
            .catch(error => {
                console.log('Usuário não encontrado', error)
            })
            .then(() => this.setState({ isLoading: false }))
    }

    renderButton() {
        if (this.state.isLoading)
            return <ActivityIndicator />

        return (
            <Button
                title="Entrar"
                onPress={() => this.tryLogin()} />
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <FormRow first>
                    <TextInput
                        style={styles.input}
                        placeholder="user@email.com"
                        value={this.state.mail}
                        onChangeText={value => this.onChangeHandler('mail', value)}
                    />
                </FormRow>
                <FormRow last>
                    <TextInput
                        style={styles.input}
                        placeholder="******"
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={value => this.onChangeHandler('password', value)}
                    />
                </FormRow>

                { this.renderButton() }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        paddingRight: 10
    },
    input: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 5
    }
})