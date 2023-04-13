import {useState} from 'react'
import {View, SafeArea, FlatList,Text, SafeAreaView} from 'react-native'

import { COLORS, HiraData } from '../constants';
import { NFTCard, HomeHeader, FocusedStatusBar } from '../components';

const Event = () => {
  return (
    <SafeAreaView style = {{ flex:1 }}>
        <FocusedStatusBar background={COLORS.primary}/>

        <View style={{ flex: 1}}>
          <View style={{ zIndex:0 }}>
              <FlatList
                  //data={NFTData}
                  data={HiraData.filter(item => item.event === 'Event4')}
                  renderItem={({ item }) => <Text>{item.titre} </Text>}
                  keyExtractor={(item) => item.id}
                  showsVerticalScrollIndicator={false}
                  ListHeaderComponent={<HomeHeader titre={"Event"}/>}
              />
          </View>
          <View style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
              }}>
              <View style={{ height: 300, backgroundColor: COLORS.primary}} />

              <View style={{ flex: 1, backgroundColor: COLORS.white}} />
            
          </View>

        </View>
    </SafeAreaView>
  )
}

export default Event