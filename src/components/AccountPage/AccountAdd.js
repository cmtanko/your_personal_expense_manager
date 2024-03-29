/* eslint-disable react-native/no-inline-styles */
import {connect} from 'react-redux';
import React, {Component} from 'react';
import {FlatList, View, TouchableOpacity} from 'react-native';
import {Text, Icon, Content, Form} from 'native-base';
import {Modal, Portal} from 'react-native-paper';
import {Provider} from 'react-native-paper';

import icons from '../../iconList';
import {
  InputBox,
  ButtonBox,
  ErrorBox,
  PickerBox,
  IconModalBox,
} from '../Common';
import {addAccount, editAccount, deleteAccount} from '../../actions';

import {AccountAddContainer, AccountForm} from './index.styles';
import cs from '../../styles/common';

let callback = null;
class AccountAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      title: '',
      openingBalance: '',
      balance: '0',
      type: 'BANK',
      icon: 'bank',
      modalVisible: false,
    };

    callback = () => this.props.navigation.navigate('Account');

    this.addAccount = this.addAccount.bind(this);
    this.editAccount = this.editAccount.bind(this);
    this.deleteAccount = this.deleteAccount.bind(this);
    this.onStateChange = this.onStateChange.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  componentDidMount() {
    const {params} = this.props.route;

    if (params) {
      const {navigateBackTo, key, updateRecordState} = params;

      const isOpenedFromModalWindowShortCut = !!navigateBackTo;
      if (isOpenedFromModalWindowShortCut) {
        callback = (acc) => {
          this.props.navigation.navigate(navigateBackTo);
          updateRecordState(key, acc.id);
        };
        return;
      }

      const {account} = params;
      const {id, icon, type, title, balance, openingBalance} = account;

      this.onStateChange('id', id);
      this.onStateChange('icon', icon);
      this.onStateChange('type', type);
      this.onStateChange('title', title);
      this.onStateChange('openingBalance', balance);
      this.onStateChange('openingBalance', openingBalance.toString());
    } else {
      // this.onStateChange('type', type);
    }
  }

  showModal() {
    this.setState({
      modalVisible: true,
    });
  }

  hideModal() {
    this.setState({
      modalVisible: false,
    });
  }

  onStateChange(key, value) {
    this.setState({
      [key]: value,
    });
  }

  addAccount() {
    const {title, openingBalance, type, icon} = this.state;
    if (!title.trim()) {
      this.onStateChange('error', 'Account name cannot be empty');
    } else {
      this.props.addAccount({
        title: title.trim(),
        openingBalance: parseFloat(openingBalance) || 0,
        type,
        icon,
        callback,
      });
    }
  }

  editAccount() {
    const {id, title, openingBalance, balance, type, icon} = this.state;
    if (!title.trim()) {
      this.onStateChange('error', 'Account name cannot be empty');
    } else {
      this.props.editAccount({
        id,
        title: title.trim(),
        openingBalance: parseFloat(openingBalance) || 0,
        balance,
        type,
        icon,
        callback,
      });
    }
  }

  deleteAccount() {
    const {id} = this.state;
    this.props.deleteAccount({
      id,
      callback,
    });
  }

  showError(error) {
    if (error) {
      return <ErrorBox error={error} />;
    }
  }

  showButton(id) {
    if (id) {
      return (
        <View>
          <ButtonBox testID="edit" title="Edit" onChange={this.editAccount} />
          <ButtonBox
            testID="delete"
            title="Delete"
            btnDelete
            onChange={this.deleteAccount}
          />
        </View>
      );
    }
    return <ButtonBox testID="add" title="Add" onChange={this.addAccount} />;
  }

  render() {
    const {id, title, type, icon, openingBalance, error} = this.state;

    return (
      <Provider>
        <AccountAddContainer>
          <Content>
            <Portal>
              <Modal
                animationType="slide"
                visible={this.state.modalVisible}
                onDismiss={this.hideModal}
                contentContainerStyle={{
                  backgroundColor: '#0F171E',
                  alignSelf: 'center',
                  height: '64%',
                  borderRadius: 20,
                  width: '80%',
                }}>
                <FlatList
                  ListHeaderComponent={() => (
                    <View style={cs.padding_large}>
                      <Text
                        style={[
                          cs.h2,
                          cs.center,
                          cs.color_grey,
                          cs.padding_large,
                        ]}>
                        Select Icon
                      </Text>
                    </View>
                  )}
                  horizontal={false}
                  numColumns={4}
                  data={icons}
                  itemDimension={50}
                  keyExtractor={(item) => item}
                  initialNumToRender={20}
                  renderItem={({item}) => (
                    <TouchableOpacity
                      onPress={() => {
                        this.onStateChange('icon', item);
                        this.hideModal();
                      }}>
                      <View style={cs.iconContainer}>
                        <Icon
                          type="FontAwesome"
                          name={item}
                          style={
                            icon === item ? cs.activeIcon : cs.inactiveIcon
                          }
                        />
                        <Text
                          numberOfLines={1}
                          style={
                            icon === item ? cs.activeText : cs.inactiveText
                          }>
                          {item}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  )}
                />
              </Modal>
            </Portal>
            <Form>
              <AccountForm>
                <InputBox
                  testID="accountName"
                  title="Account Name"
                  placeholder="Bank / Cash"
                  icon="ios-clipboard"
                  value={title}
                  focus
                  onChange={(value) => this.onStateChange('title', value)}
                />
                <InputBox
                  testID="openingBalance"
                  title="Opening Balance"
                  placeholder=""
                  numeric={true}
                  icon="ios-calculator"
                  value={openingBalance}
                  onChange={(value) =>
                    this.onStateChange('openingBalance', value)
                  }
                />

                <PickerBox
                  testID="accountType"
                  title="Account Type"
                  type={type}
                  options={[
                    {label: 'Cash', value: 'CASH'},
                    {label: 'Bank', value: 'BANK'},
                    {label: 'Others', value: 'OTHERS'},
                  ]}
                  onChange={(value) => this.onStateChange('type', value)}
                />

                <IconModalBox
                  testID="icon"
                  headingIcon="ios-globe"
                  headingTitle="Icon"
                  title="Select Icon"
                  icons={icons}
                  icon={icon}
                  onPress={this.showModal}
                />
              </AccountForm>

              {this.showError(error)}
              {this.showButton(id)}
            </Form>
          </Content>
        </AccountAddContainer>
      </Provider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.account.error,
    loading: state.account.loading,
  };
};

export default connect(mapStateToProps, {
  addAccount,
  editAccount,
  deleteAccount,
})(AccountAdd);
