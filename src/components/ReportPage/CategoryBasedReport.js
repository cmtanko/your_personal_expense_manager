import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {VictoryChart, VictoryLine, VictoryTheme} from 'victory-native';

import SelectableCategory from '../Dashboard/SelectableCategory';

import cs, {COLOR_TERTIARY} from '../../styles/common';

const CategoryBasedReport = (props) => {
  const {data, selectedItem} = props;
  let [categoryItem, setCategoryItem] = useState([]);
  useEffect(() => {
    if (selectedItem.category > 0) {
      setCategoryItem(data[selectedItem.category] || []);
    } else {
      setCategoryItem([]);
    }
  }, [data, selectedItem.category, categoryItem]);

  return (
    <View style={{alignItems: 'center'}}>
      <Text style={[cs.h2, cs.color_light_blue, cs.padding_large]}>
        Report by Category
      </Text>
      {categoryItem && (
        <VictoryChart theme={VictoryTheme.material}>
          <VictoryLine
            animate={{
              duration: 500,
            }}
            style={{
              data: {stroke: COLOR_TERTIARY},
            }}
            data={categoryItem}
          />
        </VictoryChart>
      )}
      <SelectableCategory title={'Select Category'} style={{paddingTop: 0}} />
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedItem: state.selectedItem,
  };
};

export default connect(mapStateToProps, {})(CategoryBasedReport);
