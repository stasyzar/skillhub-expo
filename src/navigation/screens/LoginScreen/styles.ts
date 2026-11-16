import EStyleSheet from 'react-native-extended-stylesheet';
import { FONTS } from '@theme/index';

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
    fontSize: 28,
    color: '$text',
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: FONTS.regular,
    fontSize: 16,
    color: '$textSecondary',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '$primary',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 10,
  },
  buttonText: {
    fontFamily: FONTS.medium,
    fontSize: 16,
    color: '#FFFFFF',
  },
});