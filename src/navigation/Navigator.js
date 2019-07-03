import { createStackNavigator } from 'react-navigation';
import MainNavigator from './MainNavigator';
import NewItemModalNavigator from './NewItemModalNavigator';
import FiltersModalNavigator from './FiltersModalNavigator.1';
import screens from './screens';


const routes = {
    [screens.Main]: MainNavigator,
    [screens.NewItemModal]: NewItemModalNavigator,
    [screens.FiltersModal]: FiltersModalNavigator,
}

export default createStackNavigator(routes, {
    headerMode: 'none',
    mode: 'modal',
});

