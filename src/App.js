import React from 'react';
import './App.css';
import Drake from './drake'
import {yes,no} from './objects'




function App() {
  return <div>
		<h1>You Can Do This!</h1>
    <Drake data = {[yes,no]} />
	</div>
}

export default App;
