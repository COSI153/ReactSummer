import React, {useState} from 'react';

const  ToDoList = ({data}) => {
  // here is where we keep track of the product list
  const [items,updateItems] = useState(data)

  // here is where we keep track of the values in the form
  const [name,setName] = useState("")
  const [category, setCategory] = useState("")

  // this is the action when the submit button is pushed
  const addItem = (event) => {
    console.log('adding item ')
    console.dir(event)
    const item = {id:items.length, name:name, category:category, added:false}
    updateItems(items.concat(item))
    document.getElementById('name').value = ""
    setName("")
    document.getElementById('category').value = ""
    setCategory("")

    event.preventDefault()
  }

  // these are called when the form elements are modified
  const updateName = event=> setName(event.target.value)
  const updateCategory = event => setCategory(event.target.value)

  // handle the action when an item is clicked/completed
  let flipItem = item => (event) => {
    item.complete=!item.complete
    let newitems = items.map(x => (x.id===item.id?item:x))
    updateItems(newitems)
  }

  return (
   <>
     <h5 class="display-4 text-center"> Add your products </h5>
     {/*
     <ul>
       {items
          .filter(item=>!item.complete)
          .map(item => (

         <li key={item.id}>
           <input type="checkbox"
                  onChange={flipItem(item)}
                  name={"complete"+item.id}
                  value={!item.complete} />
           {item.name} : {item.description}
         </li>

       ))}
     </ul>
     */}

     <form onSubmit={addItem}>
        <div class="form-group">
          name: <input type="text" class="form-control form-control-lg " placeholder="Product Name" onChange={updateName}/>
        </div>
        {/*
        <div class="form-group">
            <input type="text" class="form-control form-control-lg" placeholder="Unique Product ID"
                disabled />
        </div>
        */}

        <div class="form-group">
            <textarea class="form-control form-control-lg" placeholder="Product Category" onChange={updateCategory}></textarea>
        </div>

       <h2>New todo</h2>
       name: <input type="text" id="name" name="name" onChange={updateName}/><br />
       category: <input type="text" id="category" name="category" onChange={updateCategory} /><br />
       <input type="submit" value="add item to todo list" />
     </form>

     <h2>Here is the items JSON object</h2>
     <pre>
     items ={JSON.stringify(items,null,2)}
     </pre>
     <br />
     <pre>
     name = {JSON.stringify(name,null,2)}
     </pre>
     <br />
     <pre>
     category = {JSON.stringify(category, null,2)}
     </pre>
   </>
 );
}

export default ToDoList;
