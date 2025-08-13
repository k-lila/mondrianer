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
  setAnimateDepth,
  setAnimateGrid,
  setGap,
  setLayers,
  setRecursion,
  setTransparency,
  setTrigger
} from '../../store/reducers/mondrianerConfig'
import settings from '../../assets/settings.png'
import close from '../../assets/close.png'

export const Menu = () => {
  const [open, setOpen] = useState(false)
  const config = useSelector((state: RootReducer) => state.config)
  const refreshStore = useSelector(
    (state: RootReducer) => state.config.refresher
  )

  const [recursionForm, setRecursionForm] = useState(config.recursion)
  const [triggerForm, setTriggerForm] = useState(config.trigger)
  const [gapNum, setGapNum] = useState(config.gap.replace(/\D+/g, ''))
  const [gapChar, setGapChar] = useState(config.gap.replace(/\d+/g, ''))
  const [gridChecked, setGridChecked] = useState(config.animateGrid)
  const [colorChecked, setColorChecked] = useState(config.animateColor)
  const [depthChecked, setDephChecked] = useState(config.animateDepth)
  const [transparencyForm, setTransparencyForm] = useState(config.transparency)
  const [layersForm, setLayersForm] = useState(config.layers)
  const [visible, setVisible] = useState(true)
  const dispatch = useDispatch()
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    dispatch(setRecursion(recursionForm))
    dispatch(setGap(gapNum + gapChar))
    dispatch(setAnimateGrid(gridChecked))
    dispatch(setAnimateColor(colorChecked))
    dispatch(setTrigger(triggerForm))
    dispatch(setTransparency(transparencyForm))
    dispatch(setLayers(layersForm))
    dispatch(setAnimateDepth(depthChecked))
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
            <p>recursões</p>
            <p>{recursionForm}</p>
          </div>
          <input
            className="__range"
            id="numrange"
            type="range"
            min="0"
            max="10"
            step="1"
            value={recursionForm}
            onChange={(e) => setRecursionForm(Number(e.target.value))}
          />
        </InputRange>
        <InputRange $num={triggerForm}>
          <div>
            <p>saturação</p>
            <p>{triggerForm}</p>
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
        <InputRange $num={transparencyForm}>
          <div>
            <p>transparência</p>
            <p>{transparencyForm}</p>
          </div>
          <input
            type="range"
            className="__range"
            id="transparency"
            min="0"
            max="10"
            step="1"
            value={transparencyForm}
            onChange={(e) => setTransparencyForm(Number(e.target.value))}
          />
        </InputRange>
        <InputRange $num={layersForm}>
          <div>
            <p>camadas</p>
            <p>{layersForm}</p>
          </div>
          <input
            type="range"
            className="__range"
            id="layers"
            min="1"
            max="10"
            step="1"
            value={layersForm}
            onChange={(e) => setLayersForm(Number(e.target.value))}
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
        <InputCheck>
          <label htmlFor="depth">animar profundidade</label>
          <input
            type="checkbox"
            id="depth"
            checked={depthChecked}
            onChange={() => setDephChecked(!depthChecked)}
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
