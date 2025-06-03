import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  const handlePress = () => {
    Alert.alert("Assignment 1 Completed");
  };

  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <Text style={styles.time}>5:26</Text>
        <Text style={styles.title}>OOTD_EVERYDAY</Text>
      </View>

      {/* Post */}
      <View style={styles.post}>
        {/* User Info */}
        <View style={styles.userInfo}>
          <Image
            style={styles.photo}
            source={{
              uri: "https://i.pinimg.com/736x/2a/fe/e1/2afee127c87029f5440654d4c3652bf4.jpg",
            }}
          />
          <Text style={styles.username}>ootd_everyday</Text>
        </View>

        {/* Image */}
        <Image
          style={styles.mainImage}
          source={{
            uri: "https://i.pinimg.com/736x/2a/fe/e1/2afee127c87029f5440654d4c3652bf4.jpg",
          }}
        />

        <View style={styles.actionRow}>
          {/* heart, chatbubble, paper-plane button left */}
          <View style={styles.actionRow}>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="heart-outline" size={28} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="chatbubble-outline" size={28} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="paper-plane-outline" size={28} />
            </TouchableOpacity>
          </View>
          {/* bookmark button left */}
          <TouchableOpacity style={styles.bookmarkButton}>
            <Ionicons name="bookmark-outline" size={28} />
          </TouchableOpacity>
        </View>

        {/* Likes & Description */}
        <Text style={styles.likes}>Liked by paisley.print.48 and 7 others</Text>
        <Text style={styles.caption}>
          <Text style={styles.bold}>frenchie_fry39 </Text>
          Fresh shot on a sunny day! ☀️
        </Text>

        {/* Clickable UI */}
        <TouchableOpacity onPress={handlePress} style={styles.button}>
          <Text style={styles.buttonText}>Click Me</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topBar: {
    paddingTop: 40,
    paddingBottom: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
  },
  time: {
    position: "absolute",
    left: 10,
    top: 40,
    fontSize: 16,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  post: {
    padding: 10,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  photo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontWeight: "bold",
    fontSize: 16,
  },
  mainImage: {
    width: "100%",
    height: 350,
    backgroundColor: "#eee",
    borderRadius: 10,
  },
  actionRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    justifyContent: "space-between",
  },
  iconButton: {
    marginRight: 15,
  },
  leftIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  bookmarkButton: {
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  likes: {
    marginTop: 10,
    fontWeight: "500",
  },
  caption: {
    marginTop: 5,
  },
  bold: {
    fontWeight: "bold",
  },
  button: {
    marginTop: 15,
    backgroundColor: "#f04242",
    padding: 10,
    alignItems: "center",
    borderRadius: 6,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
