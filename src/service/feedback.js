import axios from 'axios';

export const getFeedback = async () => {
  try {
    const data = await axios.get(
      'https://63af5dd2cb0f90e514726ce0.mockapi.io/contacts/feedback'
    );
    return data;
  } catch (error) {}
};

export const addFeedback = async item => {
  const feedbackItem = { ...item, date: new Date().toDateString() }
  try {
    await axios.post(
      'https://63af5dd2cb0f90e514726ce0.mockapi.io/contacts/feedback',
      feedbackItem
    );
  } catch (error) {}
};
