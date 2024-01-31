import { StyleSheet, Text, View, Image } from 'react-native';

const App = ()=>{
  return(
    <View style={styles.container}>
      <Text style={styles.textHelloWorld}>Hola mundo</Text>
      <Image source={require('./assets/1.jpg')} style={{ width: 200, height: 200}}/>
      <Text style={styles.textName}>Me llamo Diego</Text>
      <Text>Hola, esta es mi primer app de la clase.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    height:'100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems:'center'
  },
  textHelloWorld:{
    fontSize:20,
    fontWeight:'bold',
    color:'#0c181c',
    fontFamily:'Helvetica'
  },
  textName:{
    fontSize:12,
    fontWeight:'300',
    color:'red',
  }

})
export default App;
