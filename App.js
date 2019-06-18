import React from 'react';
import { SplashScreen } from 'expo';
import { View, Text } from 'react-native';
import Navigator from './src/navigation/';
import { globalStyles } from './src/styles';
import { Provider, connect } from 'react-redux';
import store from './src/store/createStore';
import { appOperations } from './src/modules/app';


class App extends React.Component {
  constructor(props) {
    super(props);
    props.dispatch(appOperations.init());
  }
  

  render() {
    if (this.props.isLoading) {
      return (
        <View style={globalStyles.fillAll}> 
          <Text> Loading ...</Text>
        </View>
      )
    }
    return (  
      <View style={globalStyles.fillAll}>                 
        <Navigator />               
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
      isLoading: state.app.isLoading,
  }
}

const AppConnected = connect(mapStateToProps)(App);

class MobileApp extends React.Component {
  render() {
    return(
      <Provider store={store}>
        <AppConnected />
      </Provider>
    )
  }
}

export default MobileApp;