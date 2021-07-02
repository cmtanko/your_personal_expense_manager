/* eslint-disable react-native/no-inline-styles */
import _ from 'lodash';
import React from 'react';
import moment from 'moment';
import {connect} from 'react-redux';
import {Container, View, Button, Segment, Text} from 'native-base';

import cs from '../../styles/common';
import {selectReportType} from '../../actions';
import {selectRecords, selectCategories, selectAccounts} from '../../selector';

import ReportDetail from './ReportDetail';

const WEEK_TO_DATE = {
  WEEKLY: 7,
  MONTHLY: 30,
  YEARLY: 365,
};

const MONTHS = [
  'JAN',
  'FEB',
  'MAR',
  'APR',
  'MAY',
  'JUN',
  'JUL',
  'AUG',
  'SEP',
  'OCT',
  'NOV',
  'DEC',
];
const ReportPage = (props) => {
  const {records, selectReportType, selectedReportType} = props;
  const incomeCatgories = props.categories.filter((obj) => {
    return obj.type === 'INCOME';
  });

  const expenseCategories = props.categories.filter((obj) => {
    return obj.type === 'EXPENSE';
  });

  const categoryArray = props.categories.map((cat) => {
    return cat.id;
  });

  const recordBasedOnCategory = categoryArray.map((cat) => {
    return {
      [cat]: [
        MONTHS.map((m, i) => {
          return {
            x: m,
            w: props.records.filter(
              (r) => new Date(r.date).getMonth() === i && r.categoryId === cat,
            ),
            y:
              props.records
                .filter(
                  (r) =>
                    new Date(r.date).getMonth() === i && r.categoryId === cat,
                )
                .reduce((acc, cv) => acc + cv.amount, 0) || 0,
          };
        }),
      ],
    };
  });

  console.warn(recordBasedOnCategory);

  const getData = (categories, allRecords) => {
    return categories
      .map((category) => {
        let recordByCategory = allRecords.filter((record) => {
          const todayDate = moment();
          const recordDate = moment(record.date);
          const dateDiff = todayDate.diff(recordDate, 'days');

          return (
            record.categoryId === category.id &&
            dateDiff < WEEK_TO_DATE[selectedReportType]
          );
        });

        let sumOfIncome = 0;

        _.each(recordByCategory, (record) => {
          sumOfIncome += parseFloat(record.amount);
        });

        return {
          name: sumOfIncome > 0 ? category.title + ' $' + sumOfIncome : ' ',
          label: category.title,
          y: sumOfIncome > 0 ? parseInt(sumOfIncome, 10) : 0,
        };
      })
      .filter((cat) => cat.y > 0);
  };

  return (
    <Container style={cs.bg_dark_lightblue}>
      <Segment style={cs.bg_dark_lightblue}>
        <Button
          first
          style={{
            borderColor: '#1C2544',
            borderBottomWidth: 2,
            borderBottomColor:
              selectedReportType === 'WEEKLY' ? '#22e3c4' : '#1C2544',
            backgroundColor:
              selectedReportType === 'WEEKLY' ? '#1C262E' : '#10151D',
          }}
          active={selectedReportType === 'WEEKLY'}
          onPress={() => {
            selectReportType('WEEKLY');
          }}>
          <Text
            style={{
              color: selectedReportType === 'WEEKLY' ? 'white' : '#666666',
            }}>
            THIS WEEK
          </Text>
        </Button>

        <Button
          style={{
            borderColor: '#1C2544',
            borderBottomWidth: 2,
            borderBottomColor:
              selectedReportType === 'MONTHLY' ? '#22e3c4' : '#1C2544',
            backgroundColor:
              selectedReportType === 'MONTHLY' ? '#1C262E' : '#10151D',
          }}
          onPress={() => {
            selectReportType('MONTHLY');
          }}>
          <Text
            style={{
              color: selectedReportType === 'MONTHLY' ? 'white' : '#666666',
            }}>
            THIS MONTH
          </Text>
        </Button>

        <Button
          last
          style={{
            borderColor: '#1C2544',
            borderBottomWidth: 2,
            borderBottomColor:
              selectedReportType === 'YEARLY' ? '#22e3c4' : '#1C2544',
            backgroundColor:
              selectedReportType === 'YEARLY' ? '#1C262E' : '#10151D',
          }}
          onPress={() => {
            selectReportType('YEARLY');
          }}>
          <Text
            style={{
              color: selectedReportType === 'YEARLY' ? 'white' : '#666666',
            }}>
            THIS YEAR
          </Text>
        </Button>
      </Segment>

      <View>
        <ReportDetail
          categoryTypes={props.categories}
          data={getData(incomeCatgories, records)}
          expenseData={getData(expenseCategories, records)}
          yearWiseData={recordBasedOnCategory}
        />
      </View>
    </Container>
  );
};

const mapStateToProps = (state) => {
  const {selectedReportType} = state;

  return {
    records: selectRecords(state),
    accounts: selectAccounts(state),
    categories: selectCategories(state),
    selectedReportType,
  };
};

export default connect(mapStateToProps, {selectReportType})(ReportPage);
