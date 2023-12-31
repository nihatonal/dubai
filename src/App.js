import React, { Suspense } from 'react';
import { LanguageProvider } from './shared/context/Language'
import LoadingSpinner from './shared/UI/LoadingSpinner';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './shared/navigation/Header';
import Main from './Main/Main';

import './App.css';


function App() {
  return (
    <div className="root-wrapper">
      <LanguageProvider>
        <BrowserRouter>
          <Suspense
            fallback={
              <div className='suspense_container'>
                <LoadingSpinner />
              </div>
            }
          >
            <Header />
            <Routes>
              <Route exact path="/" element={<Main />} />
            </Routes>

            {/*<Footer /> */}
          </Suspense>
        </BrowserRouter>
      </LanguageProvider>

    </div>
  );
}

export default App;
