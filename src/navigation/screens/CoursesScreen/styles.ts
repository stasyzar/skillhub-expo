import EStyleSheet from "react-native-extended-stylesheet";
import { FONTS } from '@theme/index';

export default EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '$background',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
    },

    title: {
        fontFamily: FONTS.bold,
        fontSize: 24,
        color: '$text',
        marginBottom: 16,
    },
    button: {
        backgroundColor: '$primary',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    buttonText: {
        fontFamily: FONTS.medium,
        fontSize: 15,
        color: '#FFFFFF',
    },
});