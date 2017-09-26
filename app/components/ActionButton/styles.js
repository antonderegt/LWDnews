import { StyleSheet } from 'react-native';
import { constants } from '../../config/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center' 
  },
  button: {
    height: 50,
    backgroundColor: constants.kluBlue,
    alignSelf: 'stretch',
    marginTop: 10,
    marginLeft: 60,
    marginRight: 60,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
  },
  buttonText: {
    fontSize: 22,
    color: '#FFF',
    alignSelf: 'center'
  },
})
