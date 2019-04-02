import { createAppContainer, createStackNavigator } from 'react-navigation'

import LoginPage from './pages/LoginPage'
import SeriesPage from './pages/SeriesPage';
import SerieDetailPage from './pages/SerieDetailPage'
import SerieFormPage from './pages/SerieFormPage'

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
    'SerieDetail': {
        screen: SerieDetailPage,
        navigationOptions: ({ navigation }) => {
            const { serie } = navigation.state.params
            return {
                title: serie.title
            }
        }
    },
    'SerieForm': {
        screen: SerieFormPage,
        navigationOptions: {
            title: 'Nova série'
        }
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