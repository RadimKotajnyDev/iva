import {createRoot} from 'react-dom/client'
import './index.css'
import {AppWrappers} from "./providers/AppWrappers.tsx";

const root = createRoot(document.getElementById('root')!)

if (root) {
  root.render(<AppWrappers />)
}