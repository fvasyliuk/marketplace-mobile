import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { authOperations } from '../../../modules/auth';
import { NavigationServices } from '../../../services';
import RegisterScreenView from './RegisterScreenView';


function mapStateToProps(state) {
    return {
        isLoading: state.auth.login.isLoading,
    }
};

const mapDispatchToProps = {
    login: authOperations.login,
};

const enhancer = compose(
    //connect(mapStateToProps, mapDispatchToProps),
    withHandlers({
        onLogin: (props) => async () => {
            try {
                //login({email:"test11@gmail.com", password: "12345678"});
                NavigationServices.navigateToApp();
            } catch (err) {
                console.log(err);
            }
        }
    }),
);

export default enhancer(RegisterScreenView);

