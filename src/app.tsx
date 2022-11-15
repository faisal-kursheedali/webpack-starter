import tsImg from './ts.svg'
import './App.css'

export const App = () => {
  return (
    <div className="App">
      <img src={tsImg} alt="" className="App-ts-img" />
      <div className="App-head">Typescript starter kit</div>
      <div className="App-sub">
        Github Repository{' '}
        <a
          href="https://github.com/faisal-kursheedali/webpack-starter"
          className="App-sub-link"
        >
          link
        </a>
      </div>
    </div>
  )
}
