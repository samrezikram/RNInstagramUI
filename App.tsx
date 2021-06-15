 import React, { Component } from "react";
 import { StyleSheet, View, Text, Image, TouchableOpacity, FlatList, Dimensions } from "react-native";
 const screenWidth = Dimensions.get("window").width;
 const images = [
   {image: "https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces", key: 1},
   {image: "https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop", key: 2},
   {image: "https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=500&h=500&fit=crop", key: 3},
   {image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop", key: 4},
   {image: "https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=500&h=500&fit=crop", key: 5},
   {image: "https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=500&h=500&fit=crop", key: 6},
   {image: "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=500&h=500&fit=crop", key: 7},
   {image: "https://images.unsplash.com/photo-1515814472071-4d632dbc5d4a?w=500&h=500&fit=crop", key: 8},
   {image: "https://images.unsplash.com/photo-1511407397940-d57f68e81203?w=500&h=500&fit=crop", key: 9},
   {image: "https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?w=500&h=500&fit=crop", key: 10},
   {image: "https://images.unsplash.com/photo-1505058707965-09a4469a87e4?w=500&h=500&fit=crop", key: 11},
   {image: "https://images.unsplash.com/photo-1423012373122-fff0a5d28cc9?w=500&h=500&fit=crop", key : 12},
   {image: "https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces", key: 13},
   {image: "https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop", key: 14},
   {image: "https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=500&h=500&fit=crop", key: 15},
   {image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop", key: 16},
   {image: "https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=500&h=500&fit=crop", key: 17},
   {image: "https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=500&h=500&fit=crop", key: 18},
   {image: "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=500&h=500&fit=crop", key: 19},
   {image: "https://images.unsplash.com/photo-1515814472071-4d632dbc5d4a?w=500&h=500&fit=crop", key: 20},
   {image:"https://images.unsplash.com/photo-1511407397940-d57f68e81203?w=500&h=500&fit=crop", key: 21},
   {image: "https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?w=500&h=500&fit=crop", key: 22},
   {image:"https://images.unsplash.com/photo-1505058707965-09a4469a87e4?w=500&h=500&fit=crop", key: 23},
   {image: "https://images.unsplash.com/photo-1423012373122-fff0a5d28cc9?w=500&h=500&fit=crop", key: 24}
 ];
 export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.imgProfileContainer}>
            <Image source={{uri: "https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=500&h=500&fit=crop"}} style={styles.imgProfile} />
          </View>
          <View style={styles.userInfoContainer}>
            <View style={styles.userInfo}>
              <View style={styles.figure}>
                <Text style={styles.posts}>Posts</Text>
                <Text style={styles.posts}>{images.length}</Text>
              </View>
              <View style={styles.figure}>
                <Text style={styles.followers}>Followers</Text>
                <Text style={styles.followers}>200</Text>
              </View>
              <View style={styles.figure}>
                <Text style={styles.following}>Following</Text>
                <Text style={styles.following}>218</Text>
              </View>
            </View>
            <View styles={styles.actionButtons}>
              <TouchableOpacity style={styles.editProfileButton}>
                <Text>Edit Profile</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <FlatList style={styles.listView}
          data={images}
          renderItem={({item}) => (
            <View style={styles.itemGallery}>
            <Image source={{ uri: item.image }} style={styles.imgGallery} resizeMode="stretch" />
          </View>
          )}
          numColumns={3}
          keyExtractor={(item, index) => item.key.toString()}
          >
        </FlatList>
      </View>
    );
  }
}

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: "#fff"
   },
   header: {
     paddingTop: 70,
     flexDirection: "row",
     justifyContent: "space-between"
   },
   userInfoContainer: {
     paddingTop: 20,
   },
   userInfo: {
     padding: 10,
     flexDirection: "row",
     alignItems: "center",
     justifyContent: "space-between",
   },
   imgProfileContainer: {
     padding: 10,
     flexDirection: "column"
   },
   imgProfile: {
     width: 100,
     height: 100,
     borderRadius: 50
   },
   figure: {
    marginHorizontal: 15
   },
   posts: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: 'center'
   },
   followers: {
     fontSize: 12,
     fontWeight: "bold",
     textAlign: "center"
   },
   following: {
     fontSize: 12,
     fontWeight: "bold",
     textAlign: 'center'
   },
   actionButtons: {},
   editProfileButton: {
     margin: 10,
     backgroundColor: "#f4f4f4",
     shadowOffset: { width: 2, height: 4 },
     shadowColor: "#fff",
     padding: 4,
     alignItems: "center"
   },
   listView: {
     marginTop: 10
   },
   imgGallery: {
     width: screenWidth / 3,
     height: screenWidth / 3,
     borderWidth: 1,
     borderColor: "#fff"
   },
   itemGallery: {
     width: screenWidth / 3
   }
 });