import { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";
import * as Progress from "react-native-progress";

export const ResultsShowScreen = (props) => {
  const { navigation } = props;
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");

  const getRestaurantDetails = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getRestaurantDetails(id);
  }, []);

  return (
    <>
      {result ? (
        <View>
          <Text style={styles.name}>
            {result.name} - {result.price}
          </Text>
          <Text style={styles.details}>
            {result.location.address1}, {result.location.city}
          </Text>
          <Text style={styles.details}>{result.display_phone}</Text>
          <Text style={styles.details}>
            Currently {!result.is_Closed ? "Open" : "Closed"}
          </Text>
          <FlatList
            data={result.photos}
            keyExtractor={(photo) => photo}
            renderItem={({ item }) => {
              return <Image style={styles.image} source={{ uri: item }} />;
            }}
          />
        </View>
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
  progress: {
    marginTop: 150,
    alignSelf: "center",
  },
  name: {
    alignSelf: "center",
    marginVertical: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  details: {
    alignSelf: "center",
    marginVertical: 4,
  },
  image: {
    height: 200,
    width: 300,
    alignSelf: "center",
    marginVertical: 5,
  },
});
