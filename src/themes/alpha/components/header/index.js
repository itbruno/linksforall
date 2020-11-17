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
                            <img src="https://itbruno.github.io/linksforall/images/user-image.jpg" alt="Bruno Rodrigues" width="60" height="60" loading="lazy" />
                        </div>

                        <div className="user-info-content">
                            <h1>Bruno Rodrigues</h1>
                            {props.username}
                            <a href="https://itbruno.com.br" rel="noreferrer noopener" target="_blank">itbruno.com.br</a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;
