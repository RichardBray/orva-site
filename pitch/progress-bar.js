initializeProgressBar();
function initializeProgressBar() {
  if (window.location.search.indexOf('progressBar=false') > -1) return;
  var slides = document.querySelectorAll('#frontView .storyContent > .slide');
  if (!slides.length) return setTimeout(initializeProgressBar, 500);
  var menuData = window.storyMenu;

  var storyMenuHTML =
    '<div id="sd-progress-menu"> <div class="sd-progress-menu__title">Menu:</div><div class="sd-progress-menu__wrapper"> </div></div>';
  var storyMenuButton =
    '<button class="progress-bar__navigation-control"> <div class="open-icon"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" > <g clip-path="url(#clip0_9642_11844)"> <path d="M2 2.66699H14V4.00033H2V2.66699ZM2 7.33366H14V8.66699H2V7.33366ZM2 12.0003H14V13.3337H2V12.0003Z" fill="#12033E"/> </g> <defs> <clipPath id="clip0_9642_11844"> <rect width="16" height="16" fill="white"/> </clipPath> </defs> </svg> </div><div class="close-icon"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" > <g clip-path="url(#clip0_9642_11287)"> <path d="M7.99999 7.05781L11.3 3.75781L12.2427 4.70048L8.94266 8.00048L12.2427 11.3005L11.3 12.2431L7.99999 8.94315L4.69999 12.2431L3.75732 11.3005L7.05732 8.00048L3.75732 4.70048L4.69999 3.75781L7.99999 7.05781Z" fill="#12033E"/> </g> <defs> <clipPath id="clip0_9642_11287"> <rect width="16" height="16" fill="white"/> </clipPath> </defs> </svg> </div>Menu </button>';
  var progressBarHTML =
    '<div id="sd-progress-bar__main">' +
    (menuData ? storyMenuHTML : '') +
    '<div id="sd-progress-bar"> <div class="progress-bar__wrapper"> <div class="progress-bar__components"></div><div class="progress-bar__main"> <div class="progress-bar__left"> ' +
    (menuData ? storyMenuButton : '') +
    ' <button class="progress-bar__present"> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" > <g clip-path="url(#clip0_2447_7364)"> <path d="M8.66683 12V13.3333H11.3335V14.6667H4.66683V13.3333H7.3335V12H2.00016C1.82335 12 1.65378 11.9298 1.52876 11.8047C1.40373 11.6797 1.3335 11.5101 1.3335 11.3333V2.66667C1.3335 2.48986 1.40373 2.32029 1.52876 2.19526C1.65378 2.07024 1.82335 2 2.00016 2H14.0002C14.177 2 14.3465 2.07024 14.4716 2.19526C14.5966 2.32029 14.6668 2.48986 14.6668 2.66667V11.3333C14.6668 11.5101 14.5966 11.6797 14.4716 11.8047C14.3465 11.9298 14.177 12 14.0002 12H8.66683ZM6.66683 5V9L10.0002 7L6.66683 5Z" fill="#12033E"/> </g> <defs> <clipPath id="clip0_2447_7364"> <rect width="16" height="16" fill="white"/> </clipPath> </defs> </svg> </button> </div><div class="progress-bar__counter"> <button class="prev"> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" > <g clip-path="url(#clip0_2288_8372)"> <path d="M5.2185 7.33312H13.3332V8.66645H5.2185L8.7945 12.2425L7.85184 13.1851L2.6665 7.99979L7.85184 2.81445L8.7945 3.75712L5.2185 7.33312Z" fill="#B8B3C5"/> </g> <defs> <clipPath id="clip0_2288_8372"> <rect width="16" height="16" fill="white"/> </clipPath> </defs> </svg> </button> <div class="count"><span class="current">0</span>/<span class="total">0</span></div><button class="next"> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" > <g clip-path="url(#clip0_2288_8381)"> <path d="M10.7815 7.33312H2.66683V8.66645H10.7815L7.2055 12.2425L8.14816 13.1851L13.3335 7.99979L8.14816 2.81445L7.2055 3.75712L10.7815 7.33312Z" fill="#B8B3C5"/> </g> <defs> <clipPath id="clip0_2288_8381"> <rect width="16" height="16" fill="white" transform="matrix(-1 0 0 1 16 0)"/> </clipPath> </defs> </svg> </button> </div><div class="progress-bar__right"> <a href="https://www.storydoc.com/privacy-policy" class="progress-bar__privacy" target="_blank" > <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M7.00016 13.6663C3.31816 13.6663 0.333496 10.6817 0.333496 6.99967C0.333496 3.31767 3.31816 0.333008 7.00016 0.333008C10.6822 0.333008 13.6668 3.31767 13.6668 6.99967C13.6668 10.6817 10.6822 13.6663 7.00016 13.6663ZM6.3335 6.33301V10.333H7.66683V6.33301H6.3335ZM6.3335 3.66634V4.99967H7.66683V3.66634H6.3335Z" fill="#88819F"/> </svg> Privacy policy </a> <a href="https://storydoc.com" target="_blank" class="progress-bar__storydoc"> <span>Made with</span> <svg width="50" height="18" viewBox="0 0 50 18" fill="none" xmlns="http://www.w3.org/2000/svg" > <path fill-rule="evenodd" clip-rule="evenodd" d="M2.33538 9.42045C1.5926 8.74424 1.76315 7.53993 2.15531 7.27467C2.05023 6.98703 1.65034 6.69383 1.15035 6.81423C0.446682 6.98272 0.00820948 7.7405 0 8.16883C0.00598726 8.81815 0.0804538 9.74143 1.55305 10.808C2.97161 11.8086 5.23998 11.7475 6.32287 11.0279C7.12588 10.4847 7.6022 9.67572 7.6445 8.43004C7.67286 6.95038 6.69901 5.82834 5.3544 4.81615C4.33673 4.05683 3.37534 3.24665 3.68607 2.42153C4.0354 1.50625 7.23429 1.94319 7.33564 2.42552C7.35437 2.49663 7.15725 2.69091 6.97362 2.8719L6.97361 2.87191C6.82027 3.02304 6.67633 3.16491 6.67531 3.21807C6.67357 3.30893 6.70943 3.36154 6.83841 3.36398C7.29906 3.37268 8.67824 2.58072 8.72704 1.9584C8.74944 1.75107 8.00542 1.13975 7.7136 0.978432C6.71037 0.427137 5.03536 0.304618 3.59018 0.692821C2.62706 0.934318 1.95203 1.53183 1.86191 2.38708C1.7327 3.35845 2.15924 4.18451 3.75833 5.38328C3.9712 5.54201 4.19772 5.69412 4.42337 5.84563C5.31503 6.44435 6.19294 7.03384 6.15997 7.98651C6.09227 9.59527 3.58512 10.5737 2.33538 9.42045ZM33.5346 5.27808C33.0695 4.583 32.1247 4.24256 31.2671 4.24256C29.4793 4.24256 27.9386 5.59015 27.9386 7.71793C27.9386 8.3779 28.0902 8.96595 28.3532 9.46265L28.2993 9.42626C28.2993 9.42626 26.7075 10.3418 26.6507 10.3834C26.727 9.91177 26.8133 9.53393 26.8917 9.19097C26.9448 8.95898 26.9942 8.74296 27.0343 8.52469C27.0918 8.18816 27.203 7.79166 27.3257 7.35447C27.5367 6.60239 27.7815 5.72992 27.8444 4.83524C27.8586 4.54396 27.3044 4.32214 26.6364 4.32214C26.3164 4.32214 25.7594 6.72276 25.5089 7.80235C25.4589 8.01763 25.4211 8.18039 25.3999 8.2611C25.2577 8.81591 24.7178 10.0228 24.3056 10.0228C24.0782 10.0228 24.0355 9.73152 24.0355 9.39863C24.0924 7.90063 24.5614 6.37474 25.0304 4.93222C25.002 4.6132 24.4477 4.32214 23.9645 4.32214C23.666 4.32214 23.4386 4.40526 23.3249 4.62718C23.0691 5.26522 22.8274 5.98637 22.6569 6.73536C22.5148 6.97116 22.2874 7.23491 21.9747 7.23491C21.7615 7.23491 21.6194 7.02669 21.6194 6.86025C21.6361 6.3303 21.864 5.82435 22.0519 5.40715C22.1836 5.11459 22.2957 4.86567 22.3016 4.68272C22.3016 4.43305 22.1879 4.22505 21.7189 4.11409C21.1646 3.98926 20.7524 4.11404 20.6387 4.47466C20.6098 4.57569 20.5777 4.69144 20.5425 4.81794C20.3702 5.43823 20.1262 6.31693 19.8429 6.98514L19.7718 6.94342C19.7938 6.56381 19.8575 6.13984 19.9199 5.72497C19.9782 5.33643 20.0354 4.95587 20.056 4.62718C20.056 4.62718 19.4165 4.25279 18.976 4.25279C18.4086 4.25279 18.3162 5.49342 18.2352 6.58103C18.231 6.63765 18.2268 6.69386 18.2226 6.74945C18.103 8.35026 17.9988 9.29952 17.9347 9.88346C17.8921 10.271 17.8673 10.4976 17.8673 10.647C17.8673 10.9382 19.2743 11.3959 19.6723 11.2156C19.7433 9.32922 20.3971 7.56764 20.7098 6.86025C20.7524 7.47054 20.9373 8.17793 21.9606 8.17793C22.1311 8.17793 22.2874 8.15024 22.4295 8.09476C22.3869 8.45539 22.3585 8.81613 22.3585 9.17676C22.3585 9.96737 22.6143 11.0907 23.8508 11.0907C24.4335 11.0907 24.8456 10.6607 25.073 10.2585C25.0162 10.6468 24.9309 11.1462 24.8172 11.6455C24.6751 11.7426 24.4761 11.8537 24.2629 11.9508C23.0548 12.5472 21.6336 13.3933 21.2356 13.6846C19.5302 14.9607 19.6439 16.0703 20.3687 16.7361C20.7951 17.1383 21.8611 17.3047 22.7423 16.9024C24.6894 16.0008 25.8689 13.7954 26.3237 12.1448C26.6414 11.9421 28.3142 10.827 28.8947 10.2097C29.5107 10.8463 30.3657 11.2075 31.2817 11.2075C32.1102 11.2075 33.0695 10.8529 33.5346 10.1578V11.0373H35.2207V0.809743H33.5346V5.27808ZM31.5433 9.67549C30.4968 9.67549 29.6392 8.81019 29.6392 7.70375C29.6392 6.5973 30.4968 5.77456 31.5433 5.77456C32.5171 5.77456 33.5055 6.54056 33.5055 7.70375C33.5055 8.86693 32.5753 9.67549 31.5433 9.67549ZM39.5047 11.2075C41.4379 11.2075 43.1239 9.81737 43.1239 7.71796C43.1239 5.61855 41.4379 4.24259 39.5047 4.24259C37.5715 4.24259 35.9 5.61855 35.9 7.71796C35.9 9.81737 37.5715 11.2075 39.5047 11.2075ZM39.5047 9.67552C38.4582 9.67552 37.6006 8.88115 37.6006 7.71796C37.6006 6.58315 38.4582 5.77459 39.5047 5.77459C40.5512 5.77459 41.4233 6.58315 41.4233 7.71796C41.4233 8.88115 40.5512 9.67552 39.5047 9.67552ZM50 9.93085C49.375 10.6969 48.4157 11.2075 47.2383 11.2075C45.2761 11.2075 43.5464 9.81737 43.5464 7.71796C43.5464 5.61855 45.2761 4.24259 47.2383 4.24259C48.4157 4.24259 49.375 4.75326 50 5.51926L48.8081 6.44129C48.4593 6.02992 47.8779 5.77459 47.2674 5.77459C46.0901 5.77459 45.247 6.59733 45.247 7.71796C45.247 8.82441 46.0901 9.67552 47.2674 9.67552C47.8779 9.67552 48.4593 9.42019 48.8081 9.00881L50 9.93085ZM8.4285 5.36599L9.05072 5.26038C8.67198 6.58046 8.22561 8.41537 8.22561 9.14141C8.22561 10.5275 9.10482 11.4384 10.2681 11.4384C11.1701 11.4384 12.1987 10.9701 12.7317 10.2983C13.113 11.0099 13.76 11.5331 14.7401 11.5331C16.9857 11.5331 17.6537 8.35676 17.739 6.90038C17.7816 5.51334 17.4831 4.2233 15.6497 4.2233C15.2944 4.2233 15.0243 4.37582 15.0243 4.37582C14.9959 4.25098 14.8112 4.14024 14.5838 4.04314C13.4895 4.29281 12.3809 6.49808 12.2957 8.23187C12.292 8.32549 12.2914 8.42056 12.2937 8.51654C12.27 8.51863 12.2565 8.52098 12.2565 8.52098C12.1888 9.18102 11.2826 10.2767 10.3493 10.2767C10.0922 10.2767 9.92993 10.0787 9.92993 9.70905C9.92993 8.69259 10.4845 6.58046 10.9309 5.00957C11.1099 4.98984 11.2803 4.97012 11.444 4.95116L11.4441 4.95116L11.4441 4.95115C12.0474 4.88132 12.5603 4.82194 13.0816 4.81156C13.3115 4.81156 13.3386 4.70595 13.3386 4.61355C13.3386 4.53434 13.0816 4.03271 12.9869 3.97991C12.9116 3.941 12.8392 3.91484 12.7725 3.89075C12.6357 3.84128 12.523 3.80058 12.4594 3.67629C12.3757 3.54363 12.2921 3.55296 12.0835 3.57623L12.0834 3.57623C12.0222 3.58306 11.9502 3.59109 11.8642 3.59709L11.3367 3.63669L11.8236 2.1186C11.8642 1.98659 10.7821 1.40576 10.4845 1.56416C10.2951 1.66977 9.76762 2.98985 9.47004 3.8875C8.67198 4.01951 7.96861 4.17792 7.77924 4.29673C7.53576 4.45514 7.98213 5.4452 8.4285 5.36599ZM13.9442 7.88511C13.9442 7.88511 13.859 8.23198 13.8306 8.6897C13.7737 9.63288 14.0011 10.3956 14.5127 10.3956C15.7066 10.3956 16.1898 7.09451 16.2324 6.35938C16.2343 6.33548 16.2365 6.30926 16.239 6.28114C16.2731 5.88499 16.3398 5.11105 15.8488 5.11105C15.1097 5.11105 14.4558 7.2888 14.3137 7.99618C14.2995 8.05167 14.0153 7.94059 13.9442 7.88511ZM22.6001 14.1839C23.2823 13.6291 24.1634 13.1159 24.6182 12.9356C24.405 14.2255 22.3016 16.1396 21.7757 15.6403C21.4346 15.3213 21.9179 14.7387 22.6001 14.1839Z" fill="#561090"/> </svg> </a> </div></div><div class="progress-bar__preview-box"></div></div></div></div>';
  var progressBarCSS = `#sd-progress-bar__main{position: fixed; bottom: 16px; left: 16px; width: calc(100% - 32px);z-index: 11;}#sd-progress-bar{position: relative; background: linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), linear-gradient(180deg, #ffffff 0%, #e7e6ec 100%); box-shadow: 0px 3px 5px rgba(18, 3, 62, 0.1), 0px 0px 1px rgba(18, 3, 62, 0.11); border-radius: 8px; padding: 4px 12px; z-index: 99;}@media screen and (max-width: 768px){#sd-progress-bar__main{left: 8px; width: calc(100% - 16px);}}#sd-progress-bar:hover .progress-bar__main.hidden{min-height: 44px; max-height: 44px;}#sd-progress-bar .progress-bar__components{display: flex; align-items: center; justify-content: space-between; min-height: 8px; margin-bottom: -2px; margin-top: -2px;}#sd-progress-bar .progress-bar__component{background: #e7e6ec; border-radius: 24px; flex: 100%; min-height: 4px; max-height: 4px; cursor: pointer; transition: all 0.2s ease-in-out;}#sd-progress-bar .progress-bar__component:not(:last-child){margin-right: 8px;}@media screen and (max-width: 768px){#sd-progress-bar .progress-bar__component:not(:last-child){margin-right: 5px;}}#sd-progress-bar .progress-bar__component.active{background: var(--theme-color-1);}#sd-progress-bar .progress-bar__component:hover,#sd-progress-bar .progress-bar__component.hover{min-height: 8px; max-height: 8px; background: #88819f;}#sd-progress-bar .progress-bar__component:hover.active,#sd-progress-bar .progress-bar__component.hover.active{background: var(--theme-color-1);}#sd-progress-bar .progress-bar__main{display: flex; align-items: center; justify-content: space-between; position: relative; min-height: 44px; max-height: 44px; transition: all 0.3s ease-in-out; overflow: hidden;}#sd-progress-bar .progress-bar__main.hidden{min-height: 0; max-height: 0;}#sd-progress-bar .progress-bar__counter{display: flex; align-items: center; background: #ffffff; border: 1px solid #e7e6ec; box-shadow: 0px 1px 0px #eae6ec, inset 0px -2px 0px rgba(244, 243, 246, 0.25); border-radius: 4px; height: 30px; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);}#sd-progress-bar .progress-bar__counter .prev,#sd-progress-bar .progress-bar__counter .next{width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; cursor: pointer; background: none; border: none;}#sd-progress-bar .progress-bar__counter .prev{border-right: 1px solid #e7e6ec;}#sd-progress-bar .progress-bar__counter .next{border-left: 1px solid #e7e6ec;}#sd-progress-bar .progress-bar__counter .prev,#sd-progress-bar .progress-bar__counter .next,#sd-progress-bar .progress-bar__counter .count{display: flex; align-items: center;}#sd-progress-bar .progress-bar__counter .count{font-weight: 600; font-size: 13px; line-height: 20px; color: #88819f; padding: 0 12px; pointer-events: none;}#sd-progress-bar .progress-bar__counter .count .current{color: #12033e; margin-right: 2px;}#sd-progress-bar .progress-bar__counter .count .total{margin-left: 2px;}#sd-progress-bar .progress-bar__left{display: flex; align-items: center;}#sd-progress-bar .progress-bar__reactions{margin-right: 7px;}#sd-progress-bar .progress-bar__reactions{width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; cursor: pointer; border: none; background: transparent; padding: 0; transition: all 0.2s ease-in-out; border-radius: 4px; margin-left: 2px;}#sd-progress-bar .progress-bar__reactions:hover{outline: 1px solid #b8b3c5; box-shadow: inset 0px 2px 0px rgba(212, 206, 218, 0.4); background: #d0cdd8;}#sd-progress-bar .progress-bar__present{font-weight: 600; font-size: 13px; line-height: 20px; color: #12033e; border: none; background: none; outline: none; cursor: pointer; display: flex; align-items: center; transition: opacity 0.3s ease-in-out;}#sd-progress-bar .progress-bar__present:hover{opacity: 0.7;}#sd-progress-bar .progress-bar__present svg{margin-right: 7px;}#sd-progress-bar .progress-bar__right{display: flex; align-items: center; padding-bottom: 3px; margin-top: 7px;}#sd-progress-bar .progress-bar__privacy{display: flex; align-items: center; font-weight: 600; font-size: 13px; line-height: 20px; color: #88819f; text-decoration: none; transition: opacity 0.3s ease-in-out; margin-right: 20px;}#sd-progress-bar .progress-bar__privacy:hover{opacity: 0.8;}#sd-progress-bar .progress-bar__privacy svg{margin-right: 5px;}#sd-progress-bar .progress-bar__storydoc{padding: 4px 12px; background: #ffffff; border: 1px solid #e7e6ec; box-shadow: 0px 3px 5px rgba(18, 3, 62, 0.1), 0px 0px 1px rgba(18, 3, 62, 0.11), inset 0px -2px 0px rgba(244, 243, 246, 0.25); border-radius: 4px; display: flex; align-items: center; justify-content: center; text-decoration: none; transition: opacity 0.3s ease-in-out;}#sd-progress-bar .progress-bar__storydoc:hover{opacity: 0.8;}#sd-progress-bar .progress-bar__storydoc span{font-weight: 600; font-size: 13px; line-height: 22px; color: #561090; margin-right: 4px;}#sd-progress-bar .progress-bar__storydoc svg{transform: translateY(2px);}#sd-progress-bar .progress-bar__preview-box{position: absolute; bottom: calc(100% + 8px); left: auto; width: 220px; height: 70px; opacity: 0; visibility: hidden; transform: translateY(5px); transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out, transform 0.3s ease-in-out; display: flex; background: #12033e; box-shadow: 0px 10px 18px rgba(18, 3, 62, 0.1), 0px 0px 1px rgba(18, 3, 62, 0.1); border-radius: 8px; cursor: pointer; display: flex; flex-direction: column; align-items: flex-start; justify-content: center; padding: 16px;}#sd-progress-bar .progress-bar__preview-box::after{content: ""; position: absolute; bottom: -3px; left: 50%; transform: translateX(-50%) rotate(45deg); width: 10px; height: 10px; background-color: #12033e; border-radius: 3px;}#sd-progress-bar .progress-bar__preview-box.over{opacity: 1; visibility: visible; transform: translateY(0);}#sd-progress-bar .progress-bar__preview-box .number{font-weight: 600; font-size: 10px; line-height: 12px; text-transform: uppercase; color: #88819f; margin: 0 0 8px;}#sd-progress-bar .progress-bar__preview-box .text{display: flex; align-items: center; width: 100%;}#sd-progress-bar .progress-bar__preview-box .text span{font-weight: 600; font-size: 13px; line-height: 18px; color: #ffffff; margin-right: 9px; display: block; width: calc(100% - 25px); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;}#sd-progress-bar .progress-bar__preview-box .text svg{width: 16px;}@media screen and (max-width: 1199px){#sd-progress-bar__main{bottom: auto; top: 8px; left: 8px; width: calc(100% - 16px); pointer-events: none;}#sd-progress-bar{padding: 4px 8px; background: rgba(13, 13, 13, 0.5); box-shadow: 0px 3px 5px rgba(18, 3, 62, 0.1), 0px 0px 1px rgba(18, 3, 62, 0.11); border-radius: 8px;}#sd-progress-bar .progress-bar__main{display: none;}#sd-progress-bar .progress-bar__component{border-radius: 24px; background: rgba(255, 255, 255, 0.1); height: 5px;}#sd-progress-bar .progress-bar__component:not(:last-child){margin-right: 4px;}}@media screen and (min-width: 1200px){body #menu[data-sd-trigger=fcta], body .LPMcontainer.LPMoverlay, body #hubspot-messages-iframe-container, body .intercom-lightweight-app .intercom-lightweight-app-launcher{bottom: 76px !important;}.navigation .open-button{top: 72px !important;}.navigation-popup{z-index: 999999;}}#sd-progress-bar__main .progress-bar__navigation-control{border-radius: 4px; border: 1px solid #e7e6ec; background: #fff; box-shadow: 0px 1px 0px 0px #eae6ec, 0px -2px 0px 0px rgba(244, 243, 246, 0.25) inset; display: none; align-items: center; justify-content: center; padding: 5px 12px 5px 8px; font-size: 13px; font-style: normal; font-weight: 600; line-height: 20px; margin-right: 8px; cursor: pointer;}#sd-progress-bar__main .progress-bar__navigation-control .close-icon{display: none;}#sd-progress-bar__main .progress-bar__navigation-control .close-icon,#sd-progress-bar__main .progress-bar__navigation-control .open-icon{width: 16px; height: 16px; margin-right: 4px;}#sd-progress-bar__main .progress-bar__navigation-control.menu-open{border: 1px solid #b8b3c5; background: #d0cdd8; box-shadow: 0px 2px 0px 0px rgba(212, 206, 218, 0.4) inset;}#sd-progress-bar__main .progress-bar__navigation-control.menu-open .close-icon{display: block;}#sd-progress-bar__main .progress-bar__navigation-control.menu-open .open-icon{display: none;}#sd-progress-bar__main #sd-progress-menu{border-radius: 4px; background: #fff; box-shadow: 0px 0px 1px 0px rgba(18, 3, 62, 0.1), 0px 10px 18px 0px rgba(18, 3, 62, 0.1); padding: 32px 24px; position: absolute; bottom: calc(100% + 8px); left: 0; width: 256px; opacity: 0; visibility: hidden; transform: translateY(10px); transition: all 0.3s ease-in-out; max-height: 420px; overflow-y: auto;}#sd-progress-bar__main #sd-progress-menu::-webkit-scrollbar{width: 4px; height: 4px; background: #e7e6ec; border-radius: 24px;}#sd-progress-bar__main #sd-progress-menu::-webkit-scrollbar-track{background: #e7e6ec; border-radius: 24px;}#sd-progress-bar__main #sd-progress-menu::-webkit-scrollbar-thumb{background: #d0cdd8; border-radius: 24px;}#sd-progress-bar__main #sd-progress-menu.menu-open{opacity: 1; visibility: visible; transform: translateY(0);}#sd-progress-bar__main #sd-progress-menu .sd-progress-menu__title{font-size: 10px; font-style: normal; font-weight: 600; line-height: normal; text-transform: uppercase; color: #88819f; margin-bottom: 24px; margin-left: 14px;}#sd-progress-bar__main #sd-progress-menu .sd-progress-menu__item{position: relative; padding: 7px 12px; color: #12033e; font-size: 16px; font-style: normal; font-weight: 600; line-height: 24px; cursor: pointer; transition: background 0.3s ease-in-out, border-color 0.3s ease-in-out; border-radius: 4px; background: transparent; border-right: 4px solid transparent; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;}#sd-progress-bar__main #sd-progress-menu .sd-progress-menu__item:not(:last-child){margin-bottom: 18px;}#sd-progress-bar__main #sd-progress-menu .sd-progress-menu__item:hover, #sd-progress-bar__main #sd-progress-menu .sd-progress-menu__item.current-active{background: rgba(231, 230, 236, 0.5); border-color: var(--theme-color-1);}`;
  document.head.insertAdjacentHTML(
    'beforeend',
    '<style type="text/css">' + progressBarCSS + '</style>',
  );
  document.body.insertAdjacentHTML('afterbegin', progressBarHTML);

  var wrapperClass = 'slide';
  var container = document.querySelector('#sd-progress-bar__main');
  var components = Array.from(
    document.querySelectorAll('#frontView .storyContent  .' + wrapperClass),
  );
  components.forEach(function (c, i) {
    if (c.scrollHeight < 10) components.splice(i, 1);
  }); // Filter empty components
  var currentCount = container.querySelector('.progress-bar__counter .current');
  var barsContainer = container.querySelector('.progress-bar__components');
  var total = container.querySelector('.progress-bar__counter .total');
  var prev = container.querySelector('.progress-bar__counter .prev');
  var next = container.querySelector('.progress-bar__counter .next');
  var fullscreenMode = container.querySelector('.progress-bar__present');
  var previewBox = container.querySelector('.progress-bar__preview-box');
  var controlsContent = container.querySelector('.progress-bar__main');
  var bars;
  var activeComponentIndex = 0;
  var isScrolling;
  var observerDisabled = false;

  var screenWidth = window.innerWidth;
  var progressBarMargin = screenWidth >= 768 ? 16 : 8;
  var isFullscreenMode = false;

  var counter = 0;
  var scrollPosition = 'start';
  var isScroll = false;
  var isUp = false;
  var isDown = false;

  setTotalCountOfSlides();
  createComponentBars();
  if (window.location.search.indexOf('engagementBar=false') <= -1) {
    removeAndSetActiveSlide();
  }
  removeFooterLogoIfNoEngagement();
  componentPreviewAction();
  scrollPresentation();
  if (menuData) storyMenuHandler();

  // ===== FUNCTIONS =======
  function setTotalCountOfSlides() {
    if (total) {
      total.textContent = components.length;
    }
    setTimeout(function () {
      controlsContent.classList.add('hidden');
    }, 2000);
  }

  function setCurrentCountAndScroll(scroll = true) {
    isScroll = true;
    if (currentCount) {
      currentCount.textContent = activeComponentIndex + 1;
    }
    if (scroll) {
      components[activeComponentIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  function createComponentBars() {
    components.forEach(function (c, i) {
      barsContainer.insertAdjacentHTML(
        'beforeend',
        `<div class="progress-bar__component${!i ? ' active' : ''}" data-bar-index="${i}"></div>`,
      );
    });
    bars = container.querySelectorAll('.progress-bar__component');
  }

  function componentPreviewAction() {
    if (screenWidth < 768 || !barsContainer) {
      return;
    }
    activeIndex = 0;
    barsContainer.addEventListener('mouseover', function (e) {
      var bar = e.target.closest('.progress-bar__component');
      if (!bar) {
        return;
      }
      var i = bar.getAttribute('data-bar-index');
      activeIndex = i;
      getActiveBarPosition(bar, true);
      previewBox.innerHTML = '';
      var textContent = components[i].innerText;
      var html =
        '<div class="number" style="display: ' +
        (textContent ? 'block' : 'none') +
        ';">Slide #' +
        (Number(i) + 1) +
        '</div><div class="text"><span>' +
        (textContent || 'Slide #' + (Number(i) + 1)) +
        '</span><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.7815 7.33507H2.66683V8.66841H10.7815L7.2055 12.2444L8.14816 13.1871L13.3335 8.00174L8.14816 2.81641L7.2055 3.75907L10.7815 7.33507Z" fill="#71688B"/></svg></div>';
      previewBox.insertAdjacentHTML('afterbegin', html);
    });

    barsContainer.addEventListener('mouseout', function (e) {
      var bar = e.target.closest('.progress-bar__component');
      if (!bar) {
        return;
      }
      getActiveBarPosition(bar, false);
    });

    previewBox.addEventListener('mouseover', function (e) {
      previewBox.classList.add('over');
      bars[+activeIndex].classList.add('hover');
    });
    previewBox.addEventListener('mouseout', function (e) {
      previewBox.classList.remove('over');
      bars[+activeIndex].classList.remove('hover');
    });
    previewBox.addEventListener('click', function () {
      observerDisabled = true;
      removeActiveState();
      activeComponentIndex = +activeIndex;
      bars[activeComponentIndex].classList.add('active');
      setCurrentCountAndScroll();
    });
  }

  function prevSlide() {
    if (!activeComponentIndex) {
      return;
    }
    activeComponentIndex--;
    observerDisabled = true;
    removeAndSetActiveSlide();
  }

  function nextSlide() {
    if (activeComponentIndex >= components.length - 1) {
      return;
    }
    activeComponentIndex++;
    observerDisabled = true;
    removeAndSetActiveSlide();
  }

  function removeAndSetActiveSlide(scroll = true) {
    removeActiveState();
    var bar = container.querySelector(
      `.progress-bar__component[data-bar-index="${activeComponentIndex}"]`,
    );
    if (bar) {
      bar.classList.add('active');
    }
    setCurrentCountAndScroll(scroll);
  }

  function triggerActiveBar(bar) {
    observerDisabled = true;
    var index = bar.getAttribute('data-bar-index');
    if (!index) {
      return;
    }
    removeActiveState();
    activeComponentIndex = +index;
    bar.classList.add('active');
    setCurrentCountAndScroll();
  }

  function removeActiveState() {
    var activeBar = container.querySelector('.progress-bar__component.active');
    if (activeBar) {
      activeBar.classList.remove('active');
    }
  }

  function getActiveBarPosition(bar, isOver = false) {
    if (!previewBox) {
      return;
    }
    if (!isOver) {
      return previewBox.classList.remove('over');
    }
    var rect = bar.getBoundingClientRect();
    var left = rect.left;
    var right = rect.right;
    var width = rect.width;
    var diff = previewBox.scrollWidth - width;
    var value = 0;

    if (left < 120) {
      value = left - progressBarMargin;
    } else if (screenWidth - right < 120) {
      value = right - previewBox.scrollWidth - progressBarMargin;
    } else {
      value = left - diff / 2 - progressBarMargin;
    }

    previewBox.style.left = value + 'px';
    previewBox.classList.add('over');
  }

  function toggleFullScreen() {
    if (
      !document.fullscreenElement &&
      !document.mozFullScreenElement &&
      !document.webkitFullscreenElement
    ) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }

  function removeFooterLogoIfNoEngagement() {
    var settings = window.badgesHandlerOptions;
    if (!settings || typeof settings !== 'object') return;
    if (settings.isEngagementActive === 'true') return;

    if (settings.hideFooterBadge === 'true') {
      var footerBadge = container.querySelector('.progress-bar__storydoc');
      if (footerBadge) footerBadge.style.display = 'none';
    }
  }

  if (prev) {
    prev.addEventListener('click', function () {
      prevSlide();
    });
  }
  if (next) {
    next.addEventListener('click', function () {
      nextSlide();
    });
  }
  if (bars) {
    bars.forEach(function (bar) {
      bar.addEventListener('click', function () {
        triggerActiveBar(bar);
      });
    });
  }
  if (fullscreenMode) {
    fullscreenMode.addEventListener('click', function () {
      toggleFullScreen();
    });
  }

  // ====== components observer ========
  var observer = new IntersectionObserver(
    function (entries) {
      if (entries[0].isIntersecting) {
        if (observerDisabled) {
          return;
        }
        var index = Array.from(components).findIndex(function (c) {
          return c.isSameNode(entries[0].target);
        });
        activeComponentIndex = index;
        removeAndSetActiveSlide(false);
      }
    },
    { threshold: [0.3] },
  );

  components.forEach(function (component) {
    observer.observe(component);
  });
  // ====== components observer ========

  // ====== disable observer handler =======
  window.addEventListener(
    'scroll',
    function (event) {
      window.clearTimeout(isScrolling);
      isScrolling = setTimeout(function () {
        observerDisabled = false;
      }, 50);
    },
    false,
  );
  // ====== disable observer handler =======

  // ===== FUNCTIONS =======

  // ========= presentation mode ==========

  function scrollPresentation() {
    var headerArrow = document.querySelector('header .cover__arrow');
    var scrollArr = [];

    function prepareComponents() {
      components.forEach(function (component) {
        var narrator = component.querySelector('.combo-narrator');
        var timeline = component.querySelector('.vTimelineCombo');
        if (!narrator && !timeline) return scrollArr.push(component);
        scrollArr.push(component);
        var childItems = Array.from(
          component.querySelectorAll(
            narrator
              ? '.combo-narrator .combo-narrator__content__step'
              : '.vTimelineCombo .timelineItem',
          ),
        );
        for (i = 1; i < childItems.length; i++) {
          scrollArr.push(childItems[i]);
        }
      });
    }
    prepareComponents();

    // GET INDEX AFTER STOP WHEEL
    document.addEventListener('wheel', function () {
      isScroll = true;
    });
    wheelHandler();
    function wheelHandler(barClicked = false) {
      isUp = false;
      isDown = false;
      var observer = new IntersectionObserver(
        function (entries) {
          for (var i = 0; i < entries.length; i++) {
            if (entries[i].isIntersecting === true) {
              if (!isScroll) return;
              var index = scrollArr.findIndex(function (item) {
                return item === entries[i].target;
              });
              counter = index;
              if (barClicked) {
                var activeFullIndex = Array.from(components).findIndex(function (c) {
                  return c.isSameNode(scrollArr[index].closest('.' + wrapperClass));
                });
                activeComponentIndex = activeFullIndex;
                removeAndSetActiveSlide(false);
              }
              if (headerArrow) headerArrow.classList.remove('hidden');
            }
          }
        },
        {
          threshold: [0.1],
        },
      );

      scrollArr.forEach(function (component) {
        observer.observe(component);
      });
    }

    window.addEventListener('mouseup', function (e) {
      if (e.offsetX > e.target.clientWidth || e.offsetY > e.target.clientHeight) {
        isScroll = true;
        wheelHandler(true);
      }
    });

    // PREVENT ALL SCROLL ON KEYBOARD CLICK
    window.addEventListener('keydown', function (e) {
      if (e.code === 'Home') counter = 0;
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].indexOf(e.code) > -1) {
        e.preventDefault();
      }

      if (e.code === 'Space') {
        var sendMessageComponent = document.querySelector('#sd-engagement-wrapper #sd-email-send');
        if (!sendMessageComponent || !sendMessageComponent.classList.contains('opened'))
          return e.preventDefault();
      }
    });

    // SCROLL HANDLER
    if (headerArrow) headerArrow.addEventListener('click', scrollDown);
    document.addEventListener('keyup', function (event) {
      if (event.code === 'ArrowDown') scrollDown();
      if (event.code === 'Space') {
        var sendMessageComponent = document.querySelector('#sd-engagement-wrapper #sd-email-send');
        if (!sendMessageComponent || !sendMessageComponent.classList.contains('opened'))
          return scrollDown();
      }
      if (event.code === 'ArrowUp') scrollUp();
    });

    function scrollDown() {
      isScroll = false;
      if (!isDown) {
        if (counter < 0) counter = 0;
        counter++;
        isUp = false;
        isDown = true;
      }
      if (scrollArr.length === counter) return;
      if (scrollArr.length === counter + 1 && headerArrow) headerArrow.classList.add('hidden');
      scrollPosition = scrollArr[counter].classList.contains(wrapperClass) ? 'start' : 'center';
      scrollArr[counter].scrollIntoView({
        block: scrollPosition,
        behavior: 'smooth',
      });
      counter++;
    }

    function scrollUp() {
      isScroll = false;
      if (scrollArr.length + 1 > counter && headerArrow) headerArrow.classList.remove('hidden');
      if (!isUp) {
        counter = counter - 2;
        isUp = true;
        isDown = false;
      }
      if (counter < 0) return;
      scrollPosition = scrollArr[counter].classList.contains(wrapperClass) ? 'start' : 'center';
      scrollArr[counter].scrollIntoView({
        block: scrollPosition,
        behavior: 'smooth',
      });
      counter--;
    }
  }

  function fullscreenChanged() {
    isFullscreenMode =
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement;
    if (isFullscreenMode) {
      document.body.classList.add('sd-fullscreen-presentation');
      document.documentElement.classList.add('sd-fullscreen-presentation');
    } else {
      document.body.classList.remove('sd-fullscreen-presentation');
      document.documentElement.classList.remove('sd-fullscreen-presentation');
    }
  }
  document.addEventListener('fullscreenchange', fullscreenChanged);
  document.addEventListener('mozfullscreenchange', fullscreenChanged);
  document.addEventListener('webkitfullscreenchange', fullscreenChanged);
  document.addEventListener('msfullscreenchange', fullscreenChanged);

  // ========= presentation mode ==========

  var lastScrollTop = 0;
  window.addEventListener(
    'scroll',
    function () {
      var st = window.pageYOffset || document.documentElement.scrollTop;
      if (st < lastScrollTop) {
        controlsContent.classList.remove('hidden');
      } else {
        controlsContent.classList.add('hidden');
      }
      lastScrollTop = st <= 0 ? 0 : st;
    },
    false,
  );

  // ============= STORY MENU START ============
  function storyMenuHandler() {
    createMenu();

    var menuTrigger = container.querySelector('.progress-bar__navigation-control');
    var menuContainer = container.querySelector('#sd-progress-menu');

    if (menuTrigger) {
      menuTrigger.addEventListener('click', function () {
        menuTrigger.classList.toggle('menu-open');
        if (menuTrigger.classList.contains('menu-open')) {
          menuContainer.classList.add('menu-open');
        } else {
          menuContainer.classList.remove('menu-open');
        }
      });
    }

    document.addEventListener('click', function (e) {
      var isMenu = e.target.closest('.progress-bar__navigation-control');
      var isMenuCotainer = e.target.closest('#sd-progress-menu');
      if (isMenuCotainer) handleMenuClick(e);

      if (!isMenu && !isMenuCotainer) {
        if (menuTrigger) menuTrigger.classList.remove('menu-open');
        if (menuContainer) menuContainer.classList.remove('menu-open');
      }
    });

    function escapeDoubleQuotes(str) {
      return str.replace(/"/g, '\\"');
    };

    function createMenu() {
      if (!menuData && menuContainer) menuContainer.remove();
      var wrapper = container.querySelector('.sd-progress-menu__wrapper');
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
          `<div class="sd-progress-menu__item" data-menu-anchor-id="${escapeDoubleQuotes(item.anchor)}" data-menu-anchor-type="${item.type}">${item.title}</div>`,
        );
      });
    }

    function handleMenuClick(e) {
      var menuItem = e.target.closest('.sd-progress-menu__item');
      if (!menuItem) return;
      var currentActive = container.querySelector('.sd-progress-menu__item.current-active');
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
    }

    var anchors = Array.from(slides).concat(
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
          var currentActive = container.querySelector('.sd-progress-menu__item.current-active');
          var menuItem = container.querySelector(`[data-menu-anchor-id="${escapeDoubleQuotes(selector)}"]`);
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
}
