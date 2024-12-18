import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Pomodoro from './components/Pomodoro'
import LongBreak from './components/longBreak'
import ShortBraek from './components/shortBreak'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Pomodoro></Pomodoro>}></Route>
        <Route path='/longBreak' element={<LongBreak></LongBreak>}></Route>
        <Route path='/shortBraek' element={<ShortBraek></ShortBraek>}></Route>
      </Routes>
    </div>
  )
}

export default App
