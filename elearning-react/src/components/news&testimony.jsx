import { useEffect, useState } from "react";
import NewsCard from "./newsCard";
import TestimonialCard from "./testimonialCard";
import { API } from "../api/api";
import LoadingScreen from "./loading";

const NewsAndTestimonialsSection = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(API.NEWS);
        const data = await res.json();
        setNews(data);
      } catch (err) {
        console.error("Failed to fetch news:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  return (
    <section className="py-5" id="news-and-testimony">
      <div className="container-md">
        <div className="row">
          <div className="col-md p-md-5 mb-3 mb-md-0" id="news">
            <h3 className="mb-5">Latest News</h3>
            <div className="events">
              {loading ? (
                <LoadingScreen />
              ) : (
                news.map((news) => <NewsCard key={news.id} news={news} />)
              )}
            </div>
          </div>
          <div className="col-md p-md-5" id="testimonials">
            <h3 className="mb-5">Testimonials</h3>
            <TestimonialCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsAndTestimonialsSection;
