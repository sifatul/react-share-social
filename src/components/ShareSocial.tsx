import { Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import { FacebookIcon, FacebookShareButton, HatenaIcon, HatenaShareButton, InstapaperIcon, InstapaperShareButton, LineIcon, LineShareButton, LinkedinIcon, LinkedinShareButton, LivejournalIcon, LivejournalShareButton, MailruIcon, MailruShareButton, OKIcon, OKShareButton, PinterestIcon, PinterestShareButton, RedditIcon, RedditShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton, EmailIcon, EmailShareButton, ViberShareButton, ViberIcon, TelegramShareButton, TelegramIcon, WorkplaceShareButton, WorkplaceIcon } from "react-share";
import { IndexPropsType } from '../types';

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
        minWidth: '250px'
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

const components: any = {
    facebook: {
        Button: FacebookShareButton,
        Icon: FacebookIcon
    },
    twitter: {
        Button: TwitterShareButton,
        Icon: TwitterIcon
    },
    reddit: {
        Button: RedditShareButton,
        Icon: RedditIcon
    },
    hatena: {
        Button: HatenaShareButton,
        Icon: HatenaIcon
    },
    instapaper: {
        Button: InstapaperShareButton,
        Icon: InstapaperIcon
    },
    line: {
        Button: LineShareButton,
        Icon: LineIcon
    },
    linkedin: {
        Button: LinkedinShareButton,
        Icon: LinkedinIcon

    },
    livejournal: {
        Button: LivejournalShareButton,
        Icon: LivejournalIcon
    },
    mailru: {
        Button: MailruShareButton,
        Icon: MailruIcon
    },
    ok: { Button: OKShareButton, Icon: OKIcon },
    whatsapp: {
        Button: WhatsappShareButton,
        Icon: WhatsappIcon
    },
    pinterest: {
        Button: PinterestShareButton,
        Icon: PinterestIcon
    },
    email: {
        Button: EmailShareButton,
        Icon: EmailIcon
    },
    viber: {
        Button: ViberShareButton,
        Icon: ViberIcon
    },
    telegram: {
        Button: TelegramShareButton,
        Icon: TelegramIcon
    },
    workspace: {
        Button: WorkplaceShareButton,
        Icon: WorkplaceIcon
    }

};


function ShareSocial(props: IndexPropsType) {
    const classes = useStyles();
    const [isCopied, setIsCopied] = useState(false);
    const { title, socialTypes = ['facebook', 'twitter'], style, url, onSocialButtonClicked = () => { } } = props;
    const copyToClipboard = (text: string) => {
        if (navigator && navigator.clipboard) navigator.clipboard.writeText(text)
            .then(() => { setIsCopied(true) })
            .catch((error) => { alert(`Copy failed! ${error}`) });
    }
    function getComponent(type: string) {
        const { Button, Icon } = components[type];
        return <Tooltip title="" placement="top">
            <Button
                url={url}
                quote={title}
                onClick={() => onSocialButtonClicked(type)}
            >
                <Icon
                    size={40}
                    round
                />
            </Button>
        </Tooltip>
    }




    return (
        <div className={classes.container} style={style?.root}>
            {title && <h1 className={classes.title} style={style?.title}> {title} </h1>}
            <div className={classes.iconContainer}>
                {Array.isArray(socialTypes) && socialTypes.map((type, idx) => (
                    <React.Fragment key={"social_item_" + idx}>
                        {getComponent(type)}
                    </React.Fragment>
                ))}

            </div>

            <div className={classes.copyContainer} style={style?.copyContainer}>
                <div className={classes.copyUrl}>
                    {url}
                </div>
                <div className={classes.copyIcon}
                    onClick={() => copyToClipboard(url)}
                ><p> {isCopied ? 'Copied' : 'Copy'} </p></div>
            </div>
        </div>

    );
}

export default ShareSocial;
