import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, ScrollView, Text, View} from 'react-native';
import {Button, Title, List} from 'react-native-paper';
import {Container, Content, Icon, Header, Left, Body, Right} from 'native-base';

import {selectRecords, selectCategories, selectAccounts} from '../../selector';
import {
  getRecords,
  getAccounts,
  getCategories,
  getBackup,
  getUserInfo,
  getSettings,
} from '../../actions';
import cs from '../../styles/common';

import {RoundIcon, RoundBoxButton} from '../Common';

const Overview = (props) => {
  useEffect(() => {
    props.getRecords();
    props.getAccounts();
    props.getCategories();
  }, []);

  const accounts = props.accounts;
  const totalAmountInAccount = props.accounts.reduce(
    (accumulator, currentValue) =>
      accumulator + parseFloat(currentValue.openingBalance),
    0,
  );
  return (
    <Container style={[cs.brandBgColorSecondary]}>
      <View id="topSection" style={cs.pb8}>
        <Header transparent>
          <Left>
            <Button
              transparent
              style={{marginLeft: -16}}
              onPress={() => props.navigation.openDrawer()}>
              <Icon name="menu" style={cs.color_white} />
            </Button>
          </Left>
          <Body>
            <Title style={cs.overview_subtitle}>Your Balance</Title>
          </Body>
          <Right />
        </Header>

        <View style={[cs.center, {height: 96}]}>
          <Text style={cs.overview_heading}>
            ${' '}
            {totalAmountInAccount.toLocaleString(undefined, {
              minimumFractionDigits: 0,
            })}
          </Text>
          <Text style={cs.overview_subtitle}>In Total</Text>
        </View>

        <View style={{height: 80}}>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            style={{}}>
            <RoundBoxButton
              title="Add Account"
              subtitle="+"
              onPress={() => {}}
            />
            {props.accounts.map((account) => {
              const {title, openingBalance} = account;
              return (
                <RoundBoxButton
                  title={title}
                  subtitle={parseFloat(openingBalance).toLocaleString(
                    undefined,
                    {
                      minimumFractionDigits: 0,
                    },
                  )}
                />
              );
            })}
          </ScrollView>
        </View>
      </View>

      <View id="bottomSection" style={cs.section_bottom}>
        <View style={{paddingTop: 48}}>
          <Text style={cs.overview_title}>View Transaction by Category</Text>
          <View style={{height: 80, marginTop: 8}}>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal={true}>
              <RoundIcon title="Add" name="plus" />
              {props.categories.map((category) => {
                const {title, icon} = category;
                return <RoundIcon title={title} name={icon} />;
              })}
            </ScrollView>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            paddingTop: 0,
          }}>
          <Text style={cs.overview_title}>Today's Transaction</Text>
          <Content>
            <List.Section>
              {props.records.map((record) => {
                const {description, categoryId, id, amount} = record;
                const category = props.categories.filter(
                  (cat) => cat.id === categoryId,
                );
                if (category.length === 0) {
                  return;
                }
                return (
                  <List.Item
                    key={id}
                    titleStyle={[cs.color_white, cs.h3, {fontWeight: '700'}]}
                    descriptionStyle={[cs.color_white]}
                    left={() => (
                      <Icon
                        type="FontAwesome"
                        name={category[0].icon}
                        style={[cs.left_icon]}
                      />
                    )}
                    right={(props) => (
                      <Text style={[cs.h3, cs.color_white]}>
                        {category[0].type === 'INCOME' ? '+' : '-'} ${amount}
                      </Text>
                    )}
                    title={category[0].title}
                    description={description}
                  />
                );
              })}
            </List.Section>
          </Content>
        </View>
      </View>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    records: selectRecords(state),
    accounts: selectAccounts(state),
    categories: selectCategories(state),
    settings: state.settings,
  };
};

export default connect(mapStateToProps, {
  getBackup,
  getUserInfo,
  getRecords,
  getSettings,
  getAccounts,
  getCategories,
})(Overview);
