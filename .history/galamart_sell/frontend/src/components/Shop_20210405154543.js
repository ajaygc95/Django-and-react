import React, {useState, useEffect} from 'react'

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
            <h2>This is gold</h2>
            {items.map(
                ()item,
                <h4>{item.id}</h4>
            )}
        </div>
    )
}

export default Shop
