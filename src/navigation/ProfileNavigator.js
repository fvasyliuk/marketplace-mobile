import { createStackNavigator } from 'react-navigation';
import ProfileScreen from '../screens/Profile';
import screens from './screens';

const routes = {
    [screens.Profile]: ProfileScreen,    
}

export default createStackNavigator(routes, {});

