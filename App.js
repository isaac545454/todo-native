import 
{ 
  StyleSheet, 
  Text, 
  View, 
  StatusBar,
  TextInput,
  TouchableOpacity, 
  FlatList
}
 from 'react-native';
 import {useState} from 'react'
 import Card from './src/components/List'
 import None from './src/components/None';
 

export default function App() {
  const [tarefa, setTarefa] = useState("")
  const [list, setList] = useState([])

  const handleAdd = ()=>{
    if(tarefa === ''){
      return
    }
    const data = {
      key: Date.now(),
      item: tarefa
    }
    setList([...list, data])
    setTarefa("")
  }

  const handleDelete = (item)=>{
    let data = list.filter((tarefa)=>{
      return(tarefa.item !== item.item)
    })
    setList(data)
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor='#22272e' />
      <Text style={styles.title}>Tarefas</Text>
      <View style={styles.viewInput}>
      <TextInput 
      placeholder="digite sua tarefa..." 
      style={styles.input} 
      onChangeText={(text)=>setTarefa(text)}
      value={tarefa}
      />
      <TouchableOpacity style={styles.btnAdd} onPress={handleAdd}>
           <Text style={styles.textAdd}>+</Text>
      </TouchableOpacity>
      </View>


      <FlatList
      data={list}
      keyExtractor={(item)=> item.key}
      renderItem={({item})=> <Card item={item.item} deleteItem={()=>handleDelete(item)} />}
      style={styles.flatlist}
      ListEmptyComponent={()=><None />}
      ListFooterComponent={()=>{list.length && (
      <Text style={styles.footer}>a {list.length} para fazer</Text>)}}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#22272e',
    
  },
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    margin: '5%'
  },
  viewInput:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 25,
  },
  input:{
    width: "75%",
    backgroundColor: '#fff',
    paddingHorizontal: 15,  
    height: 44,
    borderRadius: 5
  },
  btnAdd:{
    height: 44,
    width: 50,
    backgroundColor: '#73F7FF',
    marginStart: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  },
  textAdd:{
    color: '#fff',
    fontSize: 30
  }, 
  flatlist:{
    flex: 1,
    backgroundColor: '#fff',
  },
  footer:{
    marginVertical: '7%',
    marginHorizontal: '5%',
    fontWeight: 'bold',
  }
  
});
