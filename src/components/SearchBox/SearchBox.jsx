import { useDispatch, useSelector } from 'react-redux';
import { selectContactsFilter } from '../../redux/filters/selectors';
import { setStatusFilter } from '../../redux/filters/slice';
import css from './SearchBox.module.css';

export default function SearchBox() {
  const value = useSelector(selectContactsFilter);
  const dispatch = useDispatch();

  return (
    <div>
      <p className={css.label}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={e => dispatch(setStatusFilter(e.target.value))}
      ></input>
    </div>
  );
}
