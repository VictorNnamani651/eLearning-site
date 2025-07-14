
const NewsCard = ({ news }) => {
  return (
    <div className="card mb-3" style={{ maxWidth: '540px' }}>
      <div className="row g-0">
        <div className="col-4">
          <img
            src={news.imageSrc}
            className="img-fluid rounded-start"
            alt={news.title}
          />
        </div>
        <div className="col-8">
          <div className="card-body">
            <h5 className="card-title">{news.title}</h5>
            <p className="card-text">
              <small className="text-body-secondary">
                <i className="bi bi-person-circle">
                  {' '}
                  {news.author}
                  <i className="bi bi-clock ms-2"> {news.date}</i>
                </i>
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;