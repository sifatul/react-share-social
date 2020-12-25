import React from 'react'
import FacebookShare from "./ShareButtons/FacebookShare";
import TwitterShare from "./ShareButtons/TwitterShare";
import RedditShare from "./ShareButtons/RedditShare";
import KakaoShare from "./ShareButtons/KakaoShare";
import HatenaShare from "./ShareButtons/HatenaShare";
import InstapaperShare from "./ShareButtons/InstapaperShare";
import LineShare from "./ShareButtons/LineShareButton";
import LinkedinShare from "./ShareButtons/LinkedinShareButton";
import LivejournalShare from "./ShareButtons/LivejournalShareButton";
import MailruShare from "./ShareButtons/MailruShareButton";
import OKShare from "./ShareButtons/OKShareButton";
import PinterestShare from "./ShareButtons/PinterestShareButton";
 


import Styles from './Styles/main.module.css';


function ShareSocial(props) {

    const { title, socialTypes = ['facebook', 'twitter'], style} = props;
    const copyToClipboard = (text) => {
        if (navigator && navigator.clipboard) navigator.clipboard.writeText(text)
            .then(() => { alert(`Copied!`) })
            .catch((error) => { alert(`Copy failed! ${error}`) });
    }

    return (
        <div className={Styles.container} style={style}>
            {title && <h1 className={Styles.title}> {title} </h1>}
            <div className={Styles.iconContainer}>
                {Array.isArray(socialTypes) && socialTypes.map((type, idx) => (
                    <React.Fragment key={"social_item_" + idx}>
                        {type === 'facebook' && <FacebookShare {...props} />}
                        {type === 'twitter' && <TwitterShare {...props} />}
                        {type === 'reddit' && <RedditShare {...props} />}
                        {/* {type === 'kakao' && <KakaoShare  {...props} />} */}
                        {type === 'hatena' && <HatenaShare  {...props} />}
                        {type === 'instapaper' && <InstapaperShare  {...props} />}
                        {type === 'line' && <LineShare  {...props} />}
                        {type === 'linkedin' && <LinkedinShare  {...props} />}
                        {type === 'livejournal' && <LivejournalShare  {...props} />}
                        {type === 'mailru' && <MailruShare  {...props} />}
                        {type === 'ok' && <OKShare  {...props} />}
                        {/* {type === 'pinterest' && <PinterestShare  {...props} />} */}
                    </React.Fragment>
                ))}

            </div>

            {<div className={Styles.copyContainer}>
                <div className={Styles.copyUrl}>
                    {props.url}
                </div>
                <div className={Styles.copyIcon}
                    onClick={() => copyToClipboard(props.url)}
                ><p> Copy </p></div>
            </div>}
        </div>

    );
}

export default ShareSocial;
