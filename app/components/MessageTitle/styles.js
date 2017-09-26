import { StyleSheet } from 'react-native'
import { constants } from '../../config/styles'

export default StyleSheet.create({
  row: {
    borderTopColor: constants.kluOrange,
    borderTopWidth: 1,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20
 },
  title: {
    color: constants.kluBlue,
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 5
  }
})
