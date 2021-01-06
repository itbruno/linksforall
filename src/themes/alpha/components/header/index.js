import './header.scss';

function Header(props) {
    return (
        <>
            <header>
                <div className='circle circle-blue'></div>
                <div className='circle circle-orange'></div>
                <div className="container">
                    <div className="user-info">
                        <div className="user-info-image">
                            <img src={props.userImage} alt={props.name} width="60" height="60" loading="lazy" />
                        </div>

                        <div className="user-info-content">
                            <h1>{props.name}</h1>
                            <a href={`${props.website}`} rel="noreferrer noopener" target="_blank">{props.website.replace(/^(https?|ftp):\/\//, '')}</a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;
