import React, {useState} from 'react';
import {
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  Text,
  TextInputChangeEventData,
  View,
} from 'react-native';
import ContentInnerScreen from '../components/ContentInnerScreen';
import SpaceTop from '../components/SpaceTop';
import dayjs from 'dayjs';
import CustomTextInput from '../components/CustomTextInput';
import CalendarPicker from 'react-native-calendar-picker';
import Dialog from '../components/Dialog';

const HomeScreen = () => {
  const [where, setwhere] = useState('');
  const [showCheckDialog, setshowCheckDialog] = useState(false);

  const [selectedStartDate, setSelectedStartDate] = useState(dayjs());
  const [selectedEndDate, setSelectedEndDate] = useState(dayjs());

  const onDateChange = (date: any, type: string) => {
    //function to handle the date change
    if (type === 'END_DATE') {
      setSelectedEndDate(date);
    } else {
      setSelectedEndDate(dayjs());
      setSelectedStartDate(date);
    }
  };
  const handleInputCheckPress = () => {
    setshowCheckDialog(true);
  };

  const onChangeWhere = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setwhere(e.nativeEvent.text);
  };
  const handleCloseDialog = () => {
    setshowCheckDialog(false);
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

            <CustomTextInput
              placeholder="Anywhere"
              value={where}
              onChange={onChangeWhere}
              labelText="where"
            />
            <SpaceTop top={40} />

            <CustomTextInput
              placeholder="CHECK-IN "
              labelText="check-in  - check-out"
              // handleInputParentPress={handleInputCheckPress}
              value={`${dayjs(selectedStartDate).format(
                'ddd, MMM D YYYY',
              )} - ${dayjs(selectedEndDate).isValid() ?dayjs(selectedEndDate).format('ddd, MMM D YYYY'):''}`}
            />
            <CalendarPicker
              startFromMonday={true}
              allowRangeSelection={true}
              minDate={dayjs().toDate()}
              maxDate={dayjs().add(6,'month').toDate()}
              weekdays={['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']}
              months={[
                'January',
                'Febraury',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December',
              ]}
              previousTitle="Previous"
              nextTitle="Next"
              todayBackgroundColor="#e6ffe6"
              selectedDayColor="#000000"
              selectedDayTextColor="#ffffff"
              scaleFactor={375}
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
