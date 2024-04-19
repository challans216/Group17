import React from 'react';
import { Button } from 'react-native';
import { scheduleNotificationAsync } from 'expo-notifications';

const MedicationReminderScreen = () => {
  const handleSetReminder = async () => {
    await scheduleNotificationAsync({
      content: {
        title: 'Medication Reminder',
        body: 'Don\'t forget to take your medication!',
      },
      trigger: { seconds: 3600 }, // Remind every hour for demo
    });
  };

  return (
    <Button title="Set Medication Reminder" onPress={handleSetReminder} />
  );
};

export default MedicationReminderScreen;
