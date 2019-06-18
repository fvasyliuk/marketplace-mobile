import { NavigationActions, StackActions} from 'react-navigation';
import screen from '../navigation/screens';

class NavigationServices {
    constructor() {
        this.navigation = null;
    }

    init(ref) {
        if (this.navigation) return;

        return this.navigation = ref;
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

    navigateToProfile() {
        this.navigate({routeName: screen.Profile});
    }

    navigateToApp() {
        this.navigate({routeName: screen.MainApp});
    }
}

export default new NavigationServices();