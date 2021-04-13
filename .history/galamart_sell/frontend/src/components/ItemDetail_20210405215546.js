import React, {useState, useEffect} from 'react'

function ItemDetail({match}) {
    useEffect(() => {
        fetchItems()
        console.log("hello world")
        console.log(match)
    }, [])

    const [item, setItem] = useState([])

    const fetchItems = async () => {
        const data = await fetch(
            `http://localhost:8000/blog/api/todos/${match.params.id}`
        )

        const items = await data.json()
        console.log(items)
        setItem(items)
    }


    return (
        <div>
            <h1> this is some {item.id} </h1>
        </div>
    )
}

export default ItemDetail
