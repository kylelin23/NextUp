import { StyleSheet, Text, View } from 'react-native';

export default function JoinGroup() {
  return (
    <View style = {styles.screen}>
      <Text>Join Group/Make Friend Page</Text>
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
