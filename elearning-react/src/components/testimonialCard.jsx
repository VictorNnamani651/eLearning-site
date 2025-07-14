const TestimonialCard = () => {
  return (
    <div className="testimony1">
      <div className="texts d-flex justify-content-center mb-5">
        <div className="icon align-self-start">
          <i className="bi bi-quote"></i>
        </div>
        <p className="text-secondary fw-semibold">
          the first one Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Molestias officia nesciunt sequi earum optio ullam exercitationem
          fugiat dicta, esse quia sint unde, illum alias explicabo pariatur
          aliquid aliquam. Perferendis, porro!
        </p>
      </div>
      <div>
        <div className="testimonies-2nd-half row">
          <div className="img-container col-2">
            <img
              src="https://th.bing.com/th?id=OIP.WfoLILFKTzMLlun2SEPJfQHaIl&w=232&h=269&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
              alt="Max Payne"
              className="rounded-circle img-fluid"
            />
          </div>
          <div className="col-10 d-flex flex-column justify-content-center">
            <h6>Max Payne</h6>
            <p className="text-muted">Web Developer At Google</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
