import axios from "axios";
import { createContext, useState } from "react";

const myContext = createContext()

const ContextProvider=(props)=>{
    const [search,setSearch] = useState("")
    const [character,setCharacter] = useState([])
    // console.log(search);
    const [wishlist, setWishlist] = useState([]);
    
    const toggleWishlist = (item) => {
        setWishlist((prevWishlist) => {
            const isWishlisted = prevWishlist.some((wishItem) => wishItem.id === item.id);
            if (isWishlisted) {
                return prevWishlist.filter((wishItem) => wishItem.id !== item.id);
            } else {
                return [...prevWishlist, item];
            }
        });
    };

    const fetchData = async()=>{
        try {
            const response =await axios.get('https://rickandmortyapi.com/api/character')
            setCharacter(response.data.results)
            // console.log(response.data.results);
            
        } catch (error) {
            console.log(error);               
        }
    }

    const contextValue ={
        search,setSearch,
        character,setCharacter,
        fetchData,wishlist, setWishlist,
        toggleWishlist
    }

    return(
        <myContext.Provider value={contextValue}>
            {props.children}
        </myContext.Provider>
    )
}

export {myContext,ContextProvider}