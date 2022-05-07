import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Documents, Settings, Sidebar } from 'routes';

function App() {
  return (
    <Router>
      <div className='relative h-screen flex'>
        <aside className='fixed top-0 h-screen flex-none w-64 bg-gray-50' aria-label='Sidebar'>
          <Sidebar />
        </aside>
        <main className='ml-64 grow overflow-y-scroll'>
          <Routes>
            <Route path='/documents/*' element={<Documents />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/' element={<Navigate to='/documents' />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
