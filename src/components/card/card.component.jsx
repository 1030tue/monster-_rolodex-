// import { Component } from "react";
import './card.styles.css';


const Card = ({monster:{name, email, id}}) => {
    // const{name, email, id} = monster;
    return (
        <div className="card-container" key={id}>
        <img 
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}/?set=set4&size=180x180`}/>
        <h2> {name} </h2>
        <p> {email} </p>
        </div >
    )

}

// class Card extends Component{
//     render(){
//         const {monsters} = this.props;
//         return(

//             <div className="card-list" >

//             { monsters.map((mon)=>{

                // const{name, email, id} = mon;

                // return <div className="card-container" key={id}>
                //     <img 
                //     alt={`monster ${name}`}
                //     src={`https://robohash.org/${id}/?set=set4&size=180x180`}/>
                //     <h2> {name} </h2>
                //     <p> {email} </p>
                //     </div >
//             })}

//             </div>
          
   

//         )
//     }
// }

export default Card; 
