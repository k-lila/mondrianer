import { useState } from 'react'
import {
  Header,
  InputCheck,
  InputGap,
  InputRange,
  MenuStyled,
  OpenMenu
} from './styles'
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
import settings from '../../assets/settings.png'
import close from '../../assets/close.png'

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
  const [gapNum, setGapNum] = useState(gapStore.replace(/\D+/g, ''))
  const [gapChar, setGapChar] = useState(gapStore.replace(/\d+/g, ''))
  const [gridChecked, setGridChecked] = useState(gridStore)
  const [colorChecked, setColorChecked] = useState(colorsStore)
  const [triggerForm, setTriggerForm] = useState(triggerStore)
  const [visible, setVisible] = useState(true)
  const dispatch = useDispatch()
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    dispatch(setRecursion(recursionForm))
    dispatch(setGap(gapNum + gapChar))
    dispatch(setAnimateGrid(gridChecked))
    dispatch(setAnimateColor(colorChecked))
    dispatch(setTrigger(triggerForm))
  }

  return open ? (
    <MenuStyled>
      <Header>
        <div>
          <input
            id="visible"
            type="checkbox"
            checked={visible}
            onChange={() => setVisible(!visible)}
          />
          <label htmlFor="visible">sempre visível</label>
        </div>
        <button onClick={() => setOpen(!open)}>
          <img src={close} alt="close" />
        </button>
      </Header>
      <form onSubmit={handleSubmit}>
        <InputRange $num={recursionForm}>
          <div>
            <label htmlFor="recursion">granularidade</label>
            <input
              type="number"
              id="recursion"
              value={recursionForm}
              onChange={(e) => setRecursionForm(Number(e.target.value))}
            />
          </div>
          <input
            className="__range"
            id="numrange"
            type="range"
            min="0"
            max="25"
            step="1"
            value={recursionForm}
            onChange={(e) => setRecursionForm(Number(e.target.value))}
          />
        </InputRange>
        <InputRange $num={triggerForm}>
          <div>
            <label htmlFor="trigger">saturação</label>
            <input
              type="number"
              id="trigger"
              value={triggerForm}
              onChange={(e) => setTriggerForm(Number(e.target.value))}
            />
          </div>
          <input
            type="range"
            className="__range"
            id="triggerrange"
            min="0"
            max={recursionForm}
            step="1"
            value={triggerForm}
            onChange={(e) => setTriggerForm(Number(e.target.value))}
          />
        </InputRange>
        <InputGap $char={gapChar}>
          <div className="__gap">
            <label htmlFor="gap">gap</label>
            <div>
              <input
                type="number"
                id="gap"
                value={gapNum}
                onChange={(e) => setGapNum(e.target.value)}
              />
              <button className="--proportion" onClick={() => setGapChar('%')}>
                %
              </button>
              <button className="--constant" onClick={() => setGapChar('px')}>
                px
              </button>
            </div>
          </div>
          <input
            type="range"
            className="__range"
            id="gaprange"
            min="0"
            max="25"
            step="0.1"
            value={gapNum}
            onChange={(e) => setGapNum(e.target.value)}
          />
        </InputGap>
        <InputCheck>
          <label htmlFor="grid">animar grid</label>
          <input
            type="checkbox"
            id="grid"
            checked={gridChecked}
            onChange={() => setGridChecked(!gridChecked)}
          />
        </InputCheck>
        <InputCheck>
          <label htmlFor="colors">animar cores</label>
          <input
            type="checkbox"
            id="colors"
            checked={colorChecked}
            onChange={() => setColorChecked(!colorChecked)}
          />
        </InputCheck>
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
    <OpenMenu $visible={visible} onClick={() => setOpen(!open)}>
      <img src={settings} alt="settings" />
    </OpenMenu>
  )
}
