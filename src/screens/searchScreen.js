import { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { ResultsList } from "../components/resultsList";
import { SearchBar } from "../components/searchBar";
import useYelpApi from "../hooks/useYelpApi";
import * as Progress from "react-native-progress";

export const SearchScreen = (props) => {
  const { navigation } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const [searchApi, results, error, loading] = useYelpApi();

  const filterResultsByPrice = (price) => {
    //price === '$' || '$$' || '$$$'
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        searchTerm={searchTerm}
        onSearchTermChange={(newTerm) => setSearchTerm(newTerm)}
        onSearchTermSubmit={() => searchApi(searchTerm)}
      />
      {/* <Text>We have found {results.length} results</Text> */}
      {error && (
        <Text style={styles.error}>Something went wrong, please try again</Text>
      )}
      {!loading ? (
        <ScrollView>
          <ResultsList
            title="I'm Broke"
            results={filterResultsByPrice("$")}
            navigation={navigation}
          />
          <ResultsList
            title="Just Got Paid"
            results={filterResultsByPrice("$$")}
            navigation={navigation}
          />
          <ResultsList
            title="Let's Celebrate"
            results={filterResultsByPrice("$$$")}
            navigation={navigation}
          />
          <ResultsList
            title="Make It Rain"
            results={filterResultsByPrice("$$$$")}
            navigation={navigation}
          />
        </ScrollView>
      ) : (
        <Progress.Bar
          progress={0.3}
          width={200}
          indeterminate={true}
          color={"black"}
          style={styles.progress}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  error: {
    fontSize: 16,
    color: "red",
    marginLeft: 15,
  },
  progress: {
    marginTop: 150,
    alignSelf: "center",
  },
});
