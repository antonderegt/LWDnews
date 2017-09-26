import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  title:{
    fontSize:30,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 20
  },
 
  input: {
    height: 40,
    paddingLeft: 10,
    marginBottom: 10,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: "#fff",
    width: 300
  },

  mindef: {
    height: 40,
    paddingLeft: 10,
    marginBottom: 10,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: "gray",
    width: 150,
    fontSize: 18,
    lineHeight: 32,
  },

  email: {
    width: 150
  },
 
  container: {
    flex: 1,
    paddingLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 10,
    backgroundColor: "darkgray",
  },

  scrollContainer: {
    backgroundColor: 'white'
  }
})
