import React from "react";

function Container(props){
        return(
               <ul className="list">
                {
                    Array.from(props.items).map((item, index) => <li className="task" key={index} >
                        <input type="checkbox" name="fav_language" id={index} onClick={props.onCheck} value="HTML"/>
                        <p className="todo">{item}</p>
                        <img src="./icons8-trash-24.png" alt="" className="delete" id={index} onClick={props.remove} />
                    </li>)             
                }
               </ul>
        )
}

export default Container;