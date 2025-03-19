import Business from "../Business/Business";
import styles from './BusinessList.module.css'


function BusinessList(props) {
    return (
        <div className={styles.BusinessList}>{props.businesses.map(
            (business, key) => ( <Business key={key} business={business} />)
            )}
        </div>
    );
}

export default BusinessList; 