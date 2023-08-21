import coder from '../coder.png';

const Service = () => {
    return (
        <section className="service" id="services">
            <div className="container">
                <h2 className="display-2 fw-bold mb-5">SERVICE</h2>

                <div className="row">
                    <div className="col-6 d-flex">
                        <p className="align-self-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa laudantium minima incidunt in est odio nemo soluta. Molestias cumque aspernatur reprehenderit, quas doloremque non iusto! Officia et nobis animi culpa eveniet eligendi cumque ipsam doloribus doloremque perspiciatis porro repellat ratione itaque, repudiandae soluta adipisci facere corrupti, enim laborum consequuntur officiis? Recusandae, iusto distinctio. Placeat iste error pariatur maiores minima debitis dolor omnis? Alias sit sequi sint repellat architecto dicta inventore cumque molestiae velit ut, sapiente error ipsum impedit beatae laborum iusto incidunt quo suscipit eaque placeat tempore vero reprehenderit quia? Consequatur nemo omnis quas perferendis quis voluptatem in quidem illo.</p>
                    </div>
                    <div className="col-6 d-flex">
                        <img className="align-self-center" src={coder} alt="Coder man" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Service;