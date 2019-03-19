import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'

import FormRow from '../components/FormRow'

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            mail: '',
            password: ''
        }
    }

    onChangeHandler(field, value) {
        this.setState({ 
            [field]: value
         })
    }

    render() {
        return (
            <View>
                <FormRow>
                    <TextInput
                        style={styles.input}
                        placeholder="user@email.com"
                        value={this.state.mail}
                        onChangeText={value => this.onChangeHandler('mail', value)}
                    />
                </FormRow>
                <FormRow>
                    <TextInput
                        style={styles.input}
                        placeholder="******"
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={value => this.onChangeHandler('password', value)}
                    />
                </FormRow>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 5
    }
})