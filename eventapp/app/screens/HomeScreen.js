import React from 'react';
import { View, StyleSheet,Text, Image } from 'react-native';

function HomeScreen(props) {
    return (
        <View style={styles.container}>

            <View style={styles.headerimg}>
              <Image style={styles.headerimg} source={require('../assets/header.png')} />
            </View>
            
            <View style={styles.bodyrow1}>
            <View>
              <Image style={styles.img} source={require('../assets/info.png')} />
              <Text style={styles.text}>Event Info</Text>
              </View>

              <View>
              <Image style={styles.img} source={require('../assets/Sponsors.png')} />
              <Text style={styles.text}>Sponsors</Text>
              </View>

              <View>
              <Image style={styles.img} source={require('../assets/badge.png')} />
              <Text style={styles.text}>My badge</Text>
              </View>
            </View>
            <View style={styles.bodyrow2}>
            <View>
              <Image style={styles.img} source={require('../assets/Agenda.png')} />
              <Text style={styles.text}>Agenda</Text>
              </View>

              <View>
              <Image style={styles.img} source={require('../assets/Subjects.png')} />
              <Text style={styles.text}>Subjects</Text>
              </View>

              <View>
              <Image style={styles.img} source={require('../assets/Scanner.png')} />
              <Text style={styles.text}>Scanner</Text>
              </View>
            </View>
            <View style={styles.bodyrow3}>
            <View>
              <Image style={styles.img} source={require('../assets/Feedback.png')} />
              <Text style={styles.text}>Feedback</Text>
              </View>

              <View>
              <Image style={styles.img} source={require('../assets/my.png')} />
              <Text style={styles.text}>My Profile</Text>
              </View>

              <View>
              <Image style={styles.img} source={require('../assets/Floor.png')} />
              <Text style={styles.text}>Floor</Text>
              </View>
            </View>
        </View>
        
        
       
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        flexDirection: "column"
        
    },
    img: {
        width: 80,
        height: 80,
    },
    headerimg:{
        flex: 2,
        paddingTop: 5,
        width: 400,
        height: 300,
        justifyContent: "center",
        alignItems: "center"
    },
    bodyrow1:{
        flex: 2,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#fff",
        
    },
    bodyrow2:{
        flex: 2,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#fff",
        
    },
    bodyrow3:{
        flex: 2,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#fff",
        
    },
    text:{
        marginLeft: 10,
    }
})

export default HomeScreen;