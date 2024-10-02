import { Provider } from 'react-redux'
import { Mondrianer } from './mondrianer'
import { Frame, GlobalStyle } from './styles'
import store from './store'
import { Menu } from './components/menu'

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <GlobalStyle />
        <Frame />
        <Menu />
        <Mondrianer />
      </div>
    </Provider>
  )
}

export default App
