// import { Component } from 'react';
import react, {useState, useEffect} from 'react';


// import logo from './logo.svg';
import './App.css';
import './components/card-list/card-list.component.jsx';
import CardList from './components/card-list/card-list.component.jsx';
import SearchBox from './components/search-box/search-box.component.jsx';


const App=()=>{
  console.log("render")

    const [searchWords, setSearchWords] = useState('')
    const [title, setTitle]=useState('')
    const [monsters, setMonsters ] = useState([])
    const [filteredMonster, setFilteredMonsters] = useState( monsters )


    const onSearchChange = (event)=>{
      const searchWordsString =event.target.value.toLowerCase()
      setSearchWords(searchWordsString)
    }

    const onTItleChange = (event)=>{
      const serachFieldString =event.target.value
      setTitle(serachFieldString)
    }

    console.log(searchWords)

    useEffect(()=>{
          fetch('https://jsonplaceholder.typicode.com/users')
          .then((res)=>res.json())
          .then((users)=>{ setMonsters(users)})
    },[]) //Callback function, array of dependancy 

    console.log(monsters)


      useEffect(()=>{
          const searchResult = monsters.filter((mon)=>{
                          let monName=mon.name.toLowerCase();
                          return monName.includes(searchWords)
                          })
           setFilteredMonsters(searchResult)
      },[monsters, searchWords])

    console.log('filtered',filteredMonster)

  return (

    <div className="App">

          <h1 className='app-title'> {title} </h1>

              <SearchBox 
                className = 'title-search-box'
                placeholder='Search Title' 
                searchHandler={ onTItleChange } />

               <br /> 

              <SearchBox 
                className = 'monsters-search-box'
                placeholder='Search Monster' 
                searchHandler={ onSearchChange } /> 
    
              < CardList monsters = { filteredMonster } /> 
            
    </div>
  )

}


// class App extends Component{
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchWords: ''
//     };
//    console.log('constructor')
//   }

//   componentDidMount(){
//     console.log('componentDidMount1');
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((res)=>res.json())
//     .then((users)=> this.setState(()=>{
//       return {monsters: users}
//     },()=>{
//       console.log('componentDidMount2',this.state);
//     }
//     ))
//   }


  // onSearchChange = (event)=>{
  //   const searchWords =event.target.value.toLowerCase()
  //    this.setState(()=>{
  //     return {searchWords}})}


//   render(){
//             console.log('render')

//             const {monsters, searchWords} = this.state;
//             const{onSearchChange} = this

//             const searchResult = monsters.filter((mon)=>{
//               let monName=mon.name.toLowerCase();
//             return monName.includes(searchWords)
          // })

//     return (
//             <div className="App">

//               <h1 className='app-title'> Monster Rolodex </h1>

//               <SearchResult 
//               className = 'monsters-search-box'
//               placeholder='Search Monster' 
//               searchHandler={ onSearchChange } />

//               <CardList monsters = { searchResult } />
              
//             </div>
//     );

//   }
// }



export default App;
