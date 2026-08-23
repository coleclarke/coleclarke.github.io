import { Text, View, StyleSheet } from "react-native";
import { Link, Stack } from 'expo-router';
export default function Index() {
  return (
    <>
    <Stack.Screen options={{ title: 'My Projects'}} />
    <View style={styles.container}>
      <Text style={styles.text}>Edit src/app/index.tsx to edit this screen.</Text>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  Screen: {
    backgroundColor: "#0e0b1a",
  },
  container: {
    flex: 1,
    backgroundColor: "#0e0b1a",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    textAlign: "left",
  },
});
