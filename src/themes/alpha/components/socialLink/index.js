import Icon from '../icon';
import './social-link.scss';

function SocialLink(props) {
    return (
        <>
            <a href={props.url} target="_blank" aria-label={props.name} rel="noreferrer" className="social-link">
                <Icon
                    is_brand={true}
                    name={`Fa${props.name}`}
                />
            </a>
        </>
    )
}

export default SocialLink;
