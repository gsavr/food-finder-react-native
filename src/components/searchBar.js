import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const SearchBar = (props) => {
  const { searchTerm, onSearchTermChange, onSearchTermSubmit } = props;

  return (
    <View style={styles.background}>
      <Ionicons name="search" color="black" style={styles.iconsStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Search"
        value={searchTerm}
        onChangeText={onSearchTermChange}
        onEndEditing={onSearchTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#e5e5e5",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    marginTop: 10,
    flexDirection: "row",
    marginBottom: 10,
    //alignItems: "center",
  },
  inputStyle: {
    flex: 1,
    marginRight: 5,
    fontSize: 18,
  },
  iconsStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 10,
  },
});
