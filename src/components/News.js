import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";

const News = (props)=>{
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
   
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    } 

    const updateNews = async ()=> {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8c89b22abd354d7db663ec111231df5b&page=${page}&pageSize=${props.pageSize}`; 
        setLoading(true)
        let data = await axios.get(url);
        props.setProgress(30);
        let parsedData = data.data;
        props.setProgress(70);
        setArticles(parsedData.articles)
        console.log(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100);
         document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
    

    }

    useEffect(() => {
        updateNews(); 
    },[])
 

    // const handlePrevClick = async () => {
    //     setPage(page-1)
    //     updateNews();
    // }

    // const handleNextClick = async () => { 
    //     setPage(page+1)
    //     updateNews()
    // }

    const fetchMoreData = async () => {   
        setPage(page+1) 
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8c89b22abd354d7db663ec111231df5b&page=${page}&pageSize=${props.pageSize}`;
        let data = await axios.get(url);
        let parsedData = data.data;
        console.log(parsedData);
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
      };
 
        return (
            <>
                <h1 className="text-center" style={{ margin: '35px 0px' }}>NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner/>}
                > 
                    <div className="container">
                         
                    <div className="row">
                        {articles.map((element,id) => {
                            return <div className="col-md-4" key={id}>
                                {console.log(element.url)}
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} iurl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                    </div> 
                </InfiniteScroll>

            </>
        )
    
}


News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News