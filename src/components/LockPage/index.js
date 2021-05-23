import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import PINCode from '@haskkor/react-native-pincode';

import {setLockedState} from '../../actions';
import {selectBackups} from '../../selector';
import cs, {COLOR_DARK_LIGHTBLUE} from '../../styles/common';

const LockPage = (props) => {
  return (
    <View style={cs.container}>
      <PINCode
        touchIDDisabled={true}
        status={'enter'}
        maxAttempts="100"
        colorCircleButtons={COLOR_DARK_LIGHTBLUE}
        subtitleChoose={'To secure Personal Expense Manager'}
        finishProcess={(a) => {
          props.setLockedState(false);
        }}
      />
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    latestBackup: selectBackups(state),
  };
};

export default connect(mapStateToProps, {
  setLockedState,
})(LockPage);
