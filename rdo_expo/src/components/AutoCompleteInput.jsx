import {View} from 'react-native';
import styles from '../../style/MainStyle';
import {AutoComplete} from 'react-native-element-textinput';

import React from 'react';

export default function AutoCompleteInput(
    {placeholder, value, data, onChangeText, textError}) {
  return (
    <View style={styles.AutoCompletecontainer}>
      <AutoComplete

        style={styles.AutoCompleteinput}
        inputStyle={styles.AutoCompleteinputStyle}
        labelStyle={styles.AutoCompletelabelStyle}
        placeholderStyle={styles.AutoCompleteplaceholderStyle}
        textErrorStyle={styles.AutoCompletetextErrorStyle}
        placeholderTextColor="gray"

        value={value}
        data={data}
        placeholder={placeholder}
        onChangeText={(e) => {
          onChangeText(e);
        }}
        textError={textError}
      />
    </View>

  );
}
