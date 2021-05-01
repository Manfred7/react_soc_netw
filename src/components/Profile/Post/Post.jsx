import React from 'react';
import s from "../Post/Post.module.css";

const Post = (props) => {
    return (
        <div className={s.item}>
            <img
                src="https://galeri14.uludagsozluk.com/812/samuray-jack-in-terlikleri_1439982_m.jpg"
            />

            {props.text}

            <div>
                <div className={s.like}>
                    <span>LikeCount = {props.LikeCount}</span>
                    <img src="https://31.img.avito.st/avatar/social/256x256/6329389031.jpg" width="20px" height="20px"/>
                </div>
            </div>

        </div>
    );
};

export default Post;
