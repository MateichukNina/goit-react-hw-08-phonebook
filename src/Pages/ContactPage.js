import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { fetchAllContacts } from 'Redux/Operations';
// import { selectError, selectIsLoading } from "redux/contacts/selectors";
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from '../components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';


export default function Contacts() {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  return (
    <div>
      <title>Contacts</title>

      <ContactForm />
      <Filter />
      {/* <div>{isLoading && 'Request in progress...' }</div> */}
      <ContactsList />
    </div>
  );
}
