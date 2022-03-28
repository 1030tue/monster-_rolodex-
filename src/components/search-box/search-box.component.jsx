// import { Component } from "react";
// import react, {useState} from 'react';

import './search-box.styles.css';

const SearchBox = ({className, placeholder, searchHandler}) => (
        <div>
            <form>
                <label>
                    <input className={`search-box ${className}`}  
                            type="search" placeholder= {placeholder} 
                            onChange={searchHandler} />
                </label>
            </form>
        </div>
    )






// class SearchBox extends Component{
//     render(){

        // return(
        //     <div>

        // <form>
        //     <label>
        //         <input className={`search-box ${this.props.className}`}  type="search" placeholder= {this.props.placeholder} 
        // onChange={this.props.searchHandler} />
        //     </label>
        //  </form>

        //     </div>
        // )
//     }
// }



export default SearchBox;