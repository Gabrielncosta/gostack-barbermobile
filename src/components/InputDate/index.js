import React from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import Background from '~/components/Background';

import { Container } from './styles';

export default function InputDate({ date, mode, onChange }) {
  return (
    <Background>
      <Container>
        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={date}
          mode={mode}
          minimumDate={new Date()}
          is24Hour
          display="default"
          onChange={onChange}
        />
      </Container>
    </Background>
  );
}
