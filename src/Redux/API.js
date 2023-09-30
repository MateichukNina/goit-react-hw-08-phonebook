import axios from 'axios';

axios.defaults.baseURL= 'https://6509f777f6553137159c4e33.mockapi.io'; 

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com'

export const fetchContacts = async () => {
  const response = await axios.get(`/contacts/contacts`);

  return response.data;
};

 export const addContact = async (contact) => {
  const response = await axios.post(`/contacts/contacts`, contact);
   return response.data;
 };


 export const deleteContact = async id => {
  const response = await axios.delete(`/contacts/contacts/${id}`, id);
  return response.data;
};