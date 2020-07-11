import { createAppContainer } from "react-navigation";
import SearchScreen from "./src/screens/SearchScreen";
import { createStackNavigator } from "react-navigation-stack";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Business Search",
    },
  }
);

export default createAppContainer(navigator);
