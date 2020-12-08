import Icon from '../icon';
import './link-item.scss';

function LinkItem(props) {
    return (
        <a href={props.url} className="link-item" target="_blank" rel="noopener noreferrer">
            <div className="link-item-icon">
                <span className="icon icon-md"><Icon name={props.icon ? props.icon : 'FiLink'}/></span>
            </div>
            <div className="link-item-label">
                {props.label}
            </div>
        </a>
    )
}

export default LinkItem;
