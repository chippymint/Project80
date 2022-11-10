import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class DailyPicScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>DailyPic Screen!</Text>
            </View>
        )
    }
}   

renderImage = (url) => {
    <Image source={{ "uri": url }} style={{ width: "100%", height: 300, borderRadius: 20, margin: 3 }}></Image>
}

renderVideo = () => {
    <TouchableOpacity style={styles.listContainer}
        onPress={() => Linking.openURL(this.state.apod.url).catch(err => console.error("Couldn't load page", err))}
    >
        <View style={styles.iconContainer}>
            <Image source={require("../assets/play-video.png")} style={{ width: 50, height: 50 }}></Image>
        </View>
    </TouchableOpacity >
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
}
