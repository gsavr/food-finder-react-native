import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { ResultsShowScreen } from "./src/screens/resultsShowScreen";
import { SearchScreen } from "./src/screens/searchScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultsShow: ResultsShowScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Foodie Finder",
      headerBackTitle: "Back",
    },
  }
);

export default createAppContainer(navigator);
