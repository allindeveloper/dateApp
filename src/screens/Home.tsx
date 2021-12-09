import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import ContentInnerScreen from '../components/ContentInnerScreen';
import SpaceTop from '../components/SpaceTop';
import dayjs from 'dayjs';
import CustomTextInput from '../components/CustomTextInput';
import CalendarPicker from 'react-native-calendar-picker';
import {calendarMonths, calendarWeekDays} from '../constants/appConstants';

const HomeScreen = () => {
  const [selectedStartDate, setSelectedStartDate] = useState(dayjs());
  const [selectedEndDate, setSelectedEndDate] = useState(dayjs());

  const onDateChange = (date: any, type: 'START_DATE' | 'END_DATE') => {
    if (type === 'END_DATE') {
      setSelectedEndDate(date);
    } else {
      setSelectedEndDate(dayjs());
      setSelectedStartDate(date);
    }
  };

  return (
    <View style={styles.container}>
      <ContentInnerScreen>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{padding: 10}}>
            <SpaceTop top={0} />

            <Text style={styles.header}>
              Book Unique Places to stay and things to do.
            </Text>
            <SpaceTop top={20} />

            <SpaceTop top={40} />

            <CustomTextInput
              placeholder="CHECK-IN "
              labelText="check in  -  check out"
              value={`${dayjs(selectedStartDate).format('ddd, MMM D YYYY')} - ${
                dayjs(selectedEndDate).isValid()
                  ? dayjs(selectedEndDate).format('ddd, MMM D YYYY')
                  : ''
              }`}
            />
            <CalendarPicker
              startFromMonday={true}
              allowRangeSelection={true}
              minDate={dayjs().toDate()}
              maxDate={dayjs().add(6, 'month').toDate()}
              weekdays={calendarWeekDays}
              months={calendarMonths}
              restrictMonthNavigation
              previousTitle="Previous"
              nextTitle="Next"
              todayBackgroundColor="#ffc107"
              selectedDayColor="#000000"
              selectedDayTextColor="#ffffff"
              scaleFactor={375}
              allowBackwardRangeSelect={true}
              onDateChange={onDateChange}
            />
          </View>
        </ScrollView>
      </ContentInnerScreen>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 30,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  Image: {
    width: 200,
    height: 200,
    top: -20,
  },
});
export default HomeScreen;
