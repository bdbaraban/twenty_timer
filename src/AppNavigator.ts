import { createAppContainer, createStackNavigator } from 'react-navigation';
import AlertsScreen from './screens/AlertsScreen';
import ColorsScreen from './screens/ColorsScreen';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';

// Maps links to colors and alerts settings screens
const SettingsNavigator = createStackNavigator(
  {
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        gesturesEnabled: false
      }
    },
    Colors: {
      screen: ColorsScreen,
      navigationOptions: {
        gesturesEnabled: false
      }
    },
    Alerts: {
      screen: AlertsScreen,
      navigationOptions: {
        gesturesEnabled: false
      }
    }
  },
  {
    headerMode: 'none',
    navigationOptions: {
      gesturesEnabled: false
    }
  }
);

// Maps link between home and settings screen
const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Settings: SettingsNavigator
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home',
    mode: 'modal'
  }
);

export default createAppContainer(AppNavigator);
