import React from 'react';

const NewsItem = ({ title, desc, imageUrl, newsUrl }) => {
  
 
  const ntitle=title.trim().split(/\s+/);
  title=ntitle.length <= 2 ? title : ntitle.slice(0, 2).join(' ');
  const ndesc=desc.trim().split(/\s+/);
  desc=ndesc.length <= 18 ? desc : ndesc.slice(0, 18).join(' ');
  // desc=desc.substring(0, 100)

  return (
    <div>
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={imageUrl} alt="Card cap" />
          <div className="card-body">
            <h5 className="card-title" >{title}</h5>
            <p className="card-text">{desc}</p>
            <a href={newsUrl} className="btn btn-sm btn-primary">
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;