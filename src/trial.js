// import { Component } from 'react';

// import logo from './logo.svg';
// import './App.css';


// class App extends Component{
//   constructor() {
//     super();
//     this.state = {
//       monster: [],
//       filteredMon:[]
//     };
//    console.log('constructor')
//   }

//   componentDidMount(){
//     console.log('componentDidMount1');
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((res)=>res.json())
//     .then((users)=> this.setState(()=>{
//       return {monster: users, filteredMon: users}
//     },()=>{
//       console.log('componentDidMount2',this.state);
//     }
//     ))
//   }


//   render(){
//     console.log('render')
//     return (
//       <div className="App">
//           <form>
//        <label>
       
//            <input className='search-box' type="search" placeholder='Search Monster' onChange={(event)=>{
//                console.log('?',event.target.value)
//                const searchResult = this.state.monster.filter((mon)=>{
//                  let monName=mon.name.toLowerCase();
//                  let serchVal=event.target.value.toLowerCase()
//                return monName.includes(serchVal)
//              })
//              this.setState(()=>{
//               return {filteredMon : searchResult}
//             })
          
//            }}/>

//        </label>
//       </form>
//         {
//         this.state.filteredMon.map((mon)=>{
//          return <div key={mon.id}><h1> {mon.name} </h1></div >
//        })
//        }
//       </div>
//     );

//   }
// }

// // function App() {}

// export default App;
