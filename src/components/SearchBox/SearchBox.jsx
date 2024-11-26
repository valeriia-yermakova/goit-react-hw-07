import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import styles from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);

  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>
        Find contacts by name
        <input
          className={styles.input}
          type="text"
          value={filter}
          onChange={(e) => dispatch(changeFilter(e.target.value))}
        />
      </label>
    </div>
  );
};

export default SearchBox;