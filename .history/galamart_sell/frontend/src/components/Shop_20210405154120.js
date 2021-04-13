import React, {useState, useEffect} from 'react'

function Shop() {
    useEffect(() => {
        effect
        return () => {
            cleanup
        }
    }, [input])

    const [items, setItems] = useState([])

    const fetchItems = async () => {
        const data = await fetch(
            'http://localhost:8000/blog/api/todos/'
        )

        const items = await data.json()
        console.log(items)
    }

    return (
        <div>
            <h2>This is gold</h2>
            <p>{items.id}</p>
            <p>{items.id}</p>
            <p>{items.id}</p>
            <p>{items.id}</p>
        </div>
    )
}

export default Shop
