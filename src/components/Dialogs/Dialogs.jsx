import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id

    return <div className={s.dialog + '' + s.active}>
     <img src= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPnAlqcjstvdTx5BkML5o7kRoCXq8dXH3s7g&usqp=CAU' />
    <NavLink to={path}>{props.name}</NavLink>
  </div>
   }

const Message = (props) => {
   return <div className={s.message}>{props.message}</div>
}


const Dialogs = (props) => {


    let dialogsElements = props.dialogs.map ( d => <DialogItem name={d.name} id={d.id} /> );
    let messagesElements = props.messages.map ( m => <Message message={m.message} /> );

    let newMessageElement = React.createRef();

    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    }

    return (
        <div className={s.dialogs}>
           <div className={s.dialogsItems}>
               { dialogsElements }
           </div>
           <div className={s.messages}>
               {messagesElements}
           </div>
           <div className={s.messages}>
              <textarea ref={newMessageElement}></textarea>
           </div>
           <div className={s.messages}>
               <button onClick={addMessage}> Add message</button>
           </div>
        </div>
    )
}


export default Dialogs;