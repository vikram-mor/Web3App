
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
      constructor(props){
        super(props);
        this.state={}
       
      }

          
      render(){
        return(
          <div className="container">
              <input className="btn btn-primary" type="submit" value="Auth" onClick={() =>{alert("Alert");}}></input>
          </div>
        )
      }
}

const app= document.getElementById('app');
if(app){
  ReactDOM.render(<App />,app);
}


