import Tabs from './components/Tabs'
import Splits from './pages/Splits'
import ILs from './pages/ILs'
import Segments from './pages/Segments'

const App = () => {
  return (
    <div className="font-custom">
      <Tabs Splits={Splits} ILs={ILs} Segments={Segments} />
    </div>
  )
}

export default App
