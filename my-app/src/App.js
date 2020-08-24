import React, { useState } from 'react';
import SearchContainer from './searchContainer/SearchContainer';
import './App.css';

function App(props) {
  
  const [isNeedRightPanel, setneedRightPanelClicked] = useState(false);
  return (
    <>
    <SearchContainer />
    <hr className="solidDevider"></hr>
    <div className="App">
      <div className={isNeedRightPanel ? `${'container'} ${'right-panel-active'}` : "container"} id="container">
	    <div className="form-container sign-up-container">
		<form action="#">
			<h1>Create Account</h1>
			
			<span>or use your email for registration</span>
			<input type="text" placeholder="Name" />
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<input type="Mobile Number" placeholder="Mobile number" />
			<button >Sign Up</button>
		</form>
	</div>
	<div className="form-container sign-in-container">
		<form action="#">
			<h3>Log-In as Franchise Partner</h3>
			
			
			<input type="Mobile Number" placeholder="Mobile Number" />
			<button>Send OTP</button>
			<input type="Enter OTP" placeholder="OTP" />
			
			<button>Log-In</button>
			

		</form>
	</div>
	<div className="overlay-container">
		<div className="overlay">
			<div className="overlay-panel overlay-left">
				<h1>Welcome Back!</h1>
				
				<button className="ghost" id="signIn" onClick={() => setneedRightPanelClicked(false)}>Sign In</button>
				<p className="change_link">
					Do not have an account ?
					<a href="#form-container sign-up-container" className="to_form-container sign-in-container">Sign-up</a>
				</p>
			</div>
			<div className="overlay-panel overlay-right">
				<h1>Hello, customer!</h1>
				<p>Enter your personal details and start journey with us</p>
        <button className="ghost" id="signUp" onClick={() => setneedRightPanelClicked(true)}>Sign Up</button>
			</div>
		</div>
	</div>
</div>
    </div>
    </>
  );
}

export default App;
