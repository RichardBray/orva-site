(function() {
    if(window.showViewer) showStoryViewer();

})();

function showStoryViewer() {
    let viewerElement = document.createElement("div");
    let viewerStyle = document.createElement("style");
    viewerElement.innerHTML = `<div class="storyViewer">
        <div class="screen fullScreen active" data-screen="fullScreen" onclick="changeStoryLayout(this)"><span class="fullScreen"></span></div>
        <div class="screen middleScreen" data-screen="middleScreen" onclick="changeStoryLayout(this)">
             <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.75" y="0.75" width="18.5" height="14.5" rx="1.25" stroke="#737c8f" stroke-width="1.5" stroke-miterlimit="16"/>
                <rect x="4.5" y="1" width="11" height="14" fill="#737c8f"/>
            </svg>
        </div>
        <div class="screen smallScreen" data-screen="smallScreen" onclick="changeStoryLayout(this)">
              <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.75" y="0.75" width="18.5" height="14.5" rx="1.25" stroke="#737c8f" stroke-width="1.5" stroke-miterlimit="16"/>
                <rect x="6" y="1" width="8" height="14" fill="#737c8f"/>
            </svg>
        </div>
        </div>`
    viewerStyle.innerHTML = `
            body {
            max-width: 100%;
            }
            body[data-screen="middleScreen"] {
                max-width: 1500px;
                margin: 0 auto;
            }
            body[data-screen="smallScreen"] {
                max-width: 1200px;
                margin: 0 auto;
            }
            .component {
                border-radius: 8px;
                min-height: 660px;
                margin-bottom:8px;
            }
            .component .container__inner {
                box-shadow: 3px 3px 10px 0 #a0a0a054 !important;
            }
            .component .container__inner img {
                box-shadow: none !important;
             }
            .preview-top-bar {
                display:none:
            }
            .storyViewer {
                display: flex;
                flex-flow: column;
                align-items: center;
                position: fixed;
                top: 16px;
                left: 16px;
                background: rgb(46 59 88 / 80%);
                box-shadow: 0px 2px 13px rgba(46, 59, 88, 0.16);
                padding: 8px;
                border-radius: 8px;
                z-index: 99999;
            }
            .preview-page .storyViewer {
                top: 56px;
            }
            .storyViewer .screen {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 20px;
                height: 16px;
                padding: 8px 6px;
                border-radius: 4px;
                box-sizing: content-box;
                cursor: pointer;
                margin-bottom:2px;
            }
            .storyViewer .screen:hover, .storyViewer .screen.active {
                background: rgba(16, 35, 63, 0.5);
            }
            .storyViewer .screen svg {
                display: block;
                width: 100%;
                height: 100%;
            }
            .storyViewer .screen:hover svg rect[fill], .storyViewer .screen.active svg rect[fill] {
               fill: #fff;
            }
            .storyViewer .screen:hover svg rect[stroke], .storyViewer .screen.active svg rect[stroke] {
               stroke: #fff;
            }
            .storyViewer .screen .fullScreen {
                display: block;
                width: 100%;
                height: 100%;
                background: #737c8f;
                border-radius: 2px;
            }
            .storyViewer .screen:hover .fullScreen, .storyViewer .screen.active .fullScreen {
               background: #fff;
            }
            @media (max-width: 1300px) {
                .storyViewer {
                    display:none
                 }
            }
            @media (max-width: 1600px) {
                .storyViewer .screen.middleScreen {
                    display:none
                 }
            }
        `;
    document.body.appendChild(viewerElement);
    document.head.appendChild(viewerStyle);
    document.querySelector('body').setAttribute('data-screen', 'fullScreen');
    let isPreview = window.location.href.indexOf('preview') > -1;
    if(isPreview) document.querySelector('body').classList.add('preview-page');
}

function changeStoryLayout(element) {
    document.querySelector('.storyViewer .screen.active').classList.remove('active');
    element.classList.add('active');
    let screenAttr = element.getAttribute('data-screen');
    document.querySelector('body').setAttribute('data-screen', screenAttr);
}
