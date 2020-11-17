import './category-button.scss';
import * as icon from "react-icons/fi";

function CategoryButton(props) {
    // Get icon value to create dynamic component
    const GetIcon = icon[props.icon];
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
            <button onClick={(e) => handleActive(e)} className={`${isActive} ${buttonClass} button-category btn-reset`} data-category={props.id}>
                <div className="button-category-icon"><GetIcon /></div>
                <div className="button-category-label">{props.label}</div>
            </button>
        </>
    );
}

export default CategoryButton;
