import React from 'react'
import { StyleSheet, View, Button, TextInput} from 'react-native'

class Search extends React.Component {
  render() { return(
    <View style = {styles.main_container}>
    <TextInput style={styles.textinput} placeholder="Titre du film"/>
    <Button title="Rechercher" onPress={() => {}} />
    </View>
  )
}
}

const styles_basic = {
  main_container: {
    flex: 1,
    marginTop: 20
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  }
}

const styles = StyleSheet.create(styles_basic)

export default Search
