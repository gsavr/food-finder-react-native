import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { ResultsDetail } from "./resultsDetail";

export const ResultsList = (props) => {
  const { title, results, navigation } = props;
  /* in v5 and higher use hook - useNavigation */

  return (
    <>
      {results.length > 0 && (
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={(result) => result.id}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("ResultsShow", { id: item.id })
                  }
                >
                  <ResultsDetail item={item} />
                </TouchableOpacity>
              );
            }}
          />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginVertical: 5,
  },
});
