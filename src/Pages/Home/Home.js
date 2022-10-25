import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../Shared/CourseSummaryCard/CourseSummaryCard';
import  './Home.css';

const Home = () => {

    const allNews = useLoaderData();
    return (
        <div >
          <div className="home">  <h6>all course here: {allNews.length}</h6></div>
          <div className="home-2">
          {
                allNews.map(news => <CourseSummaryCard
                key={news._id}
                news={news}
                >


                </CourseSummaryCard>)
            }
          </div>
        </div>
    );
};

export default Home;