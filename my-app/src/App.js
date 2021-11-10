import './App.css';
import Emoji from './emojiList.json';
import React, { Component } from 'react';
import Input from './Input';
import Display from './Display';


class App extends Component {
   state={
     input:"",
     
   }
  
  n=null;
   a=Array();
   b=Array();
   
   m = () =>{
     
    var c =Array();
      this.n=[...Emoji];
     
     
     this.b=Object.keys(this.n).map(i=>{
      
      
        if(this.n[i].keywords.toLowerCase().includes(this.state.input.toLocaleLowerCase())){
          
          return true;
          
        }
        if(this.n[i].keywords.includes(this.state.input)){
          
          return true;
        }
        
        return false;

    

      
     
     })
     
     let count =0;
     for(var i in this.b){
       if(this.b[i]!==false){
         
         c[count]=(<div key={count} style={{fontSize:"6rem"}}>{this.n[i].symbol}</div>);
         const codePointHex = this.n[i].symbol.codePointAt(0).toString(16);
         
         count++;
       }
     }
     
    return c;
    
  }


inputChange=(e)=>{
  
 
  this.setState({input:document.getElementById("InputVal").value})
  
}



 
  
render()  
  {
    
    return (
    <div>
      <div className={"header__name"}>
        <img src="//cdn.jsdelivr.net/emojione/assets/png/1f638.png" alt="" />
        <div>Emoji Search</div>
        <img src="//cdn.jsdelivr.net/emojione/assets/png/1f63a.png" alt="" />
      </div>
      
      <Input  type="text" Change={this.inputChange} />
      <div>
        <Display  />
      </div>
      {this.m()}
    </div>
  );
}}

export default App;
