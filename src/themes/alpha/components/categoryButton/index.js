import Icon from '../icon';
import './category-button.scss';

function CategoryButton(props) {
    return (
        <>
            <button onClick={props.handleEvent} className={`${props.classes??''} js-category-button button-category btn-reset`} data-category={props.categoryId}>
                <div className="button-category-icon icon"><Icon name={props.categoryId} /></div>
                <div className="button-category-label">{props.label}</div>
            </button>
        </>
    );
}

export default CategoryButton;
