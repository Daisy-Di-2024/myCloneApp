import React from "react";
import { useState } from 'react';


import {
  View,
  Text,
  Image,
  StyleSheet,
  Alert,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  const [liked, setLiked] = useState(false);
  const handlePress = () => {
    Alert.alert("Assignment 1 Completed");
  };

  return (
    <SafeAreaView style={style2.container}>
      {/* Top Bar */}
      <View style={style2.topBar}>
        {/* <Text style={styles.time}>5:26</Text> */}
        <TouchableOpacity style={style2.backButton}>
          <Ionicons name="chevron-back" size={36} color="#000" />
        </TouchableOpacity>
        <Text style={style2.subtitle}>OOTD_EVERYDAY</Text>
        <Text style={style2.title}>POSTS</Text>
      </View>

      {/* Post */}
      <View style={style2.post}>
        {/* User Info */}
        <View style={style2.postHeader}>
          <View style={style2.avatarNameRow}>
            <Image
              style={style2.photo}
              source={{
                uri: "https://i.pinimg.com/736x/2a/fe/e1/2afee127c87029f5440654d4c3652bf4.jpg",
              }}
            />
            <Text>
              <Text style={style2.username}>ootd_everyday</Text>
              {"\n"}
              <Text style={style2.subtitle}>via frenchie_fry39</Text>
            </Text>
          </View>
          <TouchableOpacity style={style2.moreButton}>
            <Ionicons name="ellipsis-horizontal" size={20} color="#000" />
          </TouchableOpacity>
        </View>
        {/* Image */}
        <Image
          style={style2.mainImage}
          source={{
            uri: "https://i.pinimg.com/736x/2a/fe/e1/2afee127c87029f5440654d4c3652bf4.jpg",
          }}
        />

        <View style={style2.actionRow}>
          {/* heart, chatbubble, paper-plane button left */}
          <View style={style2.actionRow}>
            <TouchableOpacity style={style2.iconButton} onPress={() => setLiked(!liked)}>
  <Ionicons
    name={liked ? "heart" : "heart-outline"}
    size={28}
    color={liked ? "red" : "black"}
  />
</TouchableOpacity>

            <TouchableOpacity style={style2.iconButton}>
              <Ionicons name="chatbubble-outline" size={28} />
            </TouchableOpacity>
            <TouchableOpacity style={style2.iconButton}>
              <Ionicons name="paper-plane-outline" size={28} />
            </TouchableOpacity>
          </View>
          {/* bookmark button left */}
          <TouchableOpacity style={style2.bookmarkButton}>
            <Ionicons name="bookmark-outline" size={28} />
          </TouchableOpacity>
        </View>

        {/* Likes & Description */}
        <Text style={style2.likes}>Liked by paisley.print.48 and 7 others</Text>
        <Text style={style2.caption}>
          <Text style={style2.bold}>frenchie_fry39 </Text>
          Fresh shot on a sunny day! ☀️
        </Text>

        <Text style={style2.viewComments}>View all 12 comments</Text>
        <Text style={style2.commentText}>
          <Text style={style2.bold}>lil_wyatt838 </Text>
          Awesome tones
        </Text>
        <Text style={style2.commentText}>
          <Text style={style2.bold}>pia.in.a.pod </Text>
          Gorg. Love it! ❤️
        </Text>
        <Text style={style2.commentText}>
          <Text style={style2.bold}>s.samarbeer </Text>
          faboulous! 😍
        </Text>

        {/* Clickable UI */}
        <TouchableOpacity onPress={handlePress} style={style2.button}>
          <Text style={style2.buttonText}>Click Me</Text>
        </TouchableOpacity>
      </View>
      <View style={style2.bottomNav}>
        <TouchableOpacity style={style2.navButton}>
          <Ionicons name="home-outline" size={28} />
        </TouchableOpacity>
        <TouchableOpacity style={style2.navButton}>
          <Ionicons name="search-outline" size={28} />
        </TouchableOpacity>
        <TouchableOpacity style={style2.navButton}>
          <Ionicons name="videocam-outline" size={28} />
        </TouchableOpacity>
        <TouchableOpacity style={style2.navButton}>
          <Ionicons name="bag-outline" size={28} />
        </TouchableOpacity>
        <TouchableOpacity style={style2.navButton}>
          <Ionicons name="person-outline" size={28} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => setLiked(!liked)}>
</TouchableOpacity>

    </SafeAreaView>
    
  );
}


const style1 = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heart: {
    fontSize: 40,
    color: 'gray',
  },
  liked: {
    color: 'red',
  },
});
const style2 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topBar: {
    height: 100,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 8,
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
  },
  time: {
    position: "absolute",
    left: 10,
    top: 40,
    fontSize: 16,
    color: "#000",
  },
  backButton: {
    position: "absolute",
    left: 15,
    padding: 4,
  },
  subtitle: {
    fontSize: 12,
    color: "#7c7878",
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  post: {
    flex: 1,
    padding: 10,
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  avatarNameRow: {
    flexDirection: "row",
    alignItems: "center",
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
  nameContainer: {
    flexDirection: "column",
  },
  username: {
    fontWeight: "bold",
    fontSize: 16,
  },
  viaText: {
    fontSize: 12,
    color: "#666",
  },
  moreButton: {
    paddingHorizontal: 8,
    paddingVertical: 4,
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
  viewComments: {
    marginTop: 5,
    color: "#999",
    fontSize: 14,
  },
  commentText: {
    marginTop: 3,
    fontSize: 14,
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
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    borderTopColor: "#ddd",
    borderTopWidth: 1,
    backgroundColor: "#fff",
  },
  navButton: {
    flex: 1,
    alignItems: "center",
  },

});
