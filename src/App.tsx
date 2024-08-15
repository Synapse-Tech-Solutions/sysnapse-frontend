import { CAlert } from '@coreui/react';
import { Route, Routes } from 'react-router-dom'
import './App.css'
import '@coreui/coreui/dist/css/coreui.min.css'

function App() {
  return (
  <>
    <Routes>
      <Route path='/test' element={<CAlert color='success'>Test</CAlert>}/>
    </Routes>
  </>
  )
}

export default App
