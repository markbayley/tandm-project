import React, {useState, useEffect} from "react"
import { Pencil, Archive} from "react-bootstrap-icons";
import {db} from "../firebase-config"
import {doc, collection, onSnapshot, addDoc, query, orderBy, deleteDoc, setDoc} from "firebase/firestore";
import { Button } from "react-bootstrap";

function Crud() {
  const [input, setInput] = useState("")
  const [comment, setComment] = useState("")

  //GETTINGS LISTS
  const [lists, setLists] = useState([])
  useEffect(()=> {
    const q = query(collection(db, "projects"),  orderBy("timestamp", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setLists(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
      setInput("")
      setComment("")
    });
      return () => unsubscribe()
 }, [])   
//ENDS HERE


//ADDING LISTS
  const handleClick = (e) => {
    e.preventDefault()

    if(input) {
      addDoc(collection(db, "projects"), {
        name: input,
        comment: comment,
        timestamp: new Date()
      }).catch(err => console.error(err))
    }//end of If statement
  
  }//end of handleClick

  //DELETE A DOC
  async function deleteDocument(id) {
      let request = await deleteDoc(doc(db, "projects", id));
      console.log(request)
  }
  


  //UPDATE A DOC

async function updateDocument(id) {
  const itemRef = doc(db, "projects", id);
  let name =  prompt("What would you like to update it to?")
  let comment =  prompt("What would you like to update comment?")
  setDoc(itemRef, {
    name: name,
    comment: comment,
    timestamp: new Date()
  })
  
}
  
  return (
    <div className="w-full h-screen bg-gray-100 flex items-center justify-center flex-col">


      <div className="w-2/3 border shadow-md p-7">
      
        <form className="flex items-center justify-between mb-7">
            <input 
              type="text" name="item" 
              className="w-2/3 h-10 p-3 outline-none border border-gray-500"
              value={input}
              onChange={e => setInput(e.target.value)}
              />
                <input value={comment}  onChange={e => setComment(e.target.value)}></input>
            <button className="bg-green-400 p-3 rounded text-white" onClick={handleClick}>Save</button>
          
          
        </form>
        <div className="w-full ">
            {lists.map(list => (
              <div className="border-b w-full h-16 flex items-center justify-between" key={list.id}>
                <p>{list.name}</p>
                <p>{list.comment}</p>
                <div>
                  <Button  onClick={() => updateDocument(list.id)}>
                    <Pencil/>
                  </Button>
                  
                  <Button onClick={() => deleteDocument(list.id)}>
                  <Archive/>
                  </Button>
                
                </div>
           
          </div>
            ))}          


        </div>
      </div>
    </div>
  );
}

export default Crud;