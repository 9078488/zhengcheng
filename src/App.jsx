import Maintainence from './pages/Maintainence.jsx'
import MainApp from './pages/MainApp.jsx'

const isMaintenance = import.meta.env.VITE_WEBSITE_MAINTENANCE === 'true'

export default function App() {
  return isMaintenance ? <Maintainence /> : <MainApp />
}
