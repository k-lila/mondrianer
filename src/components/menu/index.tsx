import { useState } from 'react'
import { MenuStyled, OpenMenu } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import {
  refresher,
  setAnimateColor,
  setAnimateGrid,
  setGap,
  setRecursion,
  setTrigger
} from '../../store/reducers/mondrianerConfig'

export const Menu = () => {
  const [open, setOpen] = useState(false)
  const recursionStore = useSelector(
    (state: RootReducer) => state.config.recursion
  )
  const gapStore = useSelector((state: RootReducer) => state.config.gap)
  const gridStore = useSelector(
    (state: RootReducer) => state.config.animateGrid
  )
  const colorsStore = useSelector(
    (state: RootReducer) => state.config.animateColor
  )
  const triggerStore = useSelector((state: RootReducer) => state.config.trigger)
  const refreshStore = useSelector(
    (state: RootReducer) => state.config.refresher
  )
  const [recursionForm, setRecursionForm] = useState(recursionStore)
  const [gapForm, setGapForm] = useState(gapStore)
  const [gridChecked, setGridChecked] = useState(gridStore)
  const [colorChecked, setColorChecked] = useState(colorsStore)
  const [triggerForm, setTriggerForm] = useState(triggerStore)
  const dispatch = useDispatch()
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    dispatch(setRecursion(recursionForm))
    dispatch(setGap(gapForm))
    dispatch(setAnimateGrid(gridChecked))
    dispatch(setAnimateColor(colorChecked))
    dispatch(setTrigger(triggerForm))
  }

  return open ? (
    <MenuStyled>
      <form onSubmit={handleSubmit}>
        <button className="__close-menu" onClick={() => setOpen(!open)}>
          <span className="material-symbols-outlined">close</span>
        </button>
        <div className="__menu-item">
          <label htmlFor="recursion">passos da recursão</label>
          <input
            type="number"
            id="recursion"
            value={recursionForm}
            onChange={(e) => setRecursionForm(Number(e.target.value))}
          />
        </div>
        <div className="__menu-item">
          <label htmlFor="trigger">trigger</label>
          <input
            type="number"
            id="trigger"
            value={triggerForm}
            onChange={(e) => setTriggerForm(Number(e.target.value))}
          />
        </div>
        <div className="__menu-item">
          <label htmlFor="gap">gap</label>
          <input
            type="text"
            id="gap"
            value={gapForm}
            onChange={(e) => setGapForm(e.target.value)}
          />
        </div>
        <div className="__menu-item">
          <label htmlFor="grid">animar grid</label>
          <input
            type="checkbox"
            id="grid"
            checked={gridChecked}
            onChange={() => setGridChecked(!gridChecked)}
          />
        </div>
        <div className="__menu-item">
          <label htmlFor="colors">animar cores</label>
          <input
            type="checkbox"
            id="colors"
            checked={colorChecked}
            onChange={() => setColorChecked(!colorChecked)}
          />
        </div>
        <div className="__container-btn">
          <button className="__menu-btn" type="submit">
            aplicar
          </button>
          <button
            className="__menu-btn"
            onClick={() => dispatch(refresher(refreshStore + 1))}
          >
            refresh
          </button>
        </div>
      </form>
    </MenuStyled>
  ) : (
    <OpenMenu onClick={() => setOpen(!open)}>
      <span className="material-symbols-outlined">settings</span>
    </OpenMenu>
  )
}
