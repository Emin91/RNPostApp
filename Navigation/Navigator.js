import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createStackNavigator } from 'react-navigation-stack'

import HomeScreen from '../Screens/HomeScreen'
import DetailsScreen from '../Screens/DetailsScreen'
import Json from '../Screens/Json'
import ImageCard from '../Screens/ImageCard'
import RandomColors from '../Screens/RandomColors'
import ColorValue from '../Screens/ColorValue'
import Comp1 from '../Screens/Comp1'
import TextInputExample from '../Screens/TextInputExample'
import ViewTypes from '../Screens/ViewTypes'
import MoveView from '../Screens/MoveView'

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
    S7: { screen: Comp1 },
    S8: { screen: TextInputExample },
    S9: { screen: ViewTypes },
    S10: { screen: MoveView },
},
    {
        initialRouteName: 'S10'
    })
export default createAppContainer(AppContainer)