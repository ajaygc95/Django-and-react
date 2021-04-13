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
        // console.log(items)
        setItems(items)
    }

    return (
        
        <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>


        <div className='main'>
            {items.map(item =>
                <h4 key={item.id}>
                    <Link to={`/shop/${item.id}`}>{item.title}</Link>
                </h4>
            )}
        </div>
    )
}

export default Shop
