        import React from "react";
        import s from './MyPosts.module.css';
        import Post from "./Post/Post";

        const MyPosts = (props) => {

             let postsElements = 
                 props.posts.map ( p => <Post message={p.message} likesCount={p.likesCount} />)

             let newPostElement = React.createRef();

             let addPost = () => {
                let text = newPostElement.current.value;
                props.addPost(text)
                newPostElement.current.value = '';
             }

             let onPostChange = () => {

             }

          return ( 
          <div className={s.postsBlock}>
            <h2>My posts</h2>
            <div>
              <div>
              <textarea onChange={onPostChange} ref={newPostElement} value = {props.newPostText} />
              </div>
              <div>
              <button onClick= {addPost} >Add post</button>
              </div> 
            </div>
            <div className={s.posts}>
              {postsElements}
            </div>
          </div>
          )
        }
        export default MyPosts;