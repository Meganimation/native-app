import React from 'react';
import { StyleSheet, Text, View, Image, Alert, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, SafeAreaView, Button } from 'react-native';

export default function App() {

const clickedButton=()=>{
  return Alert.alert('My title', 'My message', [
    {text: 'Yeah', onPress: ()=>{alert('OK sick!')}},
    {text: 'Nah'}
  ])
}

const clickedButton2=()=>{
  return Alert.prompt('My title', 'My message', text => alert(`You said ${text}`))
}



  return (
    <SafeAreaView style={[styles.container, testContainer]}>
      <Text style={[styles.container2, testContainer]}>Ayy</Text>
      <Text >This is my first native app yayoo!</Text>
      <Text numberOfLines={20}>Debugging this thing is kinda awkward at first. Remember the make sure if you're debugging in VScode to make sure the debugging browser tab is closed! And highlight a line by clicking next to it, it will show a red dot! :))))  </Text>
      <TouchableOpacity onPress={()=>{console.log('clicked!')}}>
      <Image source={require('./assets/icon.png')} />
      </TouchableOpacity>
      
      <TouchableHighlight onPress={()=>{console.log('clicked!')}}>
      <Image source={{
        width: 200,
        height: 300,
        uri: 'https://picsum.photos/200/300'}}
        blurRadius={5}
         />
      </TouchableHighlight>
      <Button color='black' title='Alert.alert' onPress={clickedButton} />
      <Button color='black' title='Alert.prompt' onPress={clickedButton2} />
    </SafeAreaView>
  );
}
const testContainer = {backgroundColor: 'orange'}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container2: {
    fontStyle: 'italic',
    fontSize: 50,
    paddingTop: 75
  },
});
