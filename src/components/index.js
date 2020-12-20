import React from 'react'
import {
    FacebookShare,
    TwitterShare,
    RedditShare,
    KakaoShare
} from "./ShareButtons";


import Styles from './Styles/main.module.css';

import {initialize, getData} from './ShareButtons/contexts/share_ctx'

function ShareSocial(props) {
    initialize(props)
    const {title, socialTypes=['facebook','twitter'], style, url='url_to_share.com'} = props;
    const copyToClipboard = (text) => {
        if (navigator && navigator.clipboard) navigator.clipboard.writeText(text)
            .then(() => { alert(`Copied!`) })
            .catch((error) => { alert(`Copy failed! ${error}`) });
    }

    return (
        <div className={Styles.container} style={style}>
            {title && <h1 className={Styles.title}> {title} </h1>}
            <div className={Styles.iconContainer}>
                {Array.isArray(socialTypes) && socialTypes.map( (type,idx) => (
                    <React.Fragment key={"social_item_"+idx}>
                        {type === 'facebook' && <FacebookShare/>}
                        {type === 'twitter' && <TwitterShare/>}
                        {type === 'reddit' && <RedditShare/>}
                        {type === 'kakao' && <KakaoShare/>}
                    </React.Fragment>
                ))}

            </div>

            {<div className={Styles.copyContainer}>
                    <div className='copyUrl'>
                        {getData().url}
                    </div>
                    <div  className={Styles.copyIcon}
                        onClick={() => copyToClipboard(getData().url)}
                    ><p> Copy </p></div>
                </div>}
        </div>

    );
}

export default ShareSocial;
