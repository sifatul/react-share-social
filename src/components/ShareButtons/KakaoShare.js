import React, { useEffect } from 'react'

const KakaoShare = ({ onSocialButtonClicked, url, title, kakaoAPIKey, socialType,thumbnail='' }) => {


    useEffect(() => {
        const script = document.createElement('script')
        script.src = 'https://developers.kakao.com/sdk/js/kakao.js'
        script.async = true
        document.body.appendChild(script)
        return () => {
            document.body.removeChild(script)
        }
    }, [])

    const sendKakaoMessage = () => {
        onSocialButtonClicked(`${socialType || 'button'} clicked.`)
    }
    if (window.Kakao) {
        const kakao = window.Kakao
        if (!kakao.isInitialized()) kakao.init(kakaoAPIKey)
        kakao.Link.sendDefault({
            // container: '#kakao-link-btn',
            objectType: 'feed',
            content: {
                title: title,
                description: "",
                imageUrl: thumbnail,
                link: {
                    mobileWebUrl: "",
                    webUrl: url,
                },
            },

        })
    }



return (<div className="kakao-share-button" >
        <button id="kakao-link-btn" style={{
            width: '40px', height: '40px', borderRadius: '32px', backgroundImage: "url('/images/icon/kakaoIcon.png')",
            backgroundPosition: 'center', backgroundSize: 'cover'
        }} onClick={() => sendKakaoMessage()}>
        </button>
    </div>)
 


    }
export default KakaoShare;