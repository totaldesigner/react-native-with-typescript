import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class App extends React.Component<any, any> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>I LOVE YOU</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#808080',
    fontSize: 30,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    textShadowColor: '#efefef',
  }
})