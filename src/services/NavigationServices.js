import { NavigationActions } from 'react-navigation';
import screen from '../navigation/screens';

class NavigationServices {
    constructor() {
        this.navigation = null;
    }

    init(ref) {
        if (this.navigation) return;

        this.navigation = ref;
    }

    navigate(route) {        
        this.navigation.dispatch(NavigationActions.navigate(route));
    }

    navigateToHome() {
        this.navigate({routeName: screen.Home});
    }

    navigateToRegister() {
        this.navigate({routeName: screen.Register});
    }

    navigateToLogin() {
        this.navigate({routeName: screen.Login});
    }

    navigateToProfile() {
        this.navigate({routeName: screen.Profile});
    }
    
    navigateToApp() {
        this.navigate({routeName: screen.MainApp});
    }

    navigateToNewItemModal() {
        this.navigate({routeName: screen.NewItemModal});
    }

    goBack() {
        this.navigation.dispatch(NavigationActions.back());
    }

    navigateToSettings() {
        this.navigate({routeName: screen.Settings});
    }

    navigateToLocation(params) {
        this.navigate({routeName: screen.Location, params: {...params}});
    }

    navigateToProduct(id) {
        this.navigate({
            routeName: screen.Product, 
            params: {
                id,
            },
        });
    }
}

export default new NavigationServices();