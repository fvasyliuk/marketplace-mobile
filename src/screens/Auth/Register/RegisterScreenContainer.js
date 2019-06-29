import { compose, withHandlers, hoistStatics, withState, withProps, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { authOperations } from '../../../modules/auth';
import { NavigationServices } from '../../../services';
import screen from '../../..//navigation/screens';
import RegisterScreenView from './RegisterScreenView';
import * as Yup from 'yup';


function mapStateToProps(state) {
    return {
        isLoading: state.auth.login.isLoading,
    }
};

const mapDispatchToProps = {
    register: authOperations.register,
};

const enhancer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withProps((props) => ({
        initialValues: {
            email: '',
            password: '',
            repeatPassword: '',
        },
        validationSchema: Yup.object().shape({
            email: Yup.string()              
              .required('Required')
              .email(),
            password: Yup.string()
              .min(8, 'Too Short!')                
              .required('Required'),
            repeatPassword: Yup.string() 
                .required('Required')
                .oneOf([Yup.ref('password'), null], 'Passwords must match'),
          }),
    })),
    withState('isFocus', 'setIsFocus', {}),
    withHandlers({
        onSubmit: (props) => async (value) => {
            const body = {
                email: value.email,
                password: value.password,
            }
            try {
                await props.register(body);
                props.navigation.navigate({routeName: screen.MainApp})
            } catch (err) {
                console.log(err);
            }
        },
        handleFocus: (props) => (value) => {            
            props.setIsFocus({[value]: true});
        }
    }),    
);

export default hoistStatics(enhancer)(RegisterScreenView);

