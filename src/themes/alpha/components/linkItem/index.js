import Icon from '../icon';
import './link-item.scss';

function LinkItem(props) {
    return (
        <a href={props.url} className="js-link-item link-item active" data-category={props.category} target="_blank" rel="noopener noreferrer">
            <div className="link-item-icon">
                <span className="icon icon-md"><Icon name={props.category ? props.category : 'all'} /></span>
            </div>
            <div className="link-item-label">
                {props.label}
            </div>
        </a>
    )
}

export default LinkItem;
