import { StyleSheet, Text, View } from 'react-native';

export default function ProfileBuilder() {
  return (
    <View style = {styles.screen}>
      <Text>Profile Builder Page</Text>
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
