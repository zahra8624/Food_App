import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Recipes from './component/Recipes';

function App() {
  const APP_ID = "8f5dcd1b";
  const APP_KEY= "384b478e557151814b0733e8335dba8d";

  

   const [counter, setCounter] = useState(0);
   const [recipes, setRecipes] = useState([]);
   const [search, setSearch]= useState(" ");
   const [query, setQuery] = useState("chicken");

   const URL =
   `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

   const getApi = async ()=>{
    const response = await axios.get(URL)
    
    return response.data.hits
    
   
   }

   
   useEffect(()=>{
    const getRecipes = async () =>{
      const data = await getApi();
      console.log(data);
      setRecipes(data)

    };
    getRecipes();
    
    
    
   },[query]);

   const onchangeHandler = (event)=>{
    setSearch(event.target.value);

   };

   const getSearch = (event)=>{
    event.preventDefault();
    setQuery(search);
    setSearch(" ");
   }



  return (
    <div className="APP">
      <form onSubmit={getSearch} className="search-form">
        <input
         className="search-bar"
          type="text"
          value={search}
          onChange={onchangeHandler}
          
          />
        <button  className="search-button" type="submit">
          Search</button>
      </form>
    
      <div className= "recipes">
      {
      recipes.map(item=> <Recipes 
        key={item.recipe.label}
        title={item.recipe.label}
        image={item.recipe.image} 
        calories={item.recipe.calories}
        ingredients = {item.recipe.ingredients}

         />)
    }
    </div>
    </div>
  );
}

export default App;
