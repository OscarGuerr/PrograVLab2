//ejer4
import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import './Sentence.css';

const Sentence = () => {
    const [oracion, setName] = useState();
    
    return (
        <div className='divss'>
            <View>
                <TextInput placeholder="Ingresa la Oración"
                            onChangeText={text => setName(text)}
                    />
                <Text>: {oracion}</Text>
            </View>
        </div>
        
   );
}
export default Sentence;