import { useSelector } from 'react-redux'
import { Mondrianer } from '../mondrianer'
import { RootReducer } from '../../store'

export const Layers = () => {
  const config = useSelector((state: RootReducer) => state.config)
  return (
    <div className="container__mondrianer">
      {Array.from({ length: config.layers }, (_, i) => (
        <Mondrianer key={i} />
      ))}
    </div>
  )
}
