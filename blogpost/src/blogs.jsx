import {useState , useEffect} from "react";

function Blogs(){

    const Products = [
        { id: 1, name: "Product 1", price: 29.99, image: "https://via.placeholder.com/150" },
        { id: 2, name: "Product 2", price: 49.99, image: "https://via.placeholder.com/150" },
        { id: 3, name: "Product 3", price: 19.99, image: "https://via.placeholder.com/150" },
        { id: 4, name: "Product 4", price: 99.99, image: "https://via.placeholder.com/150" },
        // Add more products as needed
      ]
/* const [post , setPost] = useState(null);
 const  [error , setError] = useState(null);
 


    
 useEffect(()=>{
    async function blogData() {
        const url = ("")
        try{
            const response = await fetch(url);
            if (!response,ok) {
                throw new Error(`response status : ${response.status}`);
                
            }
    
            const data = await response.json();
            console.log(data)
            
            setPost(data);
    
    
    
        } catch (error){
            setError(error.message);
            console.log("imekata kufetch" , error);
    
        }
    }
 },[])*/

    return(
        //how do i get this section to display multiple components at a time 
        // on the website ... by using the map and key 
        <div className="postSection">
            {Products.map((product) => {
                <div key={Products.id} className="product-grid">
                    <img src="{products.image}" alt="product image" />
                    <p className="name">{Products.name}</p>
                    <p className="price">{Products.price}</p>
                 </div>
            })}

        </div>
        
    );
}
export default Blogs