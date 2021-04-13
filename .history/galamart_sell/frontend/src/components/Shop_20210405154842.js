import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

function Shop() {
    useEffect(() => {
        fetchItems()
    }, [])

    const [items, setItems] = useState([])

    const fetchItems = async () => {
        const data = await fetch(
            'http://localhost:8000/blog/api/todos/'
        )

        const items = await data.json()
        console.log(items)
        setItems(items)
    }

    return (
        <div>
            {items.map(item =>
                <h4 key={item.id}>
                     {item.title} 
                </h4>
            )}
        </div>
    )
}

export default Shop
