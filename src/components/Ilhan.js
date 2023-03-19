import {Text, StyleSheet} from 'react-native';

const Ilhan =() => {
    return <Text style={Style.text}>Ilhan</Text>
}

const Style = StyleSheet.create({
   text: {
    fontSize: 32,
    color: 'green',
    textAlign: 'center'
   }
    
})

export default Ilhan;