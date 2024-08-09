import * as React from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import { Video, ResizeMode } from 'expo-av';

const VideoGalery = () => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  return (
    <View style={styles.container}>
      <Text>Video Galery</Text>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'https://imgb.ifunny.co/videos/25d4a5756cc1d8d4f2b05da02bc4e73f3d3ceee655a37ab2de1d8832b724b523_1.mp4',
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <View style={styles.buttons}>
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  video:{
    width: '100%',
    height: '50%',
  }
});

export default VideoGalery
