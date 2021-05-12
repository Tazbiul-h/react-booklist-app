import React, {Component} from 'react';
let Person = props => {
    console.log(props)
    return(
        <div>
          <h3>Name: {props.name } and Age: {props.age}  </h3>
          
        </div>
      )
  }


//   class Person extends Component{
    
//       render(){
          
//         return(
//             <div>
//               <h3>Name: {this.props.name} and Age: {this.props.age} </h3>
              
//             </div>
//           );
//       }
//   }
  export default Person;