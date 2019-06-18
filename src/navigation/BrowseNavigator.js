import { createStackNavigator } from 'react-navigation';
import BrowseScreen from '../screens/Browse';
import screens from './screens';

const routes = {
    [screens.Browse]: BrowseScreen,    
}

export default createStackNavigator(routes, {});

