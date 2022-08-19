import React from 'react';
import styles from "./Recipes.module.css";
const shorter =(title)=>{
    const splitTitle =title.split(" ");
    const newTitle= `${splitTitle[0] + " "+splitTitle[1] +" "+ splitTitle[2]+ " "+splitTitle[3] + " "+splitTitle[5]+" "+splitTitle[6]}`
    return newTitle
  
  }
  


const Recipes = ({title, calories, image, ingredients}) => {
    return (
        <div className={styles.recipe}>
            <h1 >{title}</h1>
            <img className={styles.image} src={image} alt=""/>
            <ol>

            {ingredients.map(item => <li style={{color :"lightcoral", padding: "5px"}}><span style={{color :"black",padding: "3pxpx ",}}>{shorter(item.text)}</span></li>)}
            </ol>
            <h3 className= {styles.caloritext}> Calories : <span >{calories.toFixed(1)}</span> </h3>

            
            
        </div>
    );
};

export default Recipes;