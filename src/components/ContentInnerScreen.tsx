import React from 'react';
import {KeyboardAvoidingView, Platform, StyleSheet} from 'react-native';

export interface IContentInnerScreenProps {
  backgroundColor?: string;
  children: React.ReactChild;
}
const ContentInnerScreen = (props: IContentInnerScreenProps) => {
  const {children, backgroundColor} = props;

  return (
    <KeyboardAvoidingView
      style={[styles.Container, {backgroundColor: backgroundColor}]}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      {children}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    marginTop: -10,
  },
});

export default ContentInnerScreen;
