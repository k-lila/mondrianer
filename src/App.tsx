import { Provider } from 'react-redux'
import { Frame, GlobalStyle } from './styles'
import store from './store'
import { Menu } from './components/menu'
import { Layers } from './containers/layers'

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <GlobalStyle />
        <Frame />
        <Menu />
        <Layers />
      </div>
    </Provider>
  )
}

export default App
