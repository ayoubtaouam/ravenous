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

  const changeTermHandler = ({target}) => {
    setTerm(target.value);
  }
  const changeLocationHandler = ({target}) => {
    setLocation(target.value);
  }

  const clickSearchHandler = () => {
    console.log("Searching Yelp with Pizza, Brooklyn, best_match");
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
          <input placeholder="Search Businesses" onChange={changeTermHandler} />
          <input placeholder="Where?" onChange={changeLocationHandler} />
        </div>
        <div className={styles.SearchBarSubmit}>
          <a onClick={clickSearchHandler}>Let's Go</a>
        </div>
      </div>
    );
}

export default SearchBar;