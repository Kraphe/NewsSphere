import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';

const News = ({ Pagesize, Category, Country }) => {
  
  const apiKey = process.env.REACT_APP_API_KEY;
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  console.log(apiKey);
  const fetchData = async (page) => {
    
    setLoading(true);

    const url = `https://newsapi.org/v2/top-headlines?category=${Category}&country=${Country}&apiKey=${apiKey}&page=${page}&pageSize=${Pagesize}`;
   
    const data = await fetch(url);
    const parsedData = await data.json();
    setArticle(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };
  

  useEffect(() => {
    fetchData(page, Category, Country, Pagesize);
  }, [page, Category, Country, Pagesize]);

  const prevClick = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const nextClick = () => {
    if (page + 1 <= Math.ceil(totalResults / Pagesize)) {
      setPage(page + 1);
    }
  };
  

  return (
    <div className="container my-3">
      <h1 className="text-center">NewsSphere - Top Headlines</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="row">
          {article.map((element) => (
            <div className="col-md-4" key={element.url}>
               
                <NewsItem
                  title={element.author?element.author:Category}
                  desc={element.description?element.description: 'ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
                  imageUrl={
                    element.urlToImage
                      ? element.urlToImage
                      : 'https://gumlet.assettype.com/bloombergquint%2F2022-11%2F59a3e1ba-e38a-48cd-95e7-035a8d693882%2F2022_07_18T000000Z_440721629_MT1NURPHO00031Z4VE_RTRMADP_3_INDIA_ECONOMY.JPG?rect=0%2C451%2C4928%2C2587&w=1200&auto=format%2Ccompress&ogImage=true'
                  }
                  newsUrl={element.url}
                />
              
            </div>
          ))}
        </div>
      )}

      <div className="container d-flex justify-content-between my-3">
        <button
          disabled={page <= 1}
          onClick={prevClick}
          type="button"
          className="btn btn-dark"
        >
          &larr; previous
        </button>
        <button
          disabled={page + 1 >= Math.ceil(totalResults / Pagesize)}
          onClick={nextClick}
          type="button"
          className="btn btn-dark"
        >
          next &rarr;
        </button>
      </div>
    </div>
  );
};

export default News;
