import EStyleSheet from "react-native-extended-stylesheet";
import { FONTS } from '@theme/index';

export default EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '$background',
  },
  searchWrapper: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 8,
  },
  searchInput: {
    backgroundColor: '$surface',
    borderColor: '$border',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontFamily: FONTS.regular,
    fontSize: 15,
    color: '$text',
  },
  listContent: {
    flexGrow: 1,
    padding: 16,
  },
  centerBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 32,
  },
  emptyText: {
    fontFamily: FONTS.medium,
    fontSize: 15,
    color: '$textSecondary',
  },
});