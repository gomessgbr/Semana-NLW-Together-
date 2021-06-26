import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        
        flexDirection: 'row',
    },
    user: {
        flexDirection: 'row',
        
    },
    greeting: {
        fontFamily: theme.fonts.text500,
        fontSize: 24,
        color: theme.colors.heading,
        marginRight: 5
    },
    username :{
        fontFamily: theme.fonts.title700,
        fontSize: 24,
        color: theme.colors.heading,
        marginTop: 3.2
        
    },
    message: {
        fontFamily: theme.fonts.text400,
        color: theme.colors.highlight
    } 

});