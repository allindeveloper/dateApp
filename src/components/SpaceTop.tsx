import React, {Fragment} from 'react';
import {View} from 'react-native';

export interface ISpaceTopProps {
  top?: number;
  bottom?: number;
}
const SpaceTop = ({top, bottom}: ISpaceTopProps) => {
  return (
    <Fragment>
      <View style={{marginTop: top, marginBottom: bottom}} />
    </Fragment>
  );
};

export default SpaceTop;
