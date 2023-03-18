import {Text, StyleSheet} from 'react-native';

const Header =() => {
    return <Text style={Style.text}>Calculator</Text>
}

const Style = StyleSheet.create({
   text: {
    fontSize: 32,
    color: 'white',
    textAlign: 'center'
   }
    
})

export default Header;