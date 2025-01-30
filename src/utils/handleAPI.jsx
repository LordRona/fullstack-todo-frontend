import axios from "axios";

const baseurl = 'https://fullstack-todo-backend-1ydw.onrender.com';

const getAllToDo = (setToDo)=> {
    axios
    .get(baseurl)
    .then(({data})=> {
        console.log("Data -----> ", data);
        setToDo(data);
    })
}

const addToDo = (text, setText, setToDo)=> {
    axios
    .post(`${baseurl}/save`, {text})
    .then((data)=> {
        console.log(data);
        setText("")
        getAllToDo(setToDo)
    }).catch((err)=> console.log("Error occured", err)
    )
}

const updateToDo = (toDoId, text, setText, setToDo, setIsUpdating)=> {
    axios
    .post(`${baseurl}/update`, {_id: toDoId, text})
    .then((data)=> {
        setText("")
        setIsUpdating(false);
        getAllToDo(setToDo);
    }).catch((err)=> console.log("Error occured", err)
)
}

const deleteToDo = (_id, setToDo)=> {
    axios
    .post(`${baseurl}/delete`, {_id })
    .then((data)=> {
        getAllToDo(setToDo);
    }).catch((err)=> console.log("Error occured", err)
)
}

export {getAllToDo, addToDo, updateToDo, deleteToDo};
