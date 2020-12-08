import Icon from '../icon';
import './category-button.scss';

function CategoryButton(props) {
    // Get icon value to create dynamic component
    const isActive = props.active ? 'active' : '';
    const buttonClass = 'js-category-button';

    // Add active class to button
    function handleActive(el) {
        clearAllActiveButtons();
        el.currentTarget.classList.add('active');
    }
    
    // Remove all active class from buttons
    function clearAllActiveButtons() {
        const allButtons = document.querySelectorAll(`.${buttonClass}`);

        allButtons.forEach((e) => {
            e.classList.remove('active');
        })
    }
    
    return (
        <>
            <button onClick={handleActive} className={`${isActive} ${buttonClass} button-category btn-reset`} data-category={props.id}>
                <div className="button-category-icon icon"><Icon name={props.icon} /></div>
                <div className="button-category-label">{props.label}</div>
            </button>
        </>
    );
}

export default CategoryButton;
