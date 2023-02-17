import { View, Image, Text, StyleSheet } from "react-native";

export const ResultsDetail = (props) => {
  const { item } = props;
  const { name, image_url, rating, review_count } = item;

  return (
    <View style={styles.container}>
      <Image source={{ uri: image_url }} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text>
        {rating} Stars, {review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
