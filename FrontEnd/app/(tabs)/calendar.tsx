import { StyleSheet, Text, View } from 'react-native';

export default function Calendar() {
  return (
    <View style = {styles.screen}>
      <Text>Calendar Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1, 
    alignItems: 'center',
    paddingTop: 50,
  }, 
});
