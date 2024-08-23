import React from 'react';
import './HealthArticles.css';

const healthArticleList = [
    {
        imgUrl: "https://www.medconsultasia.com/wp-content/uploads/2022/11/Syphilis-Info-1.png",
        title: "What Is Syphilis? Read This Blog To Know More",
    },
    {
        imgUrl: "https://flo.health/uploads/media/sulu-1000x-inset/08/7358-sexually-transmitted-infections-types-10_1006x755.jpg?v=1-0",
        title: "All You Need To Know About Common Transmitted Diseases",
    },
    {
        imgUrl: "https://www.india.com/wp-content/uploads/2023/09/00000014-4.jpg",
        title: "Best Home Remedies For Thick Eyebrows",
    },
    {
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoQRl32j4jpAJtGBXMA-_XjzxccaewlZeDzw&usqp=CAU",
        title: "Natural Home Remedies To Reduce Belly Fat",
    },
    {
        imgUrl: "https://i.pinimg.com/736x/cd/05/fb/cd05fbec01dda4e23791e4bd35ba98b9.jpg",
        title: "Best Home Remedies for Oily Scalp and Hair",
    },
    {
        imgUrl: "https://static.toiimg.com/thumb/msid-105032032/105032032.jpg?width=500&resizemode=4",
        title: "Turmeric: Uses, Benefits, Side Effects, and More!",
    },
];

const HealthArticles = () => {
    return (
        <div className="health-articles container">
            <h1 className="title">
                Health Articles <span className="view-all">View All</span>
            </h1>
            <h3 className="subtitle">Get up-to-date on our latest health updates</h3>
            <div>
                {healthArticleList.map((article, index) => (
                    <div key={index} className="article-card">
                        <img src={article.imgUrl} alt={article.title} />
                        <p>{article.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HealthArticles;
