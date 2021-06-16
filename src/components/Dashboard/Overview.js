import React from 'react';
import {StyleSheet, ScrollView, Text, View} from 'react-native';
import {Button, Title, List} from 'react-native-paper';
import {Container, Content, Icon, Header, Left, Body, Right} from 'native-base';

import cs from '../../styles/common';

import {RoundIcon, RoundBoxButton} from '../Common';

const Overview = (props) => {
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
          <Text style={cs.overview_heading}>$ 32,400</Text>
          <Text style={cs.overview_subtitle}>In Total</Text>
        </View>

        <View style={{height: 80}}>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            style={{}}>
            <RoundBoxButton title="Add Account" subtitle="+" />
            <RoundBoxButton title="Bank of Melbourne" subtitle="$12,000" />
            <RoundBoxButton title="CommonWealth Bank" subtitle="$2,100" />
            <RoundBoxButton title="Cash" subtitle="$120" />
            <RoundBoxButton title="Credit Card" subtitle="- $120" />
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
              <RoundIcon title="Building" name="cog" />
              <RoundIcon title="Saving" name="bank" />
              <RoundIcon title="Add" name="plus" />
              <RoundIcon title="Building" name="cog" />
              <RoundIcon title="Saving" name="bank" />
            </ScrollView>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            paddingTop: 16,
          }}>
          <Text style={cs.overview_title}>Today's Transaction</Text>
          <Content>
            <List.Section>
              <List.Item
                titleStyle={[cs.color_white]}
                descriptionStyle={[cs.color_white]}
                left={() => (
                  <Icon type="FontAwesome" name="money" style={cs.left_icon} />
                )}
                right={(props) => (
                  <Text style={[cs.h3, cs.color_white]}>$180</Text>
                )}
                title="Grocery"
                description="Coles"
              />
            </List.Section>
          </Content>
        </View>
      </View>
    </Container>
  );
};

export default Overview;

const styles = StyleSheet.create({});
