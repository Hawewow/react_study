    import React from "react";
    import s from './ProfileInfo.module.css';

    const ProfileInfo = () => {
    return (
        <div>
        <div>  
           <img src='https://estnn.com/wp-content/uploads/2021/03/Wow-Classic-747x420.jpg' />
        </div>
        <div className={s.descriptionBlock}>
           ava + descriptoin
        </div>
    </div>
        )
    }
    export default ProfileInfo;