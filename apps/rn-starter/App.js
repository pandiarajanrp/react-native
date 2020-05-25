import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ListItemScreen from './src/screens/ListItemScreen';
import ComponentScreen from './src/screens/ComponentsScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    List: ListItemScreen,
    Components: ComponentScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Learn React"
    }
  }
);

export default createAppContainer(navigator);
