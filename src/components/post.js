import React from 'react';

export default class extends React.Component{
    render(){
        return(
            <div className="post-wrap">
                <div className="post-header">
                    name - {this.props.name}
                </div>
                <div className="post-content">
                    content - {this.props.image}
                </div>
                <div className="post-tools">
                    liked - {this.props.liked ? 'true' : 'false'}
                    <br/>
                    likes - {this.props.likes}
                </div>
                <div className="post-comments-wrap">
                    
                </div>
            </div>
        )
    }
}
