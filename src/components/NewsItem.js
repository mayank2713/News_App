import React, { useState } from 'react';
import './NewsItem.css';

const NewsItem = (props) => {
    const [readmoreDescription, setReadmoreDescription] = useState(false);
    const [readmoreTitle, setReadmoreTitle] = useState(false);

    const { title, description, imageUrl, newsUrl, author, date, source } = props;

    const descriptionToShow = readmoreDescription ? description : `${description.substring(0, 100)}....`;

    const titleToShow = readmoreTitle ? title : `${title.substring(0,80)}....`;

    const readmoreHandler = (type) => {
        if (type === 'description') {
            setReadmoreDescription(!readmoreDescription);
        } else if (type === 'title') {
            setReadmoreTitle(!readmoreTitle);
        }
    };

    return (
        <div className='my-3 outer-card'>
            <div className="card">
                <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
                    <span className='badge rounded-pill bg-danger'>{source}</span>
                </div>
                <img src={!imageUrl ? "https://resize.indiatvnews.com/en/centered/newbucket/1200_675/2023/11/breaking-news-template-6-1698627651-1698805434.jpg" : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">
                        {titleToShow}
                        {title.length > 50 && (
                            <span className="read-more" onClick={() => readmoreHandler('title')}>
                                {readmoreTitle ? ` Show Less` : ` Read More`}
                            </span>
                        )}
                    </h5>
                    <div className="description">
                        {descriptionToShow}
                        {description.length > 100 && (
                            <span className="read-more" onClick={() => readmoreHandler('description')}>
                                {readmoreDescription ? ` Show Less` : ` Read More`}
                            </span>
                        )}
                    </div>
                    <p className='card-text'><small className='text-muted'>By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                    <a rel='noreferrer' href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read More...</a>
                </div>
            </div>
        </div>
    );
}

export default NewsItem;
