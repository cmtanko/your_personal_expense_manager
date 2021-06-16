import React from 'react';
import {Icon, View, Text} from 'native-base';

import cs from '../../styles/common';

const RoundIcon = ({title, name}) => {
  return (
    <View style={cs.round_icon_container}>
      <Icon type="FontAwesome" name={name} style={cs.round_icon} />
      <Text style={cs.round_icon_title}>{title}</Text>
    </View>
  );
};

export default RoundIcon;
