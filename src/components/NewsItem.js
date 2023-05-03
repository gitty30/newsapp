import React from "react";

const NewsItem=(props)=> {

    let { title, desc, iurl,newsUrl,author,date,source} = props;
    return (
      <div className="container my-3">
        <div className="card" >
          
          <img src={!iurl?"https://images.indianexpress.com/2022/08/diabetes_1200_getty-1.jpg":iurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{zIndex:1,left:'90%'}}> {source} </span>
            <p className="card-text">{desc}...</p>
            <p className="card-text"><small className="text-muted">By {!author?"Unknown": author} on {date}</small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-dark">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }


export default NewsItem;
