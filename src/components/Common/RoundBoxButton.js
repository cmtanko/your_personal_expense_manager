import React from 'react';
import {Icon, View, Text} from 'native-base';
import {TouchableOpacity} from 'react-native';

import cs from '../../styles/common';
const RoundBoxButton = ({title, subtitle, onPress}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
      }}>
      <View style={cs.round_box_container}>
        <Text style={cs.overview_subtitle}>{title}</Text>
        <Text style={cs.overview_title}>$ {subtitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RoundBoxButton;
