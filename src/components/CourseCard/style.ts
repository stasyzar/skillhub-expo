import EStyleSheet from 'react-native-extended-stylesheet';
import { FONTS } from '@/theme';

export default EStyleSheet.create({
  card: {
    backgroundColor: '$surface',
    borderColor: '$border',
    borderWidth: 1,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  title: {
    fontFamily: FONTS.bold,
    fontSize: 16,
    color: '$text',
    marginBottom: 8,
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  badge: {
    fontFamily: FONTS.medium,
    fontSize: 13,
    color: '$primary',
  },
  duration: {
    fontFamily: FONTS.regular,
    fontSize: 13,
    color: '$textSecondary',
  },
});