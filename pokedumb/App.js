
import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './src/publics/redux/store'
import { Root } from 'native-base'


import RootNavigator from './src/publics/navigators/RootNavigator'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Root>
          <RootNavigator />
        </Root>
      </Provider>
    )
  }
}

export default App