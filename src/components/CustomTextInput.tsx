import React, {Fragment} from 'react';
import {
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInput,
  TextInputChangeEventData,
  TouchableOpacity,
} from 'react-native';

export interface ITextInputProps {
  handleInputParentPress?: () => void;
  placeholder?: string;
  labelText?: string;
  value: string;
  onChange?:
    | ((e: NativeSyntheticEvent<TextInputChangeEventData>) => void)
    | undefined;
}
const CustomTextInput = ({
  handleInputParentPress,
  onChange,
  value,
  placeholder,
  labelText = 'Label',
}: ITextInputProps) => {
  return (
    <Fragment>

      <TouchableOpacity disabled={!handleInputParentPress} onPress={handleInputParentPress}>
        <Text style={styles.labelText}>{labelText}</Text>
        <TextInput
          onChange={onChange}
          value={value}
          style={styles.input}
          placeholder={placeholder}
        />
      </TouchableOpacity>
    </Fragment>
  );
};
const styles = StyleSheet.create({
  labelText: {
    textTransform: 'uppercase',
    marginBottom: 7,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
});
export default CustomTextInput;
