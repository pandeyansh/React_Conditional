import React, { useState } from "react";
function MessageDisplay (){
    const[isLoggedIn, setIsLoggedIn] = useState(false);
    return(
        <div>
        {isLoggedIn ? (
            <h1>Welcome, User!</h1>
        ) : (
            <div>
            <h1>Please Log In</h1>
            <button onClick={() => setIsLoggedIn(true)}>Log In</button>
            </div>
        )}
        </div>
    )
}
export default MessageDisplay;