import { Text, StyleSheet, Pressable } from 'react-native';

const Button = ({ text, color, isZero, onPress }) => {
    return <Pressable
        onPress={onPress}
        style={{ ...Style.button, backgroundColor: color, width: isZero ? 160 : 80 }}  >
        <Text style={Style.text}>{text}</Text>
    </Pressable>
}

const Style = StyleSheet.create({
    button: {
        height: 80,
        borderRadius: 24,
        backgroundColor: '#E68383',
        justifyContent: 'center'
    },
    text: {
        fontSize: 32,
        color: 'white',
        textAlign: 'center',
        lineHeight: 39
    }

})

export default Button;