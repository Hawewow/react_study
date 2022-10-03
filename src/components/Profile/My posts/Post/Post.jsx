        import React from "react";
        import s from './Post.module.css';

        const Post = (props) => {

          return ( 
                <div className={s.item}>
                <img src= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPnAlqcjstvdTx5BkML5o7kRoCXq8dXH3s7g&usqp=CAU' />
                {props.message}
                <div>
                <span>like</span> {props.likesCount}
                </div>
              </div>
              
          )
        }
        export default Post;