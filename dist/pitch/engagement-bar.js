(function () {
  if (window.location.search.indexOf('engagementBar=false') > -1) return;
  var menuData = window.storyMenu;
  var containerScrollHeight = 0;
  var menuTriggerHTML =
    '<div class="menu__engagement"> <div class="menu__engagement-open"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"> <g clip-path="url(#clip0_9679_4331-engagement)"> <path d="M2 2.66797H14V4.0013H2V2.66797ZM2 7.33464H14V8.66797H2V7.33464ZM2 12.0013H14V13.3346H2V12.0013Z" fill="#12033E"/> </g> <defs> <clipPath id="clip0_9679_4331-engagement"> <rect width="16" height="16" fill="white"/> </clipPath> </defs> </svg> </div><div class="menu__engagement-close"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"> <g clip-path="url(#clip0_9679_4038-engagement)"> <path d="M7.99999 7.05781L11.3 3.75781L12.2427 4.70048L8.94266 8.00048L12.2427 11.3005L11.3 12.2431L7.99999 8.94315L4.69999 12.2431L3.75732 11.3005L7.05732 8.00048L3.75732 4.70048L4.69999 3.75781L7.99999 7.05781Z" fill="#12033E"/> </g> <defs> <clipPath id="clip0_9679_4038-engagement"> <rect width="16" height="16" fill="white"/> </clipPath> </defs> </svg> </div></div>';
  var menuContentHTML =
    '<div class="engagement-menu"><div class="engagement-menu__title">MENU:</div><div class="engagement-menu__list"></div></div>';
  var menuContentCSS =
    '#sd-engagement-wrapper .engagement__top-controls{display: flex; align-items: center; justify-content: flex-end;}#sd-engagement-wrapper .engagement__top-controls.is-menu{justify-content: space-between;}#sd-engagement-wrapper .menu__engagement{margin-left: 16px; padding: 7px; display: flex; align-items: center; justify-content: center; border-radius: 4px; border: 1px solid #e7e6ec; background: #fff; box-shadow: 0px 1px 0px 0px #eae6ec, 0px -2px 0px 0px rgba(244, 243, 246, 0.25) inset; cursor: pointer;}#sd-engagement-wrapper .menu__engagement-open{display: flex;}#sd-engagement-wrapper .menu__engagement-close{display: none;}#sd-engagement-wrapper .menu__engagement.menu-open .menu__engagement-open{display: none;}#sd-engagement-wrapper .menu__engagement.menu-open .menu__engagement-close{display: flex;}#sd-engagement-wrapper #sd-engagement-bar-mobile.menu-open .engagement__overlay > *{display: none;}#sd-engagement-wrapper #sd-engagement-bar-mobile.menu-open .engagement__overlay .engagement__top-controls{display: flex;}#sd-engagement-wrapper #sd-engagement-bar-mobile .engagement-menu{padding: 0 24px; position: absolute; z-index: 1; top: 70px; left: 0; width: 100%; background-color: #fff; opacity: 0; visibility: hidden; transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out; display: none;}#sd-engagement-wrapper #sd-engagement-bar-mobile .engagement-menu.menu-open{display: block; opacity: 1; visibility: visible;}#sd-engagement-wrapper #sd-engagement-bar-mobile .engagement-menu::after{content: ""; position: absolute; bottom: 0; left: 0; width: 100%; height: 14px; opacity: 0.6999999881; background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #fff 100%);}#sd-engagement-wrapper #sd-engagement-bar-mobile .engagement-menu__list{max-height: 411px; margin-right: -12px; padding-right: 12px; overflow-y: auto;}#sd-engagement-wrapper #sd-engagement-bar-mobile .engagement-menu__list::-webkit-scrollbar-track{background: #e7e6ec; border-radius: 24px;}#sd-engagement-wrapper #sd-engagement-bar-mobile .engagement-menu__list::-webkit-scrollbar-thumb{background: #d0cdd8; border-radius: 24px;}#sd-engagement-wrapper #sd-engagement-bar-mobile .engagement-menu__title{color: #88819f; font-size: 10px; font-style: normal; font-weight: 600; line-height: normal; text-transform: uppercase; margin: 0 0 16px;}#sd-engagement-wrapper #sd-engagement-bar-mobile .engagement-menu__item{position: relative; padding: 7px 12px; color: #12033e; font-size: 16px; font-style: normal; font-weight: 600; line-height: 24px; cursor: pointer; transition: background 0.3s ease-in-out, border-color 0.3s ease-in-out; border-radius: 4px; background: transparent; border-right: 4px solid transparent; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; margin-bottom: 18px;}#sd-engagement-wrapper #sd-engagement-bar-mobile .engagement-menu__item:hover, #sd-engagement-wrapper #sd-engagement-bar-mobile .engagement-menu__item.current-active{background: rgba(231, 230, 236, 0.5); border-color: var(--theme-color-1);}';
  var containerMinHeight =
    window.badgesHandlerOptions &&
    window.badgesHandlerOptions.isEngagementActive === 'true' &&
    window.innerWidth >= 1200
      ? '56px'
      : 'unset';
  var engagementBarCSS =
    '@media screen and (min-width: 1201px){html:not(.sd-fullscreen-presentation), body:not(.sd-fullscreen-presentation){scroll-padding-top: 56px;}}body.sd-fullscreen-presentation #sd-engagement-bar-top{display: none !important;}body.sd-fullscreen-presentation #sd-engagement-wrapper {min-height: unset;}#sd-engagement-wrapper{display: none;min-height:' +
    containerMinHeight +
    ';}#sd-engagement-bar-top{position: fixed; top: 0; left: 0; width: 100%; height: 56px; z-index: 9999; background: #ffffff; box-shadow: 0px 8px 12px rgba(18, 3, 62, 0.1), 0px 0px 1px rgba(18, 3, 62, 0.1); border-top: 1px solid #e7e6ec; border-bottom: 1px solid #e7e6ec;}#sd-engagement-bar-top .engagement__wrapper{display: flex; align-items: center; justify-content: space-between; height: 100%;}#sd-engagement-bar-top .engagement__left, #sd-engagement-bar-top .engagement__right{display: flex; align-items: center; height: 100%;}#sd-engagement-bar-top .engagement__storydoc-logo{margin: 8px; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center;}#sd-engagement-bar-top .engagement__storydoc-logo svg{transition: opacity 0.3s ease-in-out;}#sd-engagement-bar-top .engagement__storydoc-logo:hover svg{opacity: 0.8;}#sd-engagement-bar-top .engagement__organization-logo{padding: 10px 24px 10px 8px; margin-left: 8px; display: flex; align-items: center; justify-content: center; position: relative; max-width: 120px; width: 100%; height: 100%;}#sd-engagement-bar-top .engagement__organization-logo::after{content: ""; position: absolute; transform: translateY(-50%); top: 50%; right: 0; height: 16px; width: 1px; background-color: #e7e6ec;}#sd-engagement-bar-top .engagement__organization-logo img{width: auto; height: auto; max-width: 100%; max-height: 100%; object-fit: contain;}#sd-engagement-bar-top .engagement__version-desc{margin-left: 24px;}#sd-engagement-bar-top .engagement__version-title{font-weight: 600; font-size: 13px; line-height: 18px; color: #12033e; max-width: 274px; min-width: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;}#sd-engagement-bar-top .engagement__version-creator{display: flex; align-items: center; margin-top: 2px;}#sd-engagement-bar-top .engagement__version-creator span{font-weight: 400; font-size: 10px; line-height: 12px; color: #12033e; margin-right: 8px; white-space: nowrap;}#sd-engagement-bar-top .engagement__version-creator .version-creator__image{width: 16px; height: 16px; margin-right: 6px; flex-shrink: 0;}#sd-engagement-bar-top .engagement__version-creator .version-creator__image img{width: 100%; height: 100%; border-radius: 50%; object-fit: cover; vertical-align: unset;}#sd-engagement-bar-top .engagement__version-creator .version-creator__image span{border: 1px solid #e7e6ec; border-radius: 50%; display: block; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; font-size: 7px;}#sd-engagement-bar-top .engagement__version-creator .version-creator__name{font-weight: 400; font-size: 10px; line-height: 12px; color: #12033e; white-space: nowrap;}#sd-engagement-bar-top .engagement__controls{display: flex; align-items: center;}#sd-engagement-bar-top .engagement__controls .control__item{width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; background-color: #ffffff; border: none; margin-right: 12px; padding: 0; cursor: pointer; border-radius: 4px;}#sd-engagement-bar-top .engagement__controls .control__item svg rect{fill: #ffffff; transition: fill 0.2s ease-in-out;}#sd-engagement-bar-top .engagement__controls .control__item:hover{outline: 1px solid #b8b3c5; box-shadow: inset 0px 2px 0px rgba(212, 206, 218, 0.4);}#sd-engagement-bar-top .engagement__controls .control__item:hover svg rect{fill: #d0cdd8;}#sd-engagement-bar-top .engagement__buttons{display: flex; align-items: center; padding-right: 16px;}#sd-engagement-bar-top .engagement__button{display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 13px; line-height: 20px; text-decoration: none; padding: 5px 12px; border-radius: 4px; transition: opacity 0.3s ease-in-out;}#sd-engagement-bar-top .engagement__button:hover{opacity: 0.7;}#sd-engagement-bar-top .engagement__button span.material-icons{font-size: 16px; margin-right: 5px;}#sd-engagement-bar-top .engagement__button.--primary{background: #ffffff; border: 1px solid #e7e6ec; box-shadow: 0px 1px 0px #eae6ec, inset 0px -2px 0px rgba(244, 243, 246, 0.25); margin-right: 12px; color: #12033e;}#sd-engagement-bar-top .engagement__button.--secondary{background: #561090; box-shadow: 0px 1px 0px rgba(69, 13, 115, 0.1), inset 0px -1px 0px rgba(41, 8, 69, 0.3); color: #fff;}#sd-engagement-bar-top .engagement__burger{margin-right: 13px; width: 30px; height: 30px; border-radius: 4px; background: transparent; border: none; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: background 0.2s ease-in-out; margin-right: 6px;}#sd-engagement-bar-top .engagement__burger:hover{outline: 1px solid #b8b3c5; box-shadow: inset 0px 2px 0px rgba(212, 206, 218, 0.4); background: #d0cdd8;}#sd-engagement-bar-top .engagement__burger svg{flex-shrink: 0;}@media screen and (max-width: 1199px){#sd-engagement-bar-top{display: none !important;}}#sd-engagement-bar-mobile{position: fixed; height: 200vh; width: 100%; bottom: 0; left: 0; background: transparent; display: flex; align-items: flex-end; z-index: 100; overflow: hidden; transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out; pointer-events: none; transition: background 0.3s ease-in-out;}@media screen and (min-width: 1200px){#sd-engagement-bar-mobile{display: none;}}#sd-engagement-bar-mobile .progress-bar__storydoc{padding: 4px 12px; background: #ffffff; border: 1px solid #e7e6ec; box-shadow: 0px 3px 5px rgba(18, 3, 62, 0.1), 0px 0px 1px rgba(18, 3, 62, 0.11), inset 0px -2px 0px rgba(244, 243, 246, 0.25); border-radius: 4px; display: flex; align-items: center; justify-content: center; text-decoration: none; transition: opacity 0.3s ease-in-out; margin: 16px auto 7px; width: fit-content;}#sd-engagement-bar-mobile .progress-bar__storydoc:hover{opacity: 0.8;}#sd-engagement-bar-mobile .progress-bar__storydoc span{font-weight: 600; font-size: 13px; line-height: 22px; color: #561090; margin-right: 4px;}#sd-engagement-bar-mobile .progress-bar__storydoc svg{transform: translateY(2px);}#sd-engagement-bar-mobile .engagement__wrapper{pointer-events: all; position: relative; background: #ffffff; border: 1px solid #e7e6ec; box-shadow: 0px -8px 12px rgba(18, 3, 62, 0.1), 0px 0px 1px rgba(18, 3, 62, 0.1); border-radius: 8px 8px 0px 0px; width: 100%;}#sd-engagement-bar-mobile .engagement__wrapper .swipe{position: absolute; top: 4px; left: 50%; transform: translateX(-50%); width: 100px; height: 4px; background: #12033e; opacity: 0.2; border-radius: 32px; z-index: 2;}#sd-engagement-bar-mobile .engagement__closed{position: relative; padding: 16px 8px 8px; transition: all 0.3s ease-in-out; overflow: hidden; opacity: 1; visibility: visible; max-height: 56px;min-height: 56px;}#sd-engagement-bar-mobile .engagement__closed .engagement__storydoc-logo{display: flex; align-items: center; justify-content: center; width: 32px; margin-right: 12px;}#sd-engagement-bar-mobile .engagement__closed .engagement__storydoc-logo svg{width: 100%; height: auto;}#sd-engagement-bar-mobile .engagement__closed .engagement__content{display: flex; align-items: center;}#sd-engagement-bar-mobile .engagement__closed .engagement__logo{padding-bottom: 0; margin-bottom: 0; width: 60px; height: 27px; padding-right: 12px; margin-right: 12px;}#sd-engagement-bar-mobile .engagement__closed .engagement__logo::after{top: 50%; right: 0; bottom: auto; width: 1px; height: 16px; transform: translate(0, -50%); left: auto;}#sd-engagement-bar-mobile .engagement__closed .engagement__logo img{height: 100%;}#sd-engagement-bar-mobile .engagement__closed .engagement__title{font-weight: 600; font-size: 11px; line-height: 18px; color: #0d0d0d; margin: 0; flex: 1; width: 100%; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; text-align: left;}#sd-engagement-bar-mobile .engagement__overlay{position: relative; flex-direction: column; justify-content: flex-end; transition: all 0.3s ease-in-out; min-height: 0; max-height: 0; overflow: hidden;}#sd-engagement-bar-mobile .engagement__overlay .close__engagement{display: flex; align-items: center; justify-content: flex-end; margin: 0 8px;}#sd-engagement-bar-mobile .engagement__close{position: absolute; top: 7px; right: 15px; cursor: pointer;}#sd-engagement-bar-mobile .engagement__main{display: flex; flex-direction: column; align-items: center; margin: 0 16px;}#sd-engagement-bar-mobile .engagement__logo{width: 130px; height: 63px; padding-bottom: 15px; margin-bottom: 15px; position: relative;}#sd-engagement-bar-mobile .engagement__logo::after{content: ""; position: absolute; bottom: 0; left: 50%; transform: translateX(-50%); width: 16px; height: 1px; background-color: #e7e6ec;}#sd-engagement-bar-mobile .engagement__logo img{width: 100%; height: 100%; object-fit: contain;}#sd-engagement-bar-mobile .engagement__title{font-weight: 600; font-size: 16px; line-height: 24px; text-align: center; color: #0d0d0d; margin-bottom: 12px;}#sd-engagement-bar-mobile .engagement__version-creator{background: #ffffff; border: 1px solid #e7e6ec; box-shadow: 0px 1px 1px rgba(18, 3, 62, 0.1), 0px 0px 1px rgba(18, 3, 62, 0.1); border-radius: 40px; display: flex; align-items: center; padding: 6px 14px 6px 6px;}#sd-engagement-bar-mobile .engagement__image{width: 24px; height: 24px; margin-right: 8px; flex-shrink: 0;}#sd-engagement-bar-mobile .engagement__image img{width: 100%; height: 100%; border-radius: 50%; object-fit: cover; vertical-align: unset; display: block;}#sd-engagement-bar-mobile .engagement__image span{border: 1px solid #e7e6ec; border-radius: 50%; display: block; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; font-size: 10px;}#sd-engagement-bar-mobile .engagement__name{font-weight: 600; font-size: 11px; line-height: 13px; color: #12033e; white-space: nowrap;}#sd-engagement-bar-mobile .engagement__buttons{position: relative; margin-top: 40px; padding-top: 40px; position: relative; display: grid; gap: 16px; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); width: 100%;}#sd-engagement-bar-mobile .engagement__buttons::after{content: ""; position: absolute; top: 0; left: -16px; width: calc(100% + 32px); border-top: 1px solid #e7e6ec;}#sd-engagement-bar-mobile .engagement__buttons a{display: flex; align-items: center; justify-content: center; text-decoration: none; border-radius: 4px; padding: 12px; font-weight: 600; font-size: 13px; line-height: 20px; color: #12033e; margin: 0 16px;}#sd-engagement-bar-mobile .engagement__buttons a span.material-icons{font-size: 16px; margin-right: 7px;}#sd-engagement-bar-mobile .engagement__buttons a.sd-engagement-button-primary{background: #ffffff; border: 1px solid #e7e6ec; box-shadow: 0px 1px 0px #eae6ec, inset 0px -2px 0px rgba(244, 243, 246, 0.25);}#sd-engagement-bar-mobile.opened{background: rgba(18, 3, 62, 0.6); pointer-events: all;}#sd-engagement-bar-mobile.opened .engagement__overlay{opacity: 1; visibility: visible;}#sd-engagement-bar-mobile.opened .engagement__closed{opacity: 0; visibility: hidden;}#sd-social-share{position: fixed; right: 15px; top: 65px; z-index: 9999; max-width: 436px; width: 100%; background: #ffffff; border: 1px solid #e7e6ec; box-shadow: 0px 10px 18px rgba(18, 3, 62, 0.1), 0px 0px 1px rgba(18, 3, 62, 0.1); border-radius: 4px; opacity: 0; visibility: hidden; transform: translateY(20px); transition: all 0.3s ease-in;}#sd-social-share.opened{transform: translateY(0); visibility: visible; opacity: 1;}#sd-social-share span.arrow{display: block; position: absolute; top: -7px; width: 12px; height: 12px; background-color: #fbfbfc; transform: rotate(-45deg); z-index: 2; border-top: 1px solid #e7e6ec; border-right: 1px solid #e7e6ec;}#sd-social-share .social-share__header{position: relative; display: flex; align-items: center; border-bottom: 1px solid #e7e6ec; padding: 16px;}#sd-social-share .social-share__header svg{margin-right: 8px;}#sd-social-share .social-share__header span{font-weight: 600; font-size: 11px; line-height: 13px; color: #12033e;}#sd-social-share .social-share__header .copied__info{display: flex; align-items: center; position: absolute; top: 50%; right: 16px; transform: translateY(-50%); opacity: 0; visibility: hidden; transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;}#sd-social-share .social-share__header .copied__info svg{width: 16px; height: auto; margin-right: 4px;}#sd-social-share .social-share__header .copied__info.copied{opacity: 1; visibility: visible;}#sd-social-share .social-share__body{padding: 16px;}#sd-social-share .social-share__title{font-weight: 600; font-size: 16px; line-height: 24px; text-align: center; color: #12033e; margin: 24px 0;}#sd-social-share .social-share__url{display: flex; align-items: center; margin-bottom: 32px;}#sd-social-share .social-share__button{background: #ffffff; border: 1px solid #e7e6ec; box-shadow: 0px 1px 0px #eae6ec, inset 0px -2px 0px rgba(244, 243, 246, 0.25); border-radius: 4px; display: flex; align-items: center; font-weight: 600; font-size: 13px; color: #12033e; padding: 8px 16px; margin-left: 12px; cursor: pointer;}#sd-social-share .social-share__button svg{margin-right: 4px;}#sd-social-share .social-share__link{background: #ffffff; border: 1px solid #e7e6ec; border-radius: 4px; padding: 7px 12px; min-width: 0; min-height: 38px; flex: 1;}#sd-social-share .social-share__link span{display: block; font-weight: 400; font-size: 13px; line-height: 22px; color: #12033e; white-space: nowrap; width: 100%; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;}#sd-social-share .social-share__options-title{position: relative; border-top: 1px solid #e7e6ec; display: flex; align-items: center; justify-content: center; width: 100%; margin-bottom: 29px;}#sd-social-share .social-share__options-title span{font-weight: 600; font-size: 10px; line-height: 12px; text-align: center; text-transform: uppercase; color: #88819f; background: #fff; padding: 0 17px; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);}#sd-social-share .social-share__options-list{display: flex; align-items: center; justify-content: center;}#sd-social-share .social-share__option{display: flex; align-items: center; justify-content: center; width: 36px; height: 36px; background: #ffffff; border: 1px solid #e7e6ec; box-shadow: 0px 1px 0px #eae6ec, inset 0px -2px 0px rgba(244, 243, 246, 0.25); border-radius: 4px;}#sd-social-share .social-share__option:not(:last-child){margin-right: 16px;}#sd-email-send{position: fixed; right: 15px; top: 65px; z-index: 9999; max-width: 504px; width: 100%; background: #ffffff; border: 1px solid #e7e6ec; box-shadow: 0px 10px 18px rgba(18, 3, 62, 0.1), 0px 0px 1px rgba(18, 3, 62, 0.1); border-radius: 4px; opacity: 0; visibility: hidden; transform: translateY(20px); transition: all 0.3s ease-in;}#sd-email-send.opened{transform: translateY(0); visibility: visible; opacity: 1;}#sd-email-send span.arrow{display: block; position: absolute; top: -7px; width: 12px; height: 12px; background-color: #fbfbfc; transform: rotate(-45deg); z-index: 2; border-top: 1px solid #e7e6ec; border-right: 1px solid #e7e6ec;}#sd-email-send .email-send__header{display: flex; align-items: center; background: rgba(231, 230, 236, 0.15); padding: 16px; font-weight: 600; font-size: 11px; line-height: 13px; color: #12033e; border-bottom: 1px solid #e7e6ec;}#sd-email-send .email-send__header svg{margin-right: 8px;}#sd-email-send .email-send__top{padding: 24px 16px; border-bottom: 1px solid #e7e6ec;}#sd-email-send .email-send__top .email-send__input:nth-child(1){margin-bottom: 8px;}#sd-email-send .email-send__bottom{padding: 24px 16px; border-bottom: 1px solid #e7e6ec;}#sd-email-send .email-send__input{display: flex; align-items: flex-start; justify-content: space-between;}#sd-email-send .email-send__input span{font-weight: 600; font-size: 10px; line-height: 12px; text-transform: uppercase; color: #88819f; margin-right: 15px;}#sd-email-send .email-send__input input,#sd-email-send .email-send__input textarea{background: #ffffff; border: 1px solid #e7e6ec; border-radius: 4px; padding: 7px 12px; font-weight: 400; font-size: 13px; line-height: 22px; max-width: 405px; flex: 1; resize: none;}#sd-email-send .email-send__input input::placeholder,#sd-email-send .email-send__input textarea::placeholder{color: #88819f; font-weight: 400; font-size: 13px; line-height: 22px;}#sd-email-send .email-send__input textarea{height: 75px;}#sd-email-send .email-send__buttons{display: flex;}#sd-email-send .email-send__footer{display: flex; align-items: center; justify-content: flex-end; background: rgba(231, 230, 236, 0.15); padding: 16px;}#sd-email-send .email-send__footer a{text-decoration: none; display: flex; align-items: center; padding: 7px 8px; background: #ffffff; border: 1px solid #e7e6ec; box-shadow: 0px 1px 0px #eae6ec, inset 0px -2px 0px rgba(244, 243, 246, 0.25); border-radius: 4px; font-weight: 600; font-size: 13px; line-height: 20px; color: #12033e; transition: opacity 0.3s ease-in-out;}#sd-email-send .email-send__footer a:nth-child(1){margin-right: 8px;}#sd-email-send .email-send__footer a svg{margin-right: 4px;}#sd-email-send .email-send__footer a:hover{opacity: 0.7;}@media screen and (max-width: 1199px){body #menu[data-sd-trigger=fcta],body .LPMcontainer.LPMoverlay,body .intercom-lightweight-app .intercom-lightweight-app-launcher{bottom: 62px !important;}body #hubspot-messages-iframe-container{bottom: 56px !important;}body #hubspot-messages-iframe-container[style="width: 100%; height: 100%;"]{bottom: 0 !important;}.navigation .open-button{top: 36px !important;}.navigation-popup{z-index: 999999;}}@media screen and (min-width: 1200px) { div[data-id] .navigation .navigation-popup {top: 56px;} }' +
    (menuData ? menuContentCSS : '') +
    '';

  var engagementHTML =
    '<div></div><div id="sd-engagement-wrapper"> <div id="sd-engagement-bar-top"> <div class="engagement__wrapper"> <div class="engagement__left"> <a href="https://www.storydoc.com" target="_blank" class="engagement__storydoc-logo storydoc-logo-branding"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect opacity="0.3" x="0.5" y="0.5" width="39" height="39" rx="3.5" fill="#E7E6EC" stroke="#B8B3C5"/><path d="M16.6375 26.3996C15.3187 25.1715 15.5721 22.9322 16.2458 22.4265C16.0523 21.8968 15.3448 21.3671 14.478 21.6078C13.258 21.945 12.5215 23.3656 12.5228 24.1602C12.5568 25.3642 12.7201 27.0738 15.3247 29.0001C17.8328 30.806 21.7831 30.6134 23.6438 29.2409C25.0233 28.2055 25.8239 26.6885 25.8524 24.3769C25.848 21.6319 24.1104 19.5852 21.7308 17.7552C19.93 16.3827 18.2253 14.9139 18.7368 13.3728C19.3123 11.6632 24.902 12.3615 25.0961 13.2524C25.1607 13.4932 23.974 14.5286 23.9743 14.7453C23.9746 14.9139 24.039 15.0102 24.2638 15.0102C25.0668 15.0102 27.4412 13.4932 27.5036 12.3374C27.5351 11.9522 26.2165 10.8445 25.7021 10.5556C23.9341 9.56836 21.011 9.3998 18.507 10.1703C16.8375 10.6519 15.683 11.7836 15.5571 13.3728C15.3672 15.1788 16.1404 16.6957 18.9703 18.8628C20.8354 20.2835 23.2782 21.3911 23.2495 23.6064C23.19 26.5922 18.857 28.4944 16.6375 26.3996Z" fill="#88819F"/></svg></a> <div class="engagement__organization-logo sd-organization-logo"></div><div class="engagement__version-desc"> <div class="engagement__version-title sd-version-title"></div><div class="engagement__version-creator version-creator"> <span>Created by:</span> <div class="version-creator__image sd-version-creator-image"></div><div class="version-creator__name sd-version-creator-name"></div></div></div></div><div class="engagement__right"> <div class="engagement__controls"> <button class="control__item social-share"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="30" rx="4" fill="white"/><g clip-path="url(#clip0_2330_2057)"><path d="M16.0508 18.5137L12.6441 16.6557C12.3171 16.9803 11.9013 17.2009 11.4492 17.2895C10.997 17.3781 10.5288 17.3309 10.1034 17.1538C9.67806 16.9767 9.31466 16.6776 9.05903 16.2943C8.80341 15.9109 8.66699 15.4605 8.66699 14.9997C8.66699 14.539 8.80341 14.0886 9.05903 13.7052C9.31466 13.3219 9.67806 13.0228 10.1034 12.8457C10.5288 12.6686 10.997 12.6214 11.4492 12.71C11.9013 12.7986 12.3171 13.0192 12.6441 13.3437L16.0508 11.4857C15.934 10.9376 16.0184 10.3657 16.2885 9.87458C16.5587 9.38351 16.9966 9.0061 17.5222 8.81137C18.0478 8.61664 18.6259 8.6176 19.1508 8.81407C19.6757 9.01055 20.1124 9.38941 20.3809 9.88137C20.6495 10.3733 20.732 10.9455 20.6133 11.4933C20.4947 12.0411 20.1828 12.5279 19.7347 12.8646C19.2867 13.2014 18.7324 13.3656 18.1732 13.3272C17.614 13.2889 17.0874 13.0505 16.6895 12.6557L13.2828 14.5137C13.3508 14.8342 13.3508 15.1653 13.2828 15.4857L16.6895 17.3437C17.0874 16.949 17.614 16.7106 18.1732 16.6723C18.7324 16.6339 19.2867 16.7981 19.7347 17.1349C20.1828 17.4716 20.4947 17.9584 20.6133 18.5062C20.732 19.054 20.6495 19.6262 20.3809 20.1181C20.1124 20.6101 19.6757 20.9889 19.1508 21.1854C18.6259 21.3819 18.0478 21.3829 17.5222 21.1881C16.9966 20.9934 16.5587 20.616 16.2885 20.1249C16.0184 19.6338 15.934 19.0619 16.0508 18.5137Z" fill="#12033E"/></g><defs><clipPath id="clip0_2330_2057"><rect width="16" height="16" fill="white" transform="translate(7 7)"/></clipPath></defs></svg></button> <button class="control__item email-share"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="30" rx="4" fill="white"/><g clip-path="url(#clip0_2330_2062)"><path d="M8.29755 13.2097C7.94955 13.0937 7.94622 12.9064 8.30422 12.787L21.0289 8.5457C21.3815 8.42837 21.5835 8.6257 21.4849 8.97103L17.8489 21.695C17.7489 22.0477 17.5456 22.0597 17.3962 21.725L15.0002 16.333L19.0002 10.9997L13.6669 14.9997L8.29755 13.2097Z" fill="#12033E"/></g><defs><clipPath id="clip0_2330_2062"><rect width="16" height="16" fill="white" transform="translate(7 7)"/></clipPath></defs></svg></button> </div><div class="engagement__buttons"> <a href="" class="engagement__button --primary sd-engagement-button-primary" target="_blank"><span class="material-icons"></span><span class="content"></span></a> <a href="" class="engagement__button --secondary sd-engagement-button-secondary" target="_blank"><span class="material-icons"></span><span class="content"></span></a> </div></div></div></div><div id="sd-engagement-bar-mobile"> <div class="engagement__wrapper"> <div class="engagement__closed"> <div class="engagement__content"> <a href="https://storydoc.com" target="_blank" class="engagement__storydoc-logo storydoc-logo-branding"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect opacity="0.3" x="0.5" y="0.5" width="31" height="31" rx="3.5" fill="#E7E6EC" stroke="#B8B3C5"/><path d="M13.9825 19.8397C13.1912 19.1029 13.3433 17.7593 13.7475 17.4559C13.6314 17.1381 13.2069 16.8202 12.6868 16.9647C11.9548 17.167 11.5129 18.0194 11.5137 18.4961C11.5341 19.2185 11.632 20.2443 13.1948 21.4001C14.6997 22.4836 17.0699 22.368 18.1863 21.5445C19.014 20.9233 19.4943 20.0131 19.5114 18.6262C19.5088 16.9792 18.4663 15.7511 17.0385 14.6531C15.958 13.8296 14.9352 12.9483 15.2421 12.0237C15.5874 10.9979 18.9412 11.4169 19.0577 11.9515C19.0965 12.0959 18.3844 12.7172 18.3846 12.8472C18.3848 12.9483 18.4234 13.0061 18.5583 13.0061C19.0401 13.0061 20.4647 12.0959 20.5022 11.4025C20.5211 11.1713 19.7299 10.5067 19.4213 10.3334C18.3604 9.74101 16.6066 9.63988 15.1042 10.1022C14.1025 10.3911 13.4098 11.0702 13.3342 12.0237C13.2203 13.1073 13.6843 14.0174 15.3822 15.3177C16.5012 16.1701 17.9669 16.8347 17.9497 18.1638C17.914 19.9553 15.3142 21.0967 13.9825 19.8397Z" fill="#594F78"/></svg></a> <div class="engagement__logo sd-organization-logo"></div><div class="engagement__title sd-version-title"></div><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="30" rx="4" fill="white"/><g clip-path="url(#clip0_2972_183815)"><path d="M15 17.668L19 13.668H11L15 17.668Z" fill="#12033E"/></g><defs><clipPath id="clip0_2972_183815"><rect width="16" height="16" fill="white" transform="translate(7 7)"/></clipPath></defs></svg> </div></div><div class="engagement__overlay"> <div class="engagement__top-controls ' +
    (menuData ? 'is-menu' : '') +
    '">' +
    (menuData ? menuTriggerHTML : '') +
    '<div class="close__engagement"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="30" rx="4" transform="matrix(1 0 0 -1 0 30)" fill="white"/><g clip-path="url(#clip0_2972_184056)"><path d="M15 12.332L19 16.332H11L15 12.332Z" fill="#12033E"/></g><defs><clipPath id="clip0_2972_184056"><rect width="16" height="16" fill="white" transform="matrix(1 0 0 -1 7 23)"/></clipPath></defs></svg></div></div><div class="engagement__main"> <div class="engagement__logo sd-organization-logo"></div><div class="engagement__title sd-version-title"></div><div class="engagement__version-creator"> <div class="engagement__image sd-version-creator-image"></div><div class="engagement__name sd-version-creator-name"></div></div></div><div class="engagement__buttons"> <a href="" class="primary sd-engagement-button-primary" target="_blank"><span class="material-icons"></span><span class="content">Book a meeting</span></a> <a href="" class="secondary sd-engagement-button-secondary" target="_blank"><span class="material-icons"></span><span class="content">Visit our website</span></a> </div><a href="https://storydoc.com" target="_blank" class="progress-bar__storydoc storydoc-logo-branding"> <span>Made with</span> <svg width="50" height="18" viewBox="0 0 50 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.33538 9.42045C1.5926 8.74424 1.76315 7.53993 2.15531 7.27467C2.05023 6.98703 1.65034 6.69383 1.15035 6.81423C0.446682 6.98272 0.00820948 7.7405 0 8.16883C0.00598726 8.81815 0.0804538 9.74143 1.55305 10.808C2.97161 11.8086 5.23998 11.7475 6.32287 11.0279C7.12588 10.4847 7.6022 9.67572 7.6445 8.43004C7.67286 6.95038 6.69901 5.82834 5.3544 4.81615C4.33673 4.05683 3.37534 3.24665 3.68607 2.42153C4.0354 1.50625 7.23429 1.94319 7.33564 2.42552C7.35437 2.49663 7.15725 2.69091 6.97362 2.8719L6.97361 2.87191C6.82027 3.02304 6.67633 3.16491 6.67531 3.21807C6.67357 3.30893 6.70943 3.36154 6.83841 3.36398C7.29906 3.37268 8.67824 2.58072 8.72704 1.9584C8.74944 1.75107 8.00542 1.13975 7.7136 0.978432C6.71037 0.427137 5.03536 0.304618 3.59018 0.692821C2.62706 0.934318 1.95203 1.53183 1.86191 2.38708C1.7327 3.35845 2.15924 4.18451 3.75833 5.38328C3.9712 5.54201 4.19772 5.69412 4.42337 5.84563C5.31503 6.44435 6.19294 7.03384 6.15997 7.98651C6.09227 9.59527 3.58512 10.5737 2.33538 9.42045ZM33.5346 5.27808C33.0695 4.583 32.1247 4.24256 31.2671 4.24256C29.4793 4.24256 27.9386 5.59015 27.9386 7.71793C27.9386 8.3779 28.0902 8.96595 28.3532 9.46265L28.2993 9.42626C28.2993 9.42626 26.7075 10.3418 26.6507 10.3834C26.727 9.91177 26.8133 9.53393 26.8917 9.19097C26.9448 8.95898 26.9942 8.74296 27.0343 8.52469C27.0918 8.18816 27.203 7.79166 27.3257 7.35447C27.5367 6.60239 27.7815 5.72992 27.8444 4.83524C27.8586 4.54396 27.3044 4.32214 26.6364 4.32214C26.3164 4.32214 25.7594 6.72276 25.5089 7.80235C25.4589 8.01763 25.4211 8.18039 25.3999 8.2611C25.2577 8.81591 24.7178 10.0228 24.3056 10.0228C24.0782 10.0228 24.0355 9.73152 24.0355 9.39863C24.0924 7.90063 24.5614 6.37474 25.0304 4.93222C25.002 4.6132 24.4477 4.32214 23.9645 4.32214C23.666 4.32214 23.4386 4.40526 23.3249 4.62718C23.0691 5.26522 22.8274 5.98637 22.6569 6.73536C22.5148 6.97116 22.2874 7.23491 21.9747 7.23491C21.7615 7.23491 21.6194 7.02669 21.6194 6.86025C21.6361 6.3303 21.864 5.82435 22.0519 5.40715C22.1836 5.11459 22.2957 4.86567 22.3016 4.68272C22.3016 4.43305 22.1879 4.22505 21.7189 4.11409C21.1646 3.98926 20.7524 4.11404 20.6387 4.47466C20.6098 4.57569 20.5777 4.69144 20.5425 4.81794C20.3702 5.43823 20.1262 6.31693 19.8429 6.98514L19.7718 6.94342C19.7938 6.56381 19.8575 6.13984 19.9199 5.72497C19.9782 5.33643 20.0354 4.95587 20.056 4.62718C20.056 4.62718 19.4165 4.25279 18.976 4.25279C18.4086 4.25279 18.3162 5.49342 18.2352 6.58103C18.231 6.63765 18.2268 6.69386 18.2226 6.74945C18.103 8.35026 17.9988 9.29952 17.9347 9.88346C17.8921 10.271 17.8673 10.4976 17.8673 10.647C17.8673 10.9382 19.2743 11.3959 19.6723 11.2156C19.7433 9.32922 20.3971 7.56764 20.7098 6.86025C20.7524 7.47054 20.9373 8.17793 21.9606 8.17793C22.1311 8.17793 22.2874 8.15024 22.4295 8.09476C22.3869 8.45539 22.3585 8.81613 22.3585 9.17676C22.3585 9.96737 22.6143 11.0907 23.8508 11.0907C24.4335 11.0907 24.8456 10.6607 25.073 10.2585C25.0162 10.6468 24.9309 11.1462 24.8172 11.6455C24.6751 11.7426 24.4761 11.8537 24.2629 11.9508C23.0548 12.5472 21.6336 13.3933 21.2356 13.6846C19.5302 14.9607 19.6439 16.0703 20.3687 16.7361C20.7951 17.1383 21.8611 17.3047 22.7423 16.9024C24.6894 16.0008 25.8689 13.7954 26.3237 12.1448C26.6414 11.9421 28.3142 10.827 28.8947 10.2097C29.5107 10.8463 30.3657 11.2075 31.2817 11.2075C32.1102 11.2075 33.0695 10.8529 33.5346 10.1578V11.0373H35.2207V0.809743H33.5346V5.27808ZM31.5433 9.67549C30.4968 9.67549 29.6392 8.81019 29.6392 7.70375C29.6392 6.5973 30.4968 5.77456 31.5433 5.77456C32.5171 5.77456 33.5055 6.54056 33.5055 7.70375C33.5055 8.86693 32.5753 9.67549 31.5433 9.67549ZM39.5047 11.2075C41.4379 11.2075 43.1239 9.81737 43.1239 7.71796C43.1239 5.61855 41.4379 4.24259 39.5047 4.24259C37.5715 4.24259 35.9 5.61855 35.9 7.71796C35.9 9.81737 37.5715 11.2075 39.5047 11.2075ZM39.5047 9.67552C38.4582 9.67552 37.6006 8.88115 37.6006 7.71796C37.6006 6.58315 38.4582 5.77459 39.5047 5.77459C40.5512 5.77459 41.4233 6.58315 41.4233 7.71796C41.4233 8.88115 40.5512 9.67552 39.5047 9.67552ZM50 9.93085C49.375 10.6969 48.4157 11.2075 47.2383 11.2075C45.2761 11.2075 43.5464 9.81737 43.5464 7.71796C43.5464 5.61855 45.2761 4.24259 47.2383 4.24259C48.4157 4.24259 49.375 4.75326 50 5.51926L48.8081 6.44129C48.4593 6.02992 47.8779 5.77459 47.2674 5.77459C46.0901 5.77459 45.247 6.59733 45.247 7.71796C45.247 8.82441 46.0901 9.67552 47.2674 9.67552C47.8779 9.67552 48.4593 9.42019 48.8081 9.00881L50 9.93085ZM8.4285 5.36599L9.05072 5.26038C8.67198 6.58046 8.22561 8.41537 8.22561 9.14141C8.22561 10.5275 9.10482 11.4384 10.2681 11.4384C11.1701 11.4384 12.1987 10.9701 12.7317 10.2983C13.113 11.0099 13.76 11.5331 14.7401 11.5331C16.9857 11.5331 17.6537 8.35676 17.739 6.90038C17.7816 5.51334 17.4831 4.2233 15.6497 4.2233C15.2944 4.2233 15.0243 4.37582 15.0243 4.37582C14.9959 4.25098 14.8112 4.14024 14.5838 4.04314C13.4895 4.29281 12.3809 6.49808 12.2957 8.23187C12.292 8.32549 12.2914 8.42056 12.2937 8.51654C12.27 8.51863 12.2565 8.52098 12.2565 8.52098C12.1888 9.18102 11.2826 10.2767 10.3493 10.2767C10.0922 10.2767 9.92993 10.0787 9.92993 9.70905C9.92993 8.69259 10.4845 6.58046 10.9309 5.00957C11.1099 4.98984 11.2803 4.97012 11.444 4.95116L11.4441 4.95116L11.4441 4.95115C12.0474 4.88132 12.5603 4.82194 13.0816 4.81156C13.3115 4.81156 13.3386 4.70595 13.3386 4.61355C13.3386 4.53434 13.0816 4.03271 12.9869 3.97991C12.9116 3.941 12.8392 3.91484 12.7725 3.89075C12.6357 3.84128 12.523 3.80058 12.4594 3.67629C12.3757 3.54363 12.2921 3.55296 12.0835 3.57623L12.0834 3.57623C12.0222 3.58306 11.9502 3.59109 11.8642 3.59709L11.3367 3.63669L11.8236 2.1186C11.8642 1.98659 10.7821 1.40576 10.4845 1.56416C10.2951 1.66977 9.76762 2.98985 9.47004 3.8875C8.67198 4.01951 7.96861 4.17792 7.77924 4.29673C7.53576 4.45514 7.98213 5.4452 8.4285 5.36599ZM13.9442 7.88511C13.9442 7.88511 13.859 8.23198 13.8306 8.6897C13.7737 9.63288 14.0011 10.3956 14.5127 10.3956C15.7066 10.3956 16.1898 7.09451 16.2324 6.35938C16.2343 6.33548 16.2365 6.30926 16.239 6.28114C16.2731 5.88499 16.3398 5.11105 15.8488 5.11105C15.1097 5.11105 14.4558 7.2888 14.3137 7.99618C14.2995 8.05167 14.0153 7.94059 13.9442 7.88511ZM22.6001 14.1839C23.2823 13.6291 24.1634 13.1159 24.6182 12.9356C24.405 14.2255 22.3016 16.1396 21.7757 15.6403C21.4346 15.3213 21.9179 14.7387 22.6001 14.1839Z" fill="#561090"/></svg> </a>' +
    (menuData ? menuContentHTML : '') +
    '</div></div></div><div id="sd-social-share"> <span class="arrow"></span> <div class="social-share__wrapper"> <div class="social-share__header"> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.0508 11.5137L5.64413 9.65575C5.31713 9.98035 4.90134 10.2009 4.44919 10.2895C3.99704 10.3781 3.52877 10.3309 3.10342 10.1538C2.67806 9.9767 2.31466 9.67763 2.05903 9.29429C1.80341 8.91094 1.66699 8.4605 1.66699 7.99975C1.66699 7.53899 1.80341 7.08855 2.05903 6.70521C2.31466 6.32187 2.67806 6.02279 3.10342 5.84568C3.52877 5.66857 3.99704 5.62136 4.44919 5.71C4.90134 5.79863 5.31713 6.01915 5.64413 6.34375L9.0508 4.48575C8.93396 3.93757 9.01835 3.36566 9.28853 2.87458C9.55871 2.38351 9.99663 2.0061 10.5222 1.81137C11.0478 1.61664 11.6259 1.6176 12.1508 1.81407C12.6757 2.01055 13.1124 2.38941 13.3809 2.88137C13.6495 3.37334 13.732 3.94553 13.6133 4.49332C13.4947 5.0411 13.1828 5.52787 12.7347 5.86461C12.2867 6.20136 11.7324 6.36557 11.1732 6.32721C10.614 6.28886 10.0874 6.05051 9.68947 5.65575L6.2828 7.51375C6.35076 7.83418 6.35076 8.16531 6.2828 8.48575L9.68947 10.3437C10.0874 9.94899 10.614 9.71064 11.1732 9.67228C11.7324 9.63393 12.2867 9.79814 12.7347 10.1349C13.1828 10.4716 13.4947 10.9584 13.6133 11.5062C13.732 12.054 13.6495 12.6262 13.3809 13.1181C13.1124 13.6101 12.6757 13.9889 12.1508 14.1854C11.6259 14.3819 11.0478 14.3829 10.5222 14.1881C9.99663 13.9934 9.55871 13.616 9.28853 13.1249C9.01835 12.6338 8.93396 12.0619 9.0508 11.5137Z" fill="#12033E"/></svg> <span>Share this story</span> <div class="copied__info"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0c6"><g data-name="Layer 2"><g data-name="checkmark-circle-2"><rect width="24" height="24" opacity="0"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><path d="M14.7 8.39l-3.78 5-1.63-2.11a1 1 0 0 0-1.58 1.23l2.43 3.11a1 1 0 0 0 .79.38 1 1 0 0 0 .79-.39l4.57-6a1 1 0 1 0-1.6-1.22z"/></g></g></svg> <span>Copied</span> </div></div><div class="social-share__body"> <div class="social-share__title">Found this story interesting? <br>Share it with others!</div><div class="social-share__url"> <div class="social-share__link"><span></span></div><button class="social-share__button"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_2447_6332)"><path d="M14.7143 12.3568L13.536 11.1785L14.7143 10.0002C15.0238 9.69063 15.2694 9.32316 15.4369 8.91873C15.6044 8.5143 15.6906 8.08083 15.6906 7.64308C15.6906 7.20533 15.6044 6.77187 15.4369 6.36744C15.2694 5.96301 15.0238 5.59554 14.7143 5.286C14.4048 4.97646 14.0373 4.73093 13.6329 4.56341C13.2284 4.39589 12.795 4.30966 12.3572 4.30966C11.9195 4.30966 11.486 4.39589 11.0816 4.56341C10.6771 4.73093 10.3097 4.97646 10.0001 5.286L8.8218 6.46433L7.64347 5.286L8.8218 4.10767C9.76206 3.1826 11.0298 2.66655 12.3488 2.67192C13.6678 2.67729 14.9313 3.20365 15.864 4.13634C16.7967 5.06904 17.323 6.3325 17.3284 7.65152C17.3338 8.97053 16.8177 10.2382 15.8926 11.1785L14.7143 12.3568ZM12.3568 14.7143L11.1785 15.8927C10.7156 16.3632 10.1641 16.7374 9.55585 16.9937C8.94761 17.25 8.29465 17.3833 7.63462 17.386C6.97459 17.3887 6.32056 17.2607 5.71025 17.0093C5.09994 16.758 4.54544 16.3883 4.07872 15.9216C3.61201 15.4549 3.24232 14.9004 2.99097 14.2901C2.73963 13.6797 2.61161 13.0257 2.6143 12.3657C2.61699 11.7057 2.75033 11.0527 3.00663 10.4444C3.26294 9.83621 3.63713 9.28473 4.10763 8.82183L5.28597 7.6435L6.4643 8.82183L5.28597 10.0002C4.97643 10.3097 4.73089 10.6772 4.56337 11.0816C4.39585 11.486 4.30963 11.9195 4.30963 12.3572C4.30963 12.795 4.39585 13.2285 4.56337 13.6329C4.73089 14.0373 4.97643 14.4048 5.28597 14.7143C5.5955 15.0239 5.96298 15.2694 6.36741 15.4369C6.77183 15.6044 7.2053 15.6907 7.64305 15.6907C8.0808 15.6907 8.51427 15.6044 8.91869 15.4369C9.32312 15.2694 9.6906 15.0239 10.0001 14.7143L11.1785 13.536L12.3568 14.7143ZM12.3568 6.46433L13.536 7.6435L7.64347 13.5352L6.4643 12.3568L12.3568 6.46517V6.46433Z" fill="#12033E"/></g><defs><clipPath id="clip0_2447_6332"><rect width="20" height="20" fill="white"/></clipPath></defs></svg><span>Copy</span></button> </div><div class="social-share__options"> <div class="social-share__options-title"><span>Other options to share</span></div><div class="social-share__options-list"> <a href="" class="social-share__option facebook"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_2447_4963)"><path d="M11.6668 11.2503H13.7502L14.5835 7.91699H11.6668V6.25033C11.6668 5.39199 11.6668 4.58366 13.3335 4.58366H14.5835V1.78366C14.3118 1.74783 13.286 1.66699 12.2027 1.66699C9.94016 1.66699 8.3335 3.04783 8.3335 5.58366V7.91699H5.8335V11.2503H8.3335V18.3337H11.6668V11.2503Z" fill="#3B5998"/></g><defs><clipPath id="clip0_2447_4963"><rect width="20" height="20" fill="white"/></clipPath></defs></svg></a> <a href="" class="social-share__option twitter"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_2447_2563)"><path d="M18.4683 4.71376C17.8321 4.99517 17.1574 5.17999 16.4666 5.26209C17.1947 4.82662 17.7397 4.14127 17.9999 3.33376C17.3166 3.74043 16.5674 4.02543 15.7866 4.17959C15.2621 3.61841 14.5669 3.24623 13.8091 3.12091C13.0512 2.9956 12.2732 3.12417 11.596 3.48664C10.9187 3.84911 10.3802 4.42516 10.0642 5.12525C9.74812 5.82535 9.67221 6.61024 9.84826 7.35793C8.46251 7.28847 7.10687 6.92836 5.86933 6.30098C4.63179 5.6736 3.54003 4.79297 2.66492 3.71626C2.35516 4.2483 2.19238 4.85312 2.19326 5.46876C2.19326 6.67709 2.80826 7.74459 3.74326 8.36959C3.18993 8.35217 2.64878 8.20274 2.16492 7.93376V7.97709C2.16509 8.78184 2.44356 9.56177 2.95313 10.1846C3.46269 10.8075 4.17199 11.235 4.96076 11.3946C4.4471 11.5338 3.90851 11.5543 3.38576 11.4546C3.60814 12.1473 4.04159 12.7531 4.62542 13.1872C5.20924 13.6213 5.9142 13.8619 6.64159 13.8754C5.91866 14.4432 5.0909 14.8629 4.20566 15.1106C3.32041 15.3582 2.39503 15.429 1.48242 15.3188C3.0755 16.3433 4.93 16.8872 6.82409 16.8854C13.2349 16.8854 16.7408 11.5746 16.7408 6.96876C16.7408 6.81876 16.7366 6.66709 16.7299 6.51876C17.4123 6.02557 18.0013 5.41461 18.4691 4.71459L18.4683 4.71376Z" fill="#00ACEE"/></g><defs><clipPath id="clip0_2447_2563"><rect width="20" height="20" fill="white"/></clipPath></defs></svg></a> <a href="" class="social-share__option linkedin"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_2447_6304)"><path d="M5.78353 4.16652C5.78331 4.60855 5.6075 5.03239 5.29478 5.34479C4.98207 5.6572 4.55806 5.83258 4.11603 5.83236C3.674 5.83214 3.25017 5.65633 2.93776 5.34361C2.62536 5.0309 2.44997 4.60688 2.4502 4.16486C2.45042 3.72283 2.62622 3.29899 2.93894 2.98659C3.25166 2.67419 3.67567 2.4988 4.1177 2.49902C4.55972 2.49924 4.98356 2.67505 5.29596 2.98777C5.60837 3.30049 5.78375 3.7245 5.78353 4.16652ZM5.83353 7.06652H2.5002V17.4999H5.83353V7.06652ZM11.1002 7.06652H7.78353V17.4999H11.0669V12.0249C11.0669 8.97486 15.0419 8.69152 15.0419 12.0249V17.4999H18.3335V10.8915C18.3335 5.74986 12.4502 5.94152 11.0669 8.46652L11.1002 7.06652Z" fill="#0077B5"/></g><defs><clipPath id="clip0_2447_6304"><rect width="20" height="20" fill="white"/></clipPath></defs></svg></a> </div></div></div></div></div><div id="sd-email-send"> <span class="arrow"></span> <div class="email-send__wrapper"> <div class="email-send__header"> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.29755 6.21068C0.949551 6.09468 0.946218 5.90734 1.30422 5.78801L14.0289 1.54668C14.3815 1.42934 14.5835 1.62668 14.4849 1.97201L10.8489 14.696C10.7489 15.0487 10.5456 15.0607 10.3962 14.726L8.00022 9.33401L12.0002 4.00068L6.66688 8.00068L1.29755 6.21068Z" fill="#12033E"/></svg> <span>Send this story</span> </div><div class="email-send__body"> <div class="email-send__top"> <div class="email-send__input"> <span>To:</span> <input type="text" placeholder="Recipient\'s email" id="email"> </div><div class="email-send__input"> <span>Subject:</span> <input type="text" placeholder="Email subject" id="subject"> </div></div><div class="email-send__bottom"> <div class="email-send__input"> <span>Message:</span> <input placeholder="Message" id="message"> </div></div></div><div class="email-send__footer"> <div class="email-send__buttons"> <a href="https://mail.google.com/mail/u/0/" class="email-send__gmail" target="_blank"> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_2910_5692)"><path d="M14.4012 8.15933C14.4012 7.70908 14.3576 7.24431 14.285 6.80859H7.99609V9.37935H11.5981C11.4528 10.2072 10.9735 10.9334 10.2618 11.3982L12.4114 13.0685C13.675 11.892 14.4012 10.1782 14.4012 8.15933Z" fill="#4280EF"/><path d="M7.99611 14.6659C9.79709 14.6659 11.3076 14.0704 12.4114 13.0537L10.2619 11.398C9.66638 11.8047 8.8966 12.037 7.99611 12.037C6.25323 12.037 4.7863 10.8606 4.24891 9.29199L2.04126 10.9913C3.17413 13.2425 5.46893 14.6659 7.99611 14.6659Z" fill="#34A353"/><path d="M4.24895 9.27788C3.97299 8.45001 3.97299 7.54952 4.24895 6.72165L2.0413 5.00781C1.09724 6.89594 1.09724 9.11811 2.0413 10.9917L4.24895 9.27788Z" fill="#F6B704"/><path d="M7.99611 3.97663C8.94018 3.96211 9.86971 4.32521 10.5523 4.97879L12.455 3.06162C11.2495 1.92875 9.65185 1.31874 7.99611 1.33326C5.46893 1.33326 3.17413 2.75662 2.04126 5.00784L4.24891 6.72168C4.7863 5.13856 6.25323 3.97663 7.99611 3.97663Z" fill="#E54335"/></g><defs><clipPath id="clip0_2910_5692"><rect width="16" height="16" fill="white"/></clipPath></defs></svg> Send in Gmail </a> <a href="mailto:" class="email-send__email" target="_self"> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_2910_7450)"><path d="M1.99992 2H13.9999C14.1767 2 14.3463 2.07024 14.4713 2.19526C14.5963 2.32029 14.6666 2.48986 14.6666 2.66667V13.3333C14.6666 13.5101 14.5963 13.6797 14.4713 13.8047C14.3463 13.9298 14.1767 14 13.9999 14H1.99992C1.82311 14 1.65354 13.9298 1.52851 13.8047C1.40349 13.6797 1.33325 13.5101 1.33325 13.3333V2.66667C1.33325 2.48986 1.40349 2.32029 1.52851 2.19526C1.65354 2.07024 1.82311 2 1.99992 2ZM8.03992 7.78867L3.76525 4.15867L2.90192 5.17467L8.04859 9.54467L13.1026 5.17133L12.2306 4.16267L8.03992 7.78867Z" fill="#88819F"/></g><defs><clipPath id="clip0_2910_7450"><rect width="16" height="16" fill="white"/></clipPath></defs></svg> Send Email </a> </div></div></div></div></div>';
  document.head.insertAdjacentHTML(
    'beforeend',
    '<style type="text/css">' + engagementBarCSS + '</style>',
  );
  document.body.insertAdjacentHTML('afterbegin', engagementHTML);

  var mainWrapper = document.getElementById('sd-engagement-wrapper');

  var senderNameContainers = mainWrapper.querySelectorAll('.sd-version-creator-name');
  var senderPictureContainers = mainWrapper.querySelectorAll('.sd-version-creator-image');
  var versionTitleContainers = mainWrapper.querySelectorAll('.sd-version-title');
  var organizationLogoContainers = mainWrapper.querySelectorAll('.sd-organization-logo');

  var socialShareButton = mainWrapper.querySelector('.social-share');
  var emailShareButton = mainWrapper.querySelector('.email-share');
  var socialShareContainer = mainWrapper.querySelector('#sd-social-share');
  var emailSendContainer = mainWrapper.querySelector('#sd-email-send');

  var primaryButtons = mainWrapper.querySelectorAll('.sd-engagement-button-primary');
  var secondaryButtons = mainWrapper.querySelectorAll('.sd-engagement-button-secondary');

  var storydocLogo = mainWrapper.querySelectorAll('.storydoc-logo-branding');

  var senderInformation = mainWrapper.querySelectorAll('.engagement__version-creator');

  var socialShareOptions = ['facebook', 'twitter', 'linkedin'];

  var calendlyCss = 'https://www.storydoc.com/assets/css/calendly.css';
  var calendlyScript = 'https://www.storydoc.com/assets/js/calendly.js';

  var versionData = window.storydocSenderInfo || {};

  insertEngagementBarData();
  fetchEngagementBarSettings();
  dialogBarTrigger(socialShareButton, socialShareContainer);
  dialogBarTrigger(emailShareButton, emailSendContainer);
  copyToClipBoard();
  socialShareLinks();
  mobileNavigationHandler();
  setEmailShare();
  setStorydocLink();
  loadCalendlyAssets();

  // ========= ENGAGEMENT BAR SETTINGS ==========

  function insertEngagementBarData() {
    if (!versionData || (typeof versionData === 'object' && !Object.keys(versionData).length))
      return;
    if (senderNameContainers.length) {
      senderNameContainers.forEach(function (c) {
        c.textContent = versionData.sender.name;
      });
    }
    if (senderPictureContainers.length) {
      senderNameHandler(versionData);
    }
    if (versionTitleContainers.length) {
      versionTitleContainers.forEach(function (c) {
        c.textContent = document.title;
      });
    }
    if (organizationLogoContainers.length) {
      organizationLogoHandler(versionData);
    }
  }

  function senderNameHandler(data) {
    if (data.sender && data.sender.picture) {
      senderPictureContainers.forEach(function (c) {
        var image = new Image();
        image.src = data.sender.picture;
        c.insertAdjacentElement('afterbegin', image);
      });
    } else {
      var name = createInitials(data.sender.name);
      senderPictureContainers.forEach(function (c) {
        c.insertAdjacentHTML('afterbegin', '<span>' + name + '</span>');
      });
    }
  }

  function organizationLogoHandler(data) {
    if (!data.org.logo) return removeElementFromDom(organizationLogoContainers);
    organizationLogoContainers.forEach(function (c) {
      var image = new Image();
      image.src = data.org.logo;
      c.insertAdjacentElement('afterbegin', image);
    });
  }

  function engagementBarControls(data) {
    if (!data.socialShare.enable) removeElementFromDom([socialShareButton]);
    if (!data.emailShare.enable) removeElementFromDom([emailShareButton]);
    if (!data.senderInformation.enable) removeElementFromDom(senderInformation);
    if (!data.companyLogo.enable) removeElementFromDom(organizationLogoContainers);

    if (!data.storydocBranding.enable) {
      removeElementFromDom(storydocLogo);
    }

    if (!data.primaryButton.enable && !data.secondaryButton.enable) {
      var buttonsContainer = mainWrapper.querySelector(
        '#sd-engagement-bar-mobile .engagement__buttons',
      );
      if (buttonsContainer) removeElementFromDom([buttonsContainer]);
    }
    socialShareOptions.forEach(function (item) {
      if (!data.socialShare[item]) {
        var option = socialShareContainer.querySelector('.social-share__option.' + item);
        if (option) removeElementFromDom([option]);
      }
    });

    if (
      socialShareOptions.every(function (item) {
        return !data.socialShare[item];
      })
    ) {
      var optionsContainer = socialShareContainer.querySelector('.social-share__options');
      if (optionsContainer) removeElementFromDom([optionsContainer]);
    }
  }

  function waitForElement(selector, callback, data) {
    const element = document.querySelector(selector);
    if (element) return callback(element, data);

    const observer = new MutationObserver((mutationsList, observer) => {
      const element = document.querySelector(selector);
      if (element) {
        observer.disconnect();
        callback(element, data);
      }
    });

    observer.observe(document.documentElement, { childList: true, subtree: true });
  }

  function engagementBarControlsDelayed(element, data) {
    var privacyPolicy = document.querySelector('#sd-progress-bar .progress-bar__privacy');
    if (data.privacy && !data.privacy.enable) removeElementFromDom([privacyPolicy]);

    if (!data.storydocBranding.enable) {
      removeElementFromDom([element]);
    }
  }

  function removeElementFromDom(arr) {
    if (!arr.length) return;
    arr.forEach(function (item) {
      if (!item) return;
      if (item.parentElement) item.parentElement.removeChild(item);
    });
  }

  function buttonsHandler(data, el, obj) {
    if (!data[obj].enable) {
      return el.parentElement.removeChild(el);
    }
    var buttonData = data[obj];
    var content = el.querySelector('span.content');
    var icon = el.querySelector('span.material-icons');
    if (content) {
      content.textContent = buttonData.text;
    }
    if (icon) {
      icon.textContent = buttonData.icon;
    }
    var buttonURL = buttonData.calendar ? versionData.sender.calendar : buttonData.link;
    if (!buttonData.popup) {
      el.setAttribute('href', buttonURL);
      if (!buttonURL.startsWith('http')) el.removeAttribute('target');
    } else {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        if (!Calendly) return;
        Calendly.initPopupWidget({ url: buttonURL });
      });
    }
    el.style.cssText = `
            color: ${buttonData.color};
            background-color: ${buttonData.background};
        `;
  }

  function setButtonsContent(data, arr, key) {
    if (!arr.length) return;
    arr.forEach(function (item) {
      buttonsHandler(data, item, key);
    });
  }

  function createInitials(name = '') {
    if (!name) {
      return name;
    }
    const initials = name.split(' ').map(function (item) {
      return item.charAt(0).toUpperCase();
    });
    return initials.slice(0, 2).join('');
  }

  function fetchEngagementBarSettings() {
    if (!window.presetURL) return;
    fetch(window.presetURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if (window.isTrialOrStarterOrgPlan === 'true') resetTrialAndStarterSettings(data);
        engagementBarControls(data);
        waitForElement(
          '#sd-progress-bar .progress-bar__storydoc',
          engagementBarControlsDelayed,
          data,
        );
        setPlaceholderMessage(data);
        setButtonsContent(data, primaryButtons, 'primaryButton');
        setButtonsContent(data, secondaryButtons, 'secondaryButton');
        if (data.menu && data.menu.enable) {
          waitForElement('.storyContent', storyMenuHandler, null);
          document.head.insertAdjacentHTML('beforeend', '<style>.progress-bar__navigation-control {display: flex !important;}</style>')
        } else {
          var controlsContainer = mainWrapper.querySelector('.engagement__top-controls');
          if (controlsContainer) {
            controlsContainer.classList.remove('is-menu');
            var menu = controlsContainer.querySelector('.menu__engagement');
            if (menu) menu.remove();
          }
        }
        mainWrapper.style.display = 'block';
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  function resetTrialAndStarterSettings(data) {
    var keys = [{ companyLogo: false }, { storydocBranding: true }];
    keys.forEach((key) => (data[Object.keys(key)[0]].enable = Object.values(key)[0]));
  }
  // ========= ENGAGEMENT BAR SETTINGS ==========

  function dialogBarTrigger(button, container) {
    if (!button || !container) return;

    button.addEventListener('click', function () {
      var rect = button.getBoundingClientRect();
      var windowWidth = window.innerWidth;
      var right = rect.right;
      var availableSpace = windowWidth - right;
      var arrow = container.querySelector('.arrow');
      arrow.style.right = `${availableSpace - 21}px`;
      container.classList.add('opened');
    });
  }

  function setEmailShare() {
    if (!emailSendContainer) return;

    var emailInput = emailSendContainer.querySelector('input#email');
    var subjectInput = emailSendContainer.querySelector('input#subject');
    var message = emailSendContainer.querySelector('input#message');

    emailSendContainer.addEventListener('click', function (e) {
      var gmailButton = e.target.closest('.email-send__gmail');
      var emailButton = e.target.closest('.email-send__email');

      if (!gmailButton && !emailButton) return;

      var emailValue = emailInput.value || '';
      var subjectValue = subjectInput.value || '';
      var messageValue = (message.value || '') + ' ' + window.location.href;

      if (gmailButton) {
        var link = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailValue}&su=${subjectValue}&body=${messageValue}`;
        gmailButton.setAttribute('href', link);
      }

      if (emailButton) {
        var link = `mailto:${emailValue}?subject=${subjectValue}&body=${messageValue}`;
        emailButton.setAttribute('href', link);
      }
    });
  }

  function setPlaceholderMessage(data) {
    if (!emailSendContainer) return;
    var message = emailSendContainer.querySelector('input#message');
    if (!message || !data.emailShare.message) return;
    message.value = data.emailShare.message;
  }

  document.addEventListener('click', function (e) {
    var isSocialShareContainer = e.target.closest('#sd-social-share');
    var isSocialShareButton = e.target.closest('.social-share');

    var isEmailSendContainer = e.target.closest('#sd-email-send');
    var isEmailSendButton = e.target.closest('.email-share');

    var isMobileContainer = e.target.closest('#sd-engagement-bar-mobile .engagement__wrapper');
    var isMobileContainerIcon = e.target.closest(
      '#sd-engagement-bar-mobile .close__engagement svg',
    );

    if (!isSocialShareContainer && !isSocialShareButton) {
      socialShareContainer.classList.remove('opened');
    }

    if (!isEmailSendContainer && !isEmailSendButton) {
      emailSendContainer.classList.remove('opened');
    }
    if (!isMobileContainer || isMobileContainerIcon) {
      closeMobileEngagementBar();
    }
  });

  function copyToClipBoard() {
    var copyButton = socialShareContainer.querySelector('.social-share__button');
    var urlContainer = socialShareContainer.querySelector('.social-share__link span');
    var copiedLabelInfo = socialShareContainer.querySelector('.copied__info');
    if (!copyButton || !urlContainer) return;
    urlContainer.textContent = window.location.href;
    copyButton.addEventListener('click', function (event) {
      navigator.clipboard.writeText(urlContainer.textContent).then(function () {
        if (!copiedLabelInfo) return;
        copiedLabelInfo.classList.add('copied');
        setTimeout(function () {
          copiedLabelInfo.classList.remove('copied');
        }, 2000);
      });
    });
  }

  function socialShareLinks() {
    var linkUrl = encodeURI(window.location.href);
    var head = document.head;
    var titleTag = document.querySelector('head meta[property="og:title"]');
    if (!titleTag) return;
    var title = titleTag.getAttribute('content');
    var titleContent = encodeURI(title);
    var twitterItem = mainWrapper.querySelector('.social-share__option.twitter');
    var linkedInItem = mainWrapper.querySelector('.social-share__option.linkedin');
    var facebookItem = mainWrapper.querySelector('.social-share__option.facebook');

    // SHARE LINKS
    var twitter = 'https://twitter.com/share?url=' + linkUrl + '&text=' + titleContent;
    var linkedIn =
      'https://www.linkedin.com/shareArticle?mini=true&url=' +
      linkUrl +
      '&source=' +
      window.location.hostname;
    var facebook =
      'http://www.facebook.com/sharer/sharer.php?u=' + linkUrl + '&title=' + titleContent;

    twitterItem.setAttribute('href', twitter);
    linkedInItem.setAttribute('href', linkedIn);
    facebookItem.setAttribute('href', facebook);

    // TWITTER CARD
    var twitterDescription = document
      .querySelector('head meta[property="og:description"]')
      .getAttribute('content');
    var twitterImage = document
      .querySelector('head meta[property="og:image"]')
      .getAttribute('content');

    head.insertAdjacentHTML('beforeend', '<meta name="twitter:card" content="summary">');
    head.insertAdjacentHTML('beforeend', '<meta name="twitter:title" content="' + title + '"/>');
    head.insertAdjacentHTML(
      'beforeend',
      '<meta name="twitter:image" content="' + twitterImage + '"/>',
    );
    head.insertAdjacentHTML(
      'beforeend',
      '<meta name="twitter:description" content="' + twitterDescription + '"/>',
    );
  }

  function mobileNavigationHandler() {
    var engagementMobile = mainWrapper.querySelector('#sd-engagement-bar-mobile');
    var content = engagementMobile.querySelector('.engagement__overlay');
    var closedContent = engagementMobile.querySelector('.engagement__closed');
    engagementMobile.addEventListener('click', function (e) {
      var isClosedHeader = !!e.target.closest('.engagement__closed');
      if (!isClosedHeader) return;
      if (engagementMobile.classList.contains('opened')) {
        engagementMobile.classList.remove('opened');
        content.style.cssText = 'min-height: 0; max-height: 0;';
        closedContent.style.cssText = `min-height: ${closedContent.scrollHeight}px; max-height: ${closedContent.scrollHeight}px;`;
      } else {
        containerScrollHeight = content.scrollHeight + 16;
        engagementMobile.classList.add('opened');
        content.style.cssText = `min-height: ${containerScrollHeight}px; max-height: ${containerScrollHeight}px;`;
        closedContent.style.cssText = 'min-height: 0; max-height: 0;';
      }
    });
  }

  function closeMobileEngagementBar() {
    var engagementMobile = mainWrapper.querySelector('#sd-engagement-bar-mobile');
    var content = engagementMobile.querySelector('.engagement__overlay');
    var closedContent = engagementMobile.querySelector('.engagement__closed');

    engagementMobile.classList.remove('opened');
    content.style.cssText = 'min-height: 0; max-height: 0;';
    closedContent.style.cssText = `min-height: ${closedContent.scrollHeight}px; max-height: ${closedContent.scrollHeight}px;`;
  }

  function loadCalendlyAssets() {
    var link = document.createElement('link');
    var script = document.createElement('script');
    link.rel = 'stylesheet';
    link.href = calendlyCss;
    document.head.insertAdjacentElement('beforeend', link);

    script.setAttribute('src', calendlyScript);
    document.body.insertAdjacentElement('beforeend', script);
  }

  function setStorydocLink() {
    if (!window.orgTitle) return;
    storydocLogo.forEach(function (logo) {
      logo.setAttribute(
        'href',
        'https://www.storydoc.com/presentation-maker?utm_source=story&amp;utm_medium=header&amp;utm_campaign=' +
          window.orgTitle +
          '&amp;utm_content=' +
          window.orgTitle +
          '',
      );
    });
  }

  // ============= STORY MENU START ============
  function storyMenuHandler(slidesContainer, data) {
    createMenu();
    var engagementMobile = mainWrapper.querySelector('#sd-engagement-bar-mobile');
    var menuTrigger = mainWrapper.querySelector('.menu__engagement');
    var menuContainer = mainWrapper.querySelector('.engagement-menu');
    var content = engagementMobile.querySelector('.engagement__overlay');

    if (menuTrigger) {
      menuTrigger.addEventListener('click', function () {
        menuTrigger.classList.toggle('menu-open');
        if (menuTrigger.classList.contains('menu-open')) {
          menuContainer.classList.add('menu-open');
          engagementMobile.classList.add('menu-open');
          var menuScrollHeight = menuContainer.scrollHeight;
          var openedMenuHeight =
            menuScrollHeight + 70 > containerScrollHeight - 70
              ? menuScrollHeight + 70
              : containerScrollHeight;
          content.style.cssText = `min-height: ${openedMenuHeight}px; max-height: ${openedMenuHeight}px;`;
        } else {
          menuContainer.classList.remove('menu-open');
          engagementMobile.classList.remove('menu-open');
          content.style.cssText = `min-height: ${containerScrollHeight}px; max-height: ${containerScrollHeight}px;`;
        }
      });
    }

    document.addEventListener('click', function (e) {
      var isMenu = e.target.closest('.menu__engagement');
      var isMenuCotainer = e.target.closest('.engagement-menu');
      var isEnagementBarContent = e.target.closest('.engagement__wrapper');
      if (isMenuCotainer) handleMenuClick(e);

      if (!isMenu && !isMenuCotainer) {
        if (isEnagementBarContent) {
          if (menuTrigger) menuTrigger.classList.remove('menu-open');
          if (menuContainer) menuContainer.classList.remove('menu-open');
          if (menuContainer) engagementMobile.classList.remove('menu-open');
          content.style.cssText = `min-height: ${containerScrollHeight}px; max-height: ${containerScrollHeight}px;`;
        } else {
          setTimeout(function () {
            if (menuTrigger) menuTrigger.classList.remove('menu-open');
            if (menuContainer) menuContainer.classList.remove('menu-open');
            if (menuContainer) engagementMobile.classList.remove('menu-open');
          }, 500);
        }
      }
    });

    function escapeDoubleQuotes(str) {
      return str.replace(/"/g, '\\"');
    }

    function createMenu() {
      if (!menuData && menuContainer) menuContainer.remove();
      var wrapper = mainWrapper.querySelector('.engagement-menu__list');
      if (!wrapper) return;
      menuData.forEach(function (item) {
        if (item.type === 'slide') {
          var target = document.querySelector(`[id="${escapeDoubleQuotes(item.anchor)}"]`);
          if (!target) return;
        }
        if (item.type === 'anchor') {
          var target = document.querySelector(`[data-anchor-target="${escapeDoubleQuotes(item.anchor)}"]`);
          if (!target) return;
        }
        wrapper.insertAdjacentHTML(
          'beforeend',
          `<div class="engagement-menu__item" data-menu-anchor-id="${escapeDoubleQuotes(item.anchor)}" data-menu-anchor-type="${item.type}">${item.title}</div>`,
        );
      });
    }

    function handleMenuClick(e) {
      var menuItem = e.target.closest('.engagement-menu__item');
      if (!menuItem) return;
      var currentActive = mainWrapper.querySelector('.engagement-menu__item.current-active');
      if (currentActive) currentActive.classList.remove('current-active');
      var type = menuItem.getAttribute('data-menu-anchor-type');
      var anchor = menuItem.getAttribute('data-menu-anchor-id');
      menuItem.classList.add('current-active');

      if (type === 'anchor') {
        var target = document.querySelector(`[data-anchor-target="${escapeDoubleQuotes(anchor)}"]`);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }

      if (type === 'slide') {
        var target = document.querySelector(`.slide[id="${escapeDoubleQuotes(anchor)}"]`);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }
      closeMobileEngagementBar();
      setTimeout(function () {
        if (menuTrigger) menuTrigger.classList.remove('menu-open');
        if (menuContainer) menuContainer.classList.remove('menu-open');
        if (menuContainer) engagementMobile.classList.remove('menu-open');
      }, 500);
    }

    var anchors = Array.from(document.querySelectorAll('#frontView .slide')).concat(
      Array.from(document.querySelectorAll('[data-anchor-target]')),
    );
    // ====== MENU ANCHORS OBSERVER ========
    var observer = new IntersectionObserver(
      function (entries) {
        if (entries[0].isIntersecting) {
          var target = entries[0].target;
          var slideItem = target.classList.contains('slide') ? target.getAttribute('id') : '';
          var anchorItem = target.getAttribute('data-anchor-target');
          var selector = slideItem || anchorItem;
          var currentActive = mainWrapper.querySelector('.engagement-menu__item.current-active');
          var menuItem = mainWrapper.querySelector(`[data-menu-anchor-id="${escapeDoubleQuotes(selector)}"]`);
          if (menuItem) {
            if (currentActive) currentActive.classList.remove('current-active');
            menuItem.classList.add('current-active');
          }
        }
      },
      { threshold: [0.3] },
    );

    anchors.forEach(function (anchor) {
      observer.observe(anchor);
    });
    // ====== MENU ANCHORS OBSERVER ========
  }
  // ============= STORY MENU END ============
})();
