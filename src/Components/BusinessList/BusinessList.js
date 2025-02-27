import Business from "../Business/Business";
import styles from './BusinessList.module.css'


function BusinessList(props) {
    /*return (
        <div className={styles.BusinessList}>
            <Business />
            <Business />
            <Business />
            <Business />
            <Business />
            <Business />
            <Business />
        </div>
    );*/
    return (
        <div className={styles.BusinessList}>{props.businessArray.map((business) => (
        <Business business={business} />
    ))}</div>
        
);
}

export default BusinessList; 