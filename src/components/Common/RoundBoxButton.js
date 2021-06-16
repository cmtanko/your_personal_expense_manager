import React from 'react';
import {Icon, View, Text} from 'native-base';

import cs from '../../styles/common';
const RoundBoxButton = ({title, subtitle}) => {
  return (
    <View style={cs.round_box_container}>
      <Text style={cs.overview_subtitle}>{title}</Text>
      <Text style={cs.overview_title}>{subtitle}</Text>
    </View>
  );
};

export default RoundBoxButton;
