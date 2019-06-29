import { createStackNavigator } from 'react-navigation';
import BrowseScreen from '../screens/Browse/BrowseScreenContainer';
import ProductScreen from '../screens/Product/ProductScreenContainer';
import screens from './screens';

const routes = {
    [screens.Browse]: BrowseScreen,   
    [screens.Product]: ProductScreen,
}

export default createStackNavigator(routes, {
});

