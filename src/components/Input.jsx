import { useEffect, useRef, useState } from "react"


export const InputForm = () => {
    const [ recipe , setRecipe] = useState({
        title : "",
        ingredients : "",
        timetocook : "", 
        image:"",
        instructions:""
    });
    const [items , setItems] = useState([]);
    const ref = useRef(null);

    useEffect(() => {
        getRecipe()
    },[]);
    let name ,value;
    const handleInput = (e) => {
        name = e.target.name
        value= e.target.value
        setRecipe({...recipe, [name]:value})
    }
    const getRecipe = () => {
        fetch("http://localhost:3001/recipeDtata")
        .then((d) => d.json())
        .then((res) => {
            setItems(res)
        })
    }

    const addRecipe = () => {
     const { title, ingredients,timetocook , image, instructions} = recipe;

        fetch("http://localhost:3001/recipeDtata",{
            method:"POST",
            body : JSON.stringify({
                title, ingredients,timetocook , image, instructions
            }),
            headers:{
                "content-type" : "application/json"
            }
        }).then(() => {
            getRecipe();
            setRecipe(" ");
        })
    }
    return (
        <>
         <div className="comp leftComp">
         <div>
                 <label htmlFor="title">Title</label><br />
                 < input value={recipe.title}  onChange={handleInput} type="text" name="title" id="title" placeholder="Enter Title of Recipe" />
             </div>
             <div>
                 <label htmlFor="ingredients">Ingredients</label><br />
                 < input value={recipe.ingredients} onChange={handleInput} type="textarea" name="ingredients" id="ingredients"  />
             </div>
             <div>
                 <label htmlFor="timetocook"> Time to cook</label><br />
                 < input value={recipe.timetocook} onChange={handleInput} type="time" name="timetocook" id="timetocook"  />
             </div>
             <div>
                 <label htmlFor="image">Image</label><br />
                 < input ref={ref} value={recipe.image} onChange={handleInput}  type="file" name="image" id="image"  />
             </div>
             <div>
                 <label htmlFor="instructions">Instructions</label><br />
                 < input value={recipe.instructions} onChange={handleInput} type="textarea" name="instructions" id="instructions"  />
             </div>
             <div>
                 <button onClick={addRecipe}>Add Recipe</button>
             </div>
         </div>
            
      
        {  
        // <div className="comp rightComp">
            items.map((e) => (
             <div className="rightComp"><p>{e.title}</p>
            <p> {e.ingredients}</p>
            <p> {e.timetocook}</p>
            <p> {e.image}</p>
            <p> {e.instructions}</p></div>
    
            ))
            /* // </div> */
        }
    </>
    )
}