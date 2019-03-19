import { createAppContainer, createStackNavigator } from 'react-navigation'

import LoginScreen from './src/pages/LoginScreen'

const AppNavigator = createStackNavigator({
    'Login': {
        screen: LoginScreen
    }
})

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer