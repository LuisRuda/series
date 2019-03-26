import { createAppContainer, createStackNavigator } from 'react-navigation'

import LoginPage from './pages/LoginPage'

const AppNavigator = createStackNavigator({
    'Login': {
        screen: LoginPage,
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