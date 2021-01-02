import Icon from '../icon';
import './social-link.scss';

function SocialLink({ name, url}) {
    return (
        <>
            <a href={url} target="_blank" aria-label={name} rel="noreferrer" className="social-link">
                <Icon name={name} />
            </a>
        </>
    )
}

export default SocialLink;
