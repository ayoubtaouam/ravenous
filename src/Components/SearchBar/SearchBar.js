import { useState } from 'react';
import styles from './SearchBar.module.css';

const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count"
};

function SearchBar() {
  const [term, setTerm] = useState('');
  const [location, setLocation] = useState('');
  const [sort, setSort] = useState('');

  const clickHandler = (event) => {
    setSort(event.target.dataset.value);
  }

  const changeHandler = ({target}) => {
    setSort(target.value);
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

    return (
        <div className={styles.SearchBar}>
        <div className={styles.SearchBarSortOptions}>
          <ul>{renderSortByOptions()}</ul>
        </div>
        <div className={styles.SearchBarFields}>
          <input placeholder="Search Businesses" onChange={changeHandler} />
          <input placeholder="Where?" />
        </div>
        <div className={styles.SearchBarSubmit}>
          <a>Let's Go</a>
        </div>
      </div>
    );
}

export default SearchBar;