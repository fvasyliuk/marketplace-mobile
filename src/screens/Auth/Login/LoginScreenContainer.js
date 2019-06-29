import { compose, withHandlers, hoistStatics, withState, withProps, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { authOperations } from '../../../modules/auth';
import { NavigationServices } from '../../../services';
import screen from '../../../navigation/screens';
import LoginScreenView from './LoginScreenView';
import * as Yup from 'yup';


function mapStateToProps(state) {
    return {
        isLoading: state.auth.login.isLoading,
    }
};

const mapDispatchToProps = {
    login: authOperations.login,
};

const enhancer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withProps((props) => ({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object().shape({
            email: Yup.string()              
              .required('Required')
              .email(),
            password: Yup.string()
              .min(8, 'Too Short!')                
              .required('Required'),
          }),
    })),
    withState('isFocus', 'setIsFocus', {}),
    withHandlers({
        onSubmit: (props) => async (value) => {
            try {
                await props.login(value);
                props.navigation.navigate({routeName: screen.MainApp});
            } catch (err) {
                console.log(err);
            }
        },
        handleFocus: (props) => (value) => {            
            props.setIsFocus({[value]: true});
        }
    }),    
);

export default hoistStatics(enhancer)(LoginScreenView);

