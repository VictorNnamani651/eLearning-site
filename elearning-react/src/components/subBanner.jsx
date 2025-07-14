const SubBanner = () => {
  return (
    <section className="py-3 py-md-0" id="sub-banner">
      <div className="container-md">
        <div className="row justify-content-center align-content-center">
          <div className="sub-banner-card col-auto col-md text-center row justify-content-center align-content-center">
            <div
              className="rounded-circle bg-light d-flex mb-3 align-items-center justify-content-center"
              style={{ width: "100px", height: "100px" }}
            >
              <i className="bi bi-building-fill"></i>
            </div>
            <h3>Leading Institute</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing
              elit.Repudiandae, aliquid.
            </p>
          </div>
          <div className="sub-banner-card col-auto col-md text-center row justify-content-center align-content-center">
            <div
              className="rounded-circle bg-light d-flex mb-3 align-items-center justify-content-center"
              style={{ width: "100px", height: "100px" }}
            >
              <i className="bi bi-journal-album"></i>
            </div>
            <h3>Learn Anything Online</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repudiandae, aliquid.
            </p>
          </div>
          <div className="sub-banner-card col-auto col-md row justify-content-center align-content-center">
            <img src="/assets/images/images-book-1-5.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubBanner;
