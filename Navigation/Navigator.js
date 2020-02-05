import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createStackNavigator } from 'react-navigation-stack'

import HomeScreen from '../Screens/HomeScreen'
import DetailsScreen from '../Screens/DetailsScreen'
import Json from '../Screens/Json'
import ImageCard from '../Screens/ImageCard'
import RandomColors from '../Screens/RandomColors'
import ColorValue from '../Screens/ColorValue'

const AppContainer = createStackNavigator({
    S1: {
        screen: HomeScreen,
        navigationOptions: {
            title: 'Home'
        }
    },
    S2: { screen: DetailsScreen },
    S3: { screen: Json },
    S4: { screen: ImageCard },
    S5: { screen: RandomColors },
    S6: { screen: ColorValue },
},
    {
        initialRouteName: 'S6'
    })
export default createAppContainer(AppContainer)