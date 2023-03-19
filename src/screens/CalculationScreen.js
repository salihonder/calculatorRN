import { View, StyleSheet, Text } from 'react-native';

const CalculationScreen = ({ input, output }) => {
    return <View style={Style.container}>
        <Text style={Style.input}>{input}</Text>
        <Text style={Style.output}>{output}</Text>
    </View>
}

const Style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(172, 222, 180, 1)',
        borderRadius: 24,
        marginHorizontal: 24,
        marginVertical: 16,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 10
    },
    output: {
        color: '#000000',
        fontSize: 80,
        lineHeight: 95,
        fontWeight: '500'
    },
    input: {
        color: '#000000',
        fontSize: 50,
        lineHeight: 60,
        fontWeight: '500'
    }

})

export default CalculationScreen;