import { useState } from 'react';
import styles from './SearchBar.module.css';
import retrieveBusinesses from '../../utils/YelpConnection';

const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count"
};

function SearchBar({setBusinesses}) {
  const [term, setTerm] = useState('');
  const [location, setLocation] = useState('');
  const [sort, setSort] = useState('best_match');

  const clickHandler = (event) => {
    setSort(event.target.dataset.value);
  }

  const changeTermHandler = ({target}) => {
    setTerm(target.value);
  }
  const changeLocationHandler = ({target}) => {
    setLocation(target.value);
  }

  const clickSearchHandler = async () => {
    const businesses = await retrieveBusinesses(location, term, sort);
    setBusinesses(businesses);
    console.log(businesses);
  }

    const renderSortByOptions = () => {
        return Object.keys(sortByOptions).map((sortByOption) => {
            let sortByOptionValue = sortByOptions[sortByOption];
            let isActive = sort === sortByOptionValue;
            return <li 
                      onClick={clickHandler} 
                      key={sortByOptionValue} 
                      data-value={sortByOptionValue}
                      className={isActive ? styles.active : ""}
                      >
                        {sortByOption}
                    </li>
        });
    };

    const isDisabled = !term || !location;

    return (
        <div className={styles.SearchBar}>
        <div className={styles.SearchBarSortOptions}>
          <ul>{renderSortByOptions()}</ul>
        </div>
        <div className={styles.SearchBarFields}>
          <input placeholder="Search Businesses" onChange={changeTermHandler} />
          <input placeholder="Where?" onChange={changeLocationHandler} />
        </div>
        <div className={styles.SearchBarSubmit}>
          <a onClick={clickSearchHandler} className={isDisabled ? styles.disabled : ''} style={{ pointerEvents: isDisabled ? 'none' : 'auto' }}>Let's Go</a>
        </div>
      </div>
    );
}

export default SearchBar;