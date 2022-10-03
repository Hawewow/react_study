import {rerenderEntireTree} from "../render";


let state = {
   profilePage : {
 posts : [
    {id:1, message: 'Hi how are you?', likesCount: 12},
    {id:2, message: 'It\'s my first post', likesCount: 11},
    {id:3, message: 'ahahahahahahh', likesCount: 35},
    {id:4, message: 'lol kek', likesCount: 78},
],
newPostText: 'lol'
},

    dialogsPage : {
  dialogs : [
    {id:1, name: 'Zheka'},
    {id:2, name: 'Kate'},
    {id:3, name: 'Kostya'},
    {id:4, name: 'Nadya'}
  ],
  messages : [
    {id:1, message: 'Hi'},
    {id:2, message: 'I like you'},
    {id:3, message: 'You wanna play?'},
    {id:4, message: 'yo'}
  ]},
}

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0
  };

   state.profilePage.posts.push(newPost);
   rerenderEntireTree(state);


}


export default state;