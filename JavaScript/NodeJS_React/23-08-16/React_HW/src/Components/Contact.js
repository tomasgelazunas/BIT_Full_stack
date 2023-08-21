const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="container">
                <h2 className="display-2 fw-bold mb-5">CONTACT</h2>

                <div className="row">
                    <div className="col-6">
                        <label for="name">Name</label>
                        <input type="text" id="name" placeholder="Name" className="w-100 form-control mb-3" />

                        <label for="lastname">Lastname</label>
                        <input type="text" id="lastname" placeholder="Lastname" className="w-100 form-control mb-3" />

                        <label for="email">Email adress</label>
                        <input type="text" id="email" placeholder="Email" className="w-100 form-control mb-3" />
                    </div>
                    <div className="col-6 d-flex">
                        <textarea className="w-100 h-75 align-self-center form-control" placeholder="Your message"></textarea>
                    </div>
                </div>
                <button className="btn btn-primary">Contact</button>
            </div>
        </section>
    );
}

export default Contact;