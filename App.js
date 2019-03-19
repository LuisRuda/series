import { createAppContainer, createStackNavigator } from 'react-navigation'

import LoginScreen from './src/pages/LoginScreen'

const AppNavigator = createStackNavigator({
    'Login': {
        screen: LoginScreen,
        navigationOptions: {
            title: 'Bem vindo!'
        }
    }
}, {
    defaultNavigationOptions: {
        title: 'Séries!',
        headerTintColor: '#fff',
        headerStyle: {
            backgroundColor: '#6ca2f7',
            borderBottomWidth: 1,
            borderBottomColor: '#c5c5c5'
        },
        headerTitleStyle: {
            color: '#fff',
            fontSize: 30,
            flexGrow: 1,
            textAlign: 'center'
        }
    }
})

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer