import React from 'react';
import Header from '../Shared/Headers/Header';
import './blog.css'
import Footer from '../Shared/Footer/Footer'

const Blog = () => {
    return (
        <div>
             <Header></Header>
            <div className='ques-1'>
                <h3> what is cors?</h3>
                <p>CORS stands for Cross-Origin Resource Sharing. It allows us 
                    to relax the security applied to an API. This is done by 
                    bypassing the Access-Control-Allow-Origin headers, which
                     specify which origins can access the API.</p>

            </div>
            <div className='ques-2'>
                <h3> How does the private route work?</h3>
                <p>The private route component is similar to the public route, the only 
                    change is that redirect URL and authenticate condition. If the user 
                    is not authenticated he will be redirected to the login page and the
                     user can only access the authenticated routes If he is authenticated (Logged in)..</p>

            </div>
            <div className='ques-3'>
                <h3> Why are you using firebase? What other options do you have to implement authentication?</h3>
                <p>Firebase Authentication provides backend services, easy-to-use SDKs, 
                    and ready-made UI libraries to authenticate users to your app. 
                    It supports authentication using passwords, phone numbers, popular 
                    federated identity providers like Google, Facebook and Twitter, and more.Usually, 
                    authentication by a server entails the use of a user name and password. Other 
                    ways to authenticate can be through cards, retina scans, voice recognition, and 
                    fingerprints.</p>

            </div>
            <div className='ques-4'>
                <h3>What is Node? How does Node works?</h3>
                <p>Node.js is a JavaScript runtime environment that achieves low latency 
                    and high throughput by taking a “non-blocking” approach to serving requests.
                     In other words, Node.js wastes no time or resources on waiting for I/O
                      requests to return.</p>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blog;