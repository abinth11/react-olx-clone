import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import { FirebaseContext } from './store/Context';
import firebase from './firebase/config';
import { appRouter } from './App';
import Context from './store/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

 <FirebaseContext.Provider value={{firebase}}>
      <Context>
          < RouterProvider router={appRouter} />
      </Context>
 </FirebaseContext.Provider>
);