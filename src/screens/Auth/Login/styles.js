import { StyleSheet, Platform } from 'react-native';
import { colors }from '../../../styles';

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
    },
    header: {
        backgroundColor: colors.white,
        ...Platform.select({
            android: {
                elevation: 0,
            },
        }),

        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    headerTitle: {
        fontWeight: '300',
    },
    inputContainer: {
        height: 75,
        width: '100%',
    },
    botoomContainer: {
        height: 75,
        backgroundColor: colors.primary,
        width: '100%',
    },
    emailInput: {
        width: '100%',
        borderColor: colors.borderColor,
        borderWidth: 1,
        height: 48,
        borderRadius: 5,
        paddingHorizontal: 8,
    },
    emailContainer: {
        justifyContent: 'center',
        width: '100%',
        paddingHorizontal: 16,
    },
    emailLabel: {
        color: colors.primary,
    },
    emailFocus: {
        borderColor: colors.primary,
    },
    passwordInput: {
        width: '100%',
        borderColor: colors.borderColor,
        borderWidth: 1,
        height: 48,
        borderRadius: 5,
        paddingHorizontal: 8,
    },
    passwordContainer: {
        justifyContent: 'center',
        width: '100%',
        paddingHorizontal: 16,
    },
    passwordLabel: {
        color: colors.primary,
    },
    passwordFocus: {
        borderColor: colors.primary,
    },
});

export default styles;