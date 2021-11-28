
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
      constructor(props){
        super(props);
        this.state={}
       
      }

authfunc(){
  const authData = { data: "Auth on my site" };
  if(WavesKeeper){
  WavesKeeper.auth(authData)
      .then(auth => {
          console.log(auth); //displaying the result on the console
          /*...processing data */
      }).catch(error => {
          console.error(error); // displaying the result on the console
          /*...processing errors */
      })
  }
  else{
    alert("Need Waveskeeper to auth");
  }

}  
      render(){
        return(
          <div className="container">
              <input className="btn btn-primary" type="submit" value="Auth" onClick={this.authfunc}></input>
          </div>
        )
      }
}

const app= document.getElementById('app');
if(app){
  ReactDOM.render(<App />,app);
}


