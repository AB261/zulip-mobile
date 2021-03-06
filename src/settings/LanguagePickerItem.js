/* @flow strict-local */
import React, { PureComponent } from 'react';
import { StyleSheet, View } from 'react-native';

import { RawLabel, Touchable } from '../common';
import { BRAND_COLOR } from '../styles';
import { IconDone } from '../common/Icons';

const componentStyles = StyleSheet.create({
  languageWrapper: {
    flex: 1,
    flexDirection: 'column',
  },
  name: {
    fontWeight: '300',
    fontSize: 13,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 16,
    paddingRight: 16,
  },
});

type Props = {|
  locale: string,
  name: string,
  nativeName: string,
  selected: boolean,
  onValueChange: (locale: string) => void,
|};

export default class LanguagePickerItem extends PureComponent<Props> {
  render() {
    const { locale, name, nativeName, selected, onValueChange } = this.props;

    return (
      <Touchable onPress={() => onValueChange(locale)}>
        <View style={componentStyles.listItem}>
          <View style={componentStyles.languageWrapper}>
            <RawLabel text={nativeName} />
            <RawLabel text={name} style={componentStyles.name} />
          </View>
          <View>{selected && <IconDone size={16} color={BRAND_COLOR} />}</View>
        </View>
      </Touchable>
    );
  }
}
