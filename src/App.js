import React from 'react'
import { Navigation } from './navigation/Navigation';
import {Routing} from './routes/Routing'
import './shared/global/css/Global.css'
import { UserProvider } from './shared/global/provider/UserProvider';

function App() {
  return (
    <div>
      <UserProvider>
      <Routing>
        <Navigation />
      </Routing>
    </UserProvider>
    </div>
  );
}

export default App;
