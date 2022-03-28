// import { Component } from "react";
import Card from '../card/card.component'
import './card-list.styles.css';


const CardList = ({ monsters }) => (
    <div className='card-list'>
    {
        monsters.map((mon)=>{
          return  <Card monster ={mon}/>
        })
    } 
</div>

) // implitcit return




// class CardList extends Component{
//     render(){
//         return(
//             <div>
//                 <Card monsters={this.props.monsters}/>
//             </div>
//         );
//     }
// }
export default CardList