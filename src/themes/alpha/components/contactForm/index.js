import { FiSend, FiLoader, FiCheckSquare } from 'react-icons/fi';
import './contact-form.scss';

function ContactForm() {
    function handleSubmit(e) {
        let form = document.querySelector('#ajaxForm');
        let formResponse = document.querySelector('.form-response');
        let loading = document.querySelectorAll('.form-icon');
        let urlApi = "https://getform.io/f/d81196d6-9d17-4366-a721-7c31f836fedb";

        e.preventDefault();
        loading.forEach((el) => el.classList.toggle('hide'));

        fetch(urlApi, {
            method: 'POST',
            body: new FormData(form),
            dataType: 'json',
            headers: { "Accept": "application/json" }
        })
        .then(() => {
            formResponse.classList.add('is-visible')
            loading.forEach((e) => e.classList.toggle('hide'));

            setTimeout(() => {
                formResponse.classList.remove('is-visible')    
            }, 3000);
        })
        .catch(err => {
            alert(err.text);
            loading.forEach((e) => e.classList.toggle('hide'));
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit} id="ajaxForm" method="POST" className="contact-form">
                <label htmlFor="email">Acompanhe por email</label>
                <div className="content">
                    <input type="email" name="email" id="email" placeholder="seunome@email.com" required />
                    <button type="submit" className="btn-reset">
                        <FiSend size="1.8em" className="form-icon"/>
                        <FiLoader size="1.8em" className="form-icon hide is-loading"/>
                    </button>
                </div>
            </form>

            {/* Response */}
            <div className="form-response">
                <div className="container">
                    <div className="response-icon"><FiCheckSquare size="2em" /></div>
                    <h3>E-mail cadastrado!</h3>
                    <h2>Obrigado por me acompanhar 😊</h2>
                </div>
            </div>
        </>
    )
}

export default ContactForm;
