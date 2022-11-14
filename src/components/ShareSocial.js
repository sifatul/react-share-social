import React, { useState } from 'react';
import FacebookShare from "./ShareButtons/FacebookShare";
import TwitterShare from "./ShareButtons/TwitterShare";
import RedditShare from "./ShareButtons/RedditShare";
// import KakaoShare from "./ShareButtons/KakaoShare";
import HatenaShare from "./ShareButtons/HatenaShare";
import InstapaperShare from "./ShareButtons/InstapaperShare";
import LineShare from "./ShareButtons/LineShareButton";
import LinkedinShare from "./ShareButtons/LinkedinShareButton";
import LivejournalShare from "./ShareButtons/LivejournalShareButton";
import MailruShare from "./ShareButtons/MailruShareButton";
import OKShare from "./ShareButtons/OKShareButton";
import WhatsApp from "./ShareButtons/WhatsappShare";
import PinterestShare from "./ShareButtons/PinterestShareButton";
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles({
    container: {
        position: 'relative',
        background: 'white',
        color: '#000',
        /* width: 100%, */
        maxWidth: '568px',
        height: 'auto',
        padding: '30px',
        outline: 'none',
    },
    title: {
        textAlign: 'left',
        fontFamily: 'Apple SD Gothic Neo',
        fontStyle: 'normal',
        fontWeight: 800,
        fontSize: '20px',
        lineHeight: '24px',
    },
    iconContainer: {
        /* width: 50%, */
        /* margin: auto, */
        /* margin-bottom: 1.5rem, */
        paddingTop: '20px',
        paddingBottom: '15px',
        textAlign: 'left',
        '& button': {
            flex: '1 1 auto',
            border: 'none',
            textAlign: 'center',
            margin: '5px',
        },

    },
    closeImg: {
        position: 'absolute',
        display: 'flex',
        top: '20px',
        right: '20px',
        height: '50px',
        width: '50px',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        zIndex: 9,
        '&:hover': {
            cursor: 'pointer',
        }
    },
    copyContainer: {
        position: 'relative',
        padding: '14px',
        border: '1px solid grey',
        color: '#263238',
        cursor: 'text',
        display: 'inline-flex',
        fontSize: '14px',
        boxSizing: 'border-box',
        alignItems: 'center',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        letterSpacing: '-0.05px',
        width: '100%',
        fontStyle: 'normal',
        fontWeight: 'normal',
        background: 'black',
        borderRadius: '4px',
        /* identical to box height, or 143% */
    },
    copyUrl: {
        color: 'white',
        maxWidth: 'calc(100% - 55px)',
        overflowX: 'auto',
        fontSize: '16px',
        lineHeight: '24px',
        whiteSpace: 'nowrap',
    },
    copyIcon: {
        width: 'auto',
        position: 'absolute',
        right: '0px',
        color: '#0C66FF',
        fontWeight: 'bold',
        '& p': {
            paddingRight: '15px',
            paddingLeft: '15px',
        },
        '&:hover': {
            cursor: 'pointer',
        }
    },
    modalStyle: {
        outline: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&:focus': {
            outline: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: 'none',
        },
        '&:hover': {
            border: 'none',
            outline: 'none',
        }
    }
});

const components = {
    facebook: FacebookShare,
    twitter: TwitterShare,
    reddit: RedditShare,
    hatena: HatenaShare,
    instapaper: InstapaperShare,
    line: LineShare,
    linkedin: LinkedinShare,
    livejournal: LivejournalShare,
    mailru: MailruShare,
    ok: OKShare,
    whatsapp: WhatsApp,
    pinterest: PinterestShare,

};


function ShareSocial(props) {
    const classes = useStyles();
    const [isCopied, setIsCopied] = useState(false);
    const { title, socialTypes = ['facebook', 'twitter'], style } = props;
    const copyToClipboard = (text) => {
        if (navigator && navigator.clipboard) navigator.clipboard.writeText(text)
            .then(() => { setIsCopied(true) })
            .catch((error) => { alert(`Copy failed! ${error}`) });
    }
    function getComponent(type) {
        // Wrong! JSX type can't be an expression.
        // Correct! JSX type can be a capitalized variable.
        const SpecificMedia = components[type];
        return <SpecificMedia {...props} socialType={type} />;
    }




    return (
        <div className={classes.container} style={style}>
            {title && <h1 className={classes.title}> {title} </h1>}
            <div className={classes.iconContainer}>
                {Array.isArray(socialTypes) && socialTypes.map((type, idx) => (
                    <React.Fragment key={"social_item_" + idx}>
                        {getComponent(type)}
                    </React.Fragment>
                ))}

            </div>

            {<div className={classes.copyContainer}>
                <div className={classes.copyUrl}>
                    {props.url}
                </div>
                <div className={classes.copyIcon}
                    onClick={() => copyToClipboard(props.url)}
                ><p> {isCopied ? 'Copied' : 'Copy'} </p></div>
            </div>}
        </div>

    );
}

export default ShareSocial;
