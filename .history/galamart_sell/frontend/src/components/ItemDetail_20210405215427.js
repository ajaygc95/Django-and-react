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
    }


    return (
        <div>
            <h3> This is item 
        </div>
    )
}

export default ItemDetail
