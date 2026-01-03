export default function Breadcrumb({
    title,
    backgroundImage = "/assets/img/banner/banner.jpg",
    subtitle = ""
}) {
    return (
        <section className="section-breadcrumb padding-b-50">
            <div
                className="rx-breadcrumb-image"
                style={{ backgroundImage: `url('${backgroundImage}')` }}
            >
                <div className="rx-breadcrumb-overlay" />
                <div className="inner-breadcrumb-contact sub_header_content">
                    <div className="main-breadcrumb-contact">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="rx-banner-contact">
                                        <h1>{title}</h1>
                                        {subtitle && <p className="mt-2">{subtitle}</p>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}