import React, {useState, useEffect} from 'react'

function Shop() {

    const [state, setstate] = useState([])

    const fetchItems = async () => {
        const data = await fetch(
            'http://localhost:8000/blog/api/todos/'
        )

        const items = await data.json()
        
    }

    return (
        <div>
            <h2>THis is freaking shop</h2> 
        </div>
    )
}

export default Shop
