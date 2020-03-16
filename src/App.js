import React from 'react';
import Navigations from './config/Navigations'
import { Container, Content } from 'native-base'
import { Provider } from 'react-redux'
import store  from './redux/store'
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Provider store = {store}>
          <Navigations />
        </Provider>
      </Container>
    )
  }
}
export default App;