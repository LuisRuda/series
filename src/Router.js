import { createAppContainer, createStackNavigator } from 'react-navigation'

import LoginPage from './pages/LoginPage'
import SeriesPage from './pages/SeriesPage';

const AppNavigator = createStackNavigator({
    'Login': {
        screen: LoginPage,
        navigationOptions: {
            title: 'Bem vindo!'
        }
    },
    'Main': {
        screen: SeriesPage
    },
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