import React from 'react';
import {connect} from 'react-redux';
import Carousel from 'react-native-carousel-view';
import {
  VictoryPie,
  VictoryBar,
  VictoryTheme,
  VictoryLegend,
} from 'victory-native';
import {Text, View, Dimensions, Platform} from 'react-native';

import styles from './styles';
import cs from '../../styles/common';
import CategoryBasedReport from './CategoryBasedReport';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const ReportDetail = (props) => {
  let {expenseData, yearWiseData, data} = props;

  let categoryTypes = props.categoryTypes.map((cat) => {
    return {
      key: cat.id,
      value: cat.id,
      label: cat.title,
    };
  });
  const colorScale = ['tomato', 'orange', 'gold', 'cyan', 'navy'];

  return (
    data.length > 0 && (
      <View>
        <Carousel
          height={deviceHeight}
          loop={false}
          indicatorAtBottom
          indicatorOffset={deviceHeight / 3}
          indicatorSize={Platform.OS === 'android' ? 15 : 10}
          animate={false}>
          <View pointerEvents="none" style={styles.slides}>
            <Text style={[cs.h2, cs.color_light_blue, cs.padding_large]}>
              Income
            </Text>
            <VictoryPie
              theme={VictoryTheme.material}
              colorScale={colorScale}
              innerRadius={68}
              labelRadius={0}
              width={300}
              height={300}
              data={data}
              events={[]}
              style={{
                labels: styles.labels,
              }}
              animate={{
                duration: 1000,
              }}
            />

            <VictoryLegend
              x={16}
              symbolSpacer={8}
              theme={VictoryTheme.material}
              orientation="vertical"
              gutter={20}
              style={{
                labels: {fill: 'white', fontSize: 10},
              }}
              colorScale={colorScale}
              data={data}
            />
          </View>
          <View pointerEvents="none" style={styles.slides}>
            <Text style={[cs.h2, cs.color_light_red, cs.padding_large]}>
              Expense
            </Text>
            <VictoryPie
              theme={VictoryTheme.material}
              colorScale={colorScale}
              innerRadius={68}
              labelRadius={0}
              width={300}
              height={300}
              data={expenseData}
              events={[]}
              style={{
                labels: styles.labels,
              }}
              animate={{
                duration: 1000,
              }}
            />
            <VictoryLegend
              x={16}
              symbolSpacer={8}
              theme={VictoryTheme.material}
              orientation="vertical"
              gutter={20}
              style={{
                labels: {fill: 'white', fontSize: 10},
              }}
              colorScale={colorScale}
              data={expenseData}
            />
          </View>

          <View pointerEvents="none" style={styles.slides}>
            <Text style={[cs.h2, cs.color_light_blue, cs.padding_large]}>
              Cash Flow
            </Text>
            <VictoryBar
              theme={VictoryTheme.material}
              colorScale={colorScale}
              width={deviceWidth}
              data={[...expenseData, ...data]}
              events={[]}
              style={{
                labels: styles.labels,
              }}
              animate={{
                duration: 1000,
              }}
            />
          </View>

          <View pointerEvents="auto" style={styles.slides}>
            <CategoryBasedReport
              categoryTypes={categoryTypes}
              data={yearWiseData}
            />
          </View>
        </Carousel>
      </View>
    )
  );
};

export default connect(null, {})(ReportDetail);
