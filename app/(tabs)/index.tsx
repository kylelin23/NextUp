import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style = {styles.screen}>
      <Text>Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'center', 
    flex: 1, 
    alignItems: 'center',
  }
});
