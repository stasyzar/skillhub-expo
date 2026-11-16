import EStyleSheet from "react-native-extended-stylesheet";
import { FONTS } from "@theme/index";

export const styles = EStyleSheet.create({
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
        marginBottom: 8,
    },
    subtitle: {
        fontFamily: FONTS.regular,
        fontSize: 16,
        color: '$textSecondary',
    },
    button: {
        backgroundColor: '#EF4444',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 10,
        marginTop: 20,
    },
    buttonText: {
        fontFamily: FONTS.medium,
        fontSize: 15,
        color: '#FFFFFF',
    },
});