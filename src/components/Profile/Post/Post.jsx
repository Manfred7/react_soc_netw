import React from 'react';
import s from "../Post/Post.module.css";

const Post = (props) => {
    return (
        <div className={s.item}>
            <img
                src="https://galeri14.uludagsozluk.com/812/samuray-jack-in-terlikleri_1439982_m.jpg"
            />

            {props.text}
            <div><span>Like</span>
            </div>

        </div>
    );
};

export default Post;
