import s from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { filter } from '../../redux/actions';


function Filter() {
   
  const dispatch = useDispatch();
const value = useSelector(state => state.contactsBookReducer.filter);


 const handleInput = e => {
    dispatch(filter(e.target.value));
  };


  return (
  
    <div className={s.filter}>
    <label>
      Find contacts by name
      <input type="text" name="search" value={value} onChange={handleInput} />
    </label>
 </div>)
};





export default Filter;