import { StyleSheet, Text, View,TouchableOpacity, TextInput, FlatList,CheckBox } from "react-native";
import {React, useState} from 'react';
import { Icon, IconButton } from "react-native-paper";
import Fallback from "../components/Fallback";


console.log(Date.now().toString());


const TodoScreen = () => {

    const[todo, setTodo] = useState("");
    const[todoList, setTodoList] = useState([]);
    const[editedTodo, setEditetTodo] = useState(null);
    const [isSelected, setSelection] = useState(false);

    // Crear tarea
    const handlerAddTodo = () =>{
       // {
        //    id:
       //     tittle:
       // }
       if(todo === ""){
        return;
    }
        setTodoList([...todoList, {id: Date.now().toString(), tittle: todo }]);
        setTodo("")   
    };

    //Borrar tarea
    const handlerDeleteTodo = (id) =>{

        const updateTodoList = todoList.filter((todo)=> todo.id !== id)

         setTodoList(updateTodoList);
     };

    //Editar tareas
     const handlerEditTodo = (todo) =>{
        setEditetTodo(todo);
        setTodo(todo.tittle);
     }

    //Actualizar tarea
     const handlerUpdateTodo = () =>{
        const UpdatedTodos = todoList.map((item)=>{
            if(item.id === editedTodo.id){
                return {...item, tittle: todo}
            }
            return item
        });
        setTodoList(UpdatedTodos);
        setEditetTodo(null);
        setTodo("");
     }



     //Mostrar tareas
    const renderTodos = ({item, index}) =>{
        return(
            <View style={{
                backgroundColor: "#1e90ff",
                borderRadius: 6,
                marginHorizontal:6,
                paddingVertical:8,
                marginBottom: 12,
                flexDirection: "row",
                alingItems: "center",
                shadowColor: "#0000",
                shadowOffset: {width:0, height: 2},
                shadowOpacity: 1,
                shadowRadius:3,
                elevation: 1
            }}>
                <Text style={{
                    color:"#fff",
                    fontSize:20,
                    fontWeight: "800",
                    flex: 1
                }}>{item.tittle}</Text>
                <IconButton icon = "pencil" iconColor="#C0C0C0" onPress={()=> handlerEditTodo(item)}/>
                <IconButton icon = "trash-can" iconColor="#C0C0C0" onPress = {()=> handlerDeleteTodo(item.id)}/>
            </View>
        )
    }

    return(
        <View style={{marginHorizontal: 16}}>
            <TextInput
                style={{
                    borderWidth:2,
                    borderColor:"#1e90ff",
                    borderRadius:6,
                    paddingVertical:8,
                    paddingHorizontal:16,
                    marginTop:35,
                }}
                placeholder="Add a task"
                value ={todo}
                onChangeText={(userText)=> setTodo(userText)}
            />
          {
            editedTodo ?   <TouchableOpacity 
            style={{
                backgroundColor:"#000",
                borderRadius:6, 
                paddingVertical:8,
                marginVertical:24,
                alignItems: "center",
                }}
                onPress={()=> handlerUpdateTodo()}
                >
                <Text style={{
                    color:"#fff", 
                    fontWeight:"bold", 
                    fontSize:20}}>Save</Text>
            </TouchableOpacity>:
              <TouchableOpacity 
              style={{
                  backgroundColor:"#000",
                  borderRadius:6, 
                  paddingVertical:8,
                  marginVertical:24,
                  alignItems: "center",
                  }}
                  onPress={()=> handlerAddTodo()}
                  >
                  <Text style={{color:"#fff", fontWeight:"bold", fontSize:20}}>Add</Text>
              </TouchableOpacity>
          }


                <FlatList data ={todoList} renderItem={renderTodos}/>

                {
                    todoList.length <= 0 && <Fallback/>
                }
        </View>

    )
}

export default TodoScreen;

const styles = StyleSheet.create({})
