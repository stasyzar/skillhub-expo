import {Text, View} from 'react-native';
import {styles} from './styles'

export function ProfileScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile</Text>
            <Text style={styles.subtitle}>Settings and your profile</Text>
        </View>
    )
}