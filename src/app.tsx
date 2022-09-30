import tsImg from "./ts.svg";
import "./App.css"

export const App = () => {
  return (
    <div className="App">
      <img src={tsImg } alt="" className="App-ts-img" />
      <div className="App-head">
        Typescript starter kit
      </div>
    </div>
  )
}
