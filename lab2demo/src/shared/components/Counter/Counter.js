//Ejercicio 2
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import './Counter.css';

const Counter = () => {
    const [count, setCount] = useState(0);
   return (
       <div className='divs'>
            <View>
                <Button 
                    onPress={() => {setCount(count + 1)}} title="Haz Click"
                />           
                <Text>Me han clicleado {count} veces</Text>
            </View>
       </div>
        
   );
}
export default Counter;