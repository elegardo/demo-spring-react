import React, { Component } from "react";
import ReactDOM from "react-dom";
import TagManager from 'react-gtm-module';

import UserList from "./UserList";

const tagManagerArgs = {
  gtmId: 'GTM-K7NSWCN'
}

TagManager.initialize(tagManagerArgs);

class App extends Component {

	render() {
	  
	  return (
	    <div>
	      <p>React here!</p>

	      <UserList id="user_id"/>
	   
	    </div>
	  );
	};

}

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
