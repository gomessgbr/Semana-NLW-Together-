import React from 'react';
import { View, Text , FlatList} from 'react-native';
import { GuildProps } from '../../components/Guild';
import { Guild } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';

import { styles } from './styles';

type Props={
    handleGuildsSelect: (guild: GuildProps)=> void;
}

export function Guilds ({ handleGuildsSelect}: Props){

    const guilds=[
        {
            id: '1',
            name : 'Lendários',
            icon:null,
            owner: true
        }
    ]
    return(
        <View style={styles.container}>            
            <FlatList
                data={guilds}
                keyExtractor={item=> item.id}
                renderItem={({item})=>(
                    <Guild 
                    data={item}
                    onPress={()=> handleGuildsSelect(item)}
                    
                    />
                )}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={()=> <ListDivider/>}
                style={styles.guilds}
            />
                        
        </View>
    )
}