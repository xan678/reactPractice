import React from "react";
import ReactDom from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import faker from "faker";

const App = () => {
    return (
        <div>
            <div className="container">
            </div>
            <div className="ui container comments">
                <ApprovalCard>
                    <CommentDetail 
                        author = "Ankit Ojha" 
                        time="5:00 AM" 
                        comment="I enjoyed reading this!" 
                        imgSrc={faker.image.image()}
                    />
                </ApprovalCard>

                <ApprovalCard>
                    <CommentDetail 
                        author = "Pushpa Ojha" 
                        time="7:24 AM"  
                        comment="Nice blog post, keep at it!!" 
                        imgSrc={faker.image.image()}
                    />
                </ApprovalCard>

                <ApprovalCard>
                    <CommentDetail 
                        author = "Ravi Ojha" 
                        time="11:10 AM" 
                        comment="Thanks for this." 
                        imgSrc={faker.image.image()}
                    />
                </ApprovalCard>
            </div>
        </div>   
    );
}

ReactDom.render(<App/>, document.querySelector('#root'));