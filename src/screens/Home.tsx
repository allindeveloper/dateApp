import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import ContentInnerScreen from '../components/ContentInnerScreen';
import SpaceTop from '../components/SpaceTop';

const HomeScreen = () => {

  return (
    <View style={{flex: 1}}>
      <ContentInnerScreen>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <SpaceTop top={0} />

            <Text>Home</Text>
          </View>
        </ScrollView>
      </ContentInnerScreen>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1},
  Image: {
    width: 200,
    height: 200,
    top: -20,
  },
});
export default HomeScreen;
