import React from 'react';
import Header from './components/header';
import Post from './components/post';
import './scss/base.scss';


export default class extends React.Component{
    

    render(){
        let posts = [
            {
                name: "NAME",
                image: "IMAGE",
                liked: true,
                likes: 6,
            },
            {
                name: "NAME",
                image: "IMAGE",
                liked: true,
                likes: 6,
            },
            {
                name: "NAME",
                image: "IMAGE",
                liked: true,
                likes: 6,
            },
            {
                name: "NAME",
                image: "IMAGE",
                liked: true,
                likes: 6,
            },
        ];

        return(
            <div className="wrap">
                <Header />
                <div className="tape-wrap tape-wrap-center">
                    <div className="tape">
                        {posts.map((post, i) => (
                            <Post name={post.name} image={post.image} liked={post.liked} likes={post.likes} key={i} />
                        ))}
                    </div>
                    <div className="right-bar right-bar-fixed">

                    </div>
                </div>
            </div>
        );
    }
}
