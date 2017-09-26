import { StyleSheet } from 'react-native';
import { constants } from '../../config/styles.js'

export default StyleSheet.create({
  li: {
    backgroundColor: '#fff',
    borderBottomColor: '#f2f2f2',
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 7,
    paddingBottom: 8,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  liText: {
    color: '#333',
    fontSize: 16,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 20
  }
})
