/* eslint-disable react-native/no-inline-styles */

import {connect} from 'react-redux';
import React, {Component} from 'react';
import {Provider} from 'react-native-paper';
import {Container, Content, View} from 'native-base';

import RecordForm from './RecordForm';
import SectionHeader from './SectionHeader';
import {ButtonBox, ErrorBox} from '../Common';
import {
  selectAccountLoading,
  selectCategories,
  selectRecords,
  selectAccounts,
} from '../../selector';

import {
  addRecord,
  editRecord,
  deleteRecord,
  selectCategoryType,
  selectDate,
  predictedAccountId,
  predictedCategoryId,
} from '../../actions';

import cs from '../../styles/common';

let callback = null;

class RecordAddIncome extends Component {
  constructor(props) {
    super(props);

    let predictedDate = props.selectedItem.date || new Date();

    let firstAccount =
      !!props.accounts && props.accounts[0] && props.accounts[0].id;

    this.state = {
      id: '',
      amount: '',
      date: predictedDate,
      categoryId: props.selectedItem.predictedCategoryId || '',
      payFrom: props.selectedItem.predictedAccountId || firstAccount || '',
      payTo: props.selectedItem.predictedAccountId || firstAccount || '',
      description: '',
      place: '',
      attachment: '',
      formType: '',
      error: '',
      showCategoryModal: false,
      selectedCategoryType: 'INCOME',
    };

    callback = () => this.props.navigation.navigate('Home');

    this.addMyRecord = this.addMyRecord.bind(this);
    this.deleteRecord = this.deleteRecord.bind(this);
    this.onStateChange = this.onStateChange.bind(this);
  }

  componentDidMount() {
    const {params} = this.props.route;

    if (params) {
      const {navigateBackTo} = params;

      const isOpenedFromOverviewWindowShortCut = !!navigateBackTo;
      if (isOpenedFromOverviewWindowShortCut) {
        callback = (acc) => {
          this.props.navigation.navigate(navigateBackTo);
        };
      }

      if (!params.record) {
        return;
      }

      const {
        id,
        amount,
        date,
        type,
        categoryId,
        payFrom,
        description,
        payTo,
        place,
        attachment,
      } = params.record;
      this.setState({
        id,
        amount: amount.toString(),
        date,
        categoryId,
        description,
        payFrom,
        payTo,
        place,
        attachment,
        selectedCategoryType: type,
        formType: type,
      });
      this.props.selectCategoryType(type);
    }
  }

  onStateChange(key, value) {
    if (key === 'categoryId' && value === 0) {
      this.props.navigation.navigate('CategoryAdd', {
        navigateBackTo: 'RecordAddIncome',
        key: key,
        updateRecordState: this.onStateChange,
      });
    }

    if (
      (key === 'payTo' ||
        key === 'payFrom' ||
        key === 'accountTo' ||
        key === 'accountFrom') &&
      value === 0
    ) {
      this.props.navigation.navigate('AccountAdd', {
        navigateBackTo: 'RecordAddIncome',
        key: key,
        updateRecordState: this.onStateChange,
      });
    }

    this.setState({
      [key]: value,
    });
  }

  addMyRecord() {
    let {
      id,
      amount,
      date,
      categoryId,
      payFrom,
      payTo,
      description,
      place,
      attachment,
    } = this.state;

    amount = parseInt(amount, 10) || -1;
    if (amount <= 0) {
      this.onStateChange('error', 'Amount cannot be zero');
    } else if (!categoryId) {
      this.onStateChange('showCategoryModal', true);
    } else {
      this.props.selectDate(date);
      this.props.predictedAccountId(
        this.props.selectedCategoryType === 'INCOME' ? payTo : payFrom,
      );
      this.props.predictedCategoryId(categoryId);

      if (id) {
        this.props.editRecord({
          id,
          amount,
          date,
          categoryId,
          payFrom,
          payTo,
          description: description.trim(),
          place,
          attachment,
          callback,
        });
      } else {
        this.props.addRecord({
          amount,
          date: new Date(date).toISOString(),
          categoryId,
          payFrom,
          payTo,
          description: description.trim(),
          place,
          attachment,
          callback,
        });
      }
      this.onStateChange('error', '');
    }
  }

  deleteRecord() {
    const {id} = this.state;
    this.props.deleteRecord({
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
          <ButtonBox testID="edit" title="Edit" onChange={this.addMyRecord} />
          <ButtonBox
            testID="delete"
            title="Delete"
            btnDelete
            onChange={this.deleteRecord}
          />
        </View>
      );
    }
    return <ButtonBox testID="add" title="Add" onChange={this.addMyRecord} />;
  }

  render() {
    const {accounts, categories} = this.props;
    const {id, categoryId, error} = this.state;

    return (
      <Provider>
        <Container style={cs.bg_dark_lightblue}>
          <SectionHeader />
          <Content>
            <RecordForm
              date={this.state.date}
              onStateChange={this.onStateChange}
              amount={this.state.amount}
              description={this.state.description}
              selectedCategoryType={this.props.selectedCategoryType}
              accounts={[
                ...accounts,
                {id: 0, title: '+ Add Accounts', icon: 'plus', type: ''},
              ]}
              payFrom={this.state.payFrom}
              payTo={this.state.payTo}
              attachment={this.state.attachment}
              showCategoryModal={this.state.showCategoryModal}
              categories={[
                ...categories,
                {id: 0, title: 'Add Category', icon: 'plus', type: ''},
              ]}
              categoryId={categoryId}
            />
            {this.showError(error)}
            {this.showButton(id)}
          </Content>
        </Container>
      </Provider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    accounts: selectAccounts(state),
    categories: selectCategories(state),
    records: selectRecords(state),
    selectedCategoryType: state.selectedCategoryType,
    error: state.account.error,
    selectedItem: state.selectedItem,
    loading: selectAccountLoading(state),
  };
};

export default connect(mapStateToProps, {
  addRecord,
  editRecord,
  deleteRecord,
  selectDate,
  predictedAccountId,
  predictedCategoryId,
  selectCategoryType,
})(RecordAddIncome);
