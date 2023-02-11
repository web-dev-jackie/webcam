import WebCamera from "./components/webcam"
import { createRoot } from "react-dom/client"
import Nav from "./components/Nav"
import List from "./components/List"
import Display from "./components/Display"

var ghpages = require('gh-pages')
ghpages.publish('dist', function (err) { });

const groceries = [
  {
    id: 1,
    name: "Milk",
    purchased: true,
  },
  {
    id: 2,
    name: "Eggs",
    purchased: true,
  },
  {
    id: 3,
    name: "Cheese",
    purchased: false,
  },
  {
    id: 4,
    name: "Cake Mix",
    purchased: false,
  },
  {
    id: 5,
    name: "Carrots",
    purchased: false,
  },
  {
    id: 6,
    name: "Juice",
    purchased: true,
  },
]

function App() {
  return (
    <div>
      <Nav />
      <WebCamera />
      <Display />
      <List groceries={groceries} />
    </div>
  )
}
const root = createRoot(document.getElementById("root"))
root.render(<App />)

export default App
