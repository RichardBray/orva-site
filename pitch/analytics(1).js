(function () {
  if (
    /\/version-preview|preview=true|\/preview/.test(window.location.href)
    || !window.analyticsData
    || (window.analyticsData &&  window.analyticsData.versionId.startsWith('{{'))
  ) return;
  var canUseAnalytics = !window.disableAnalytics; // if Cookies accepted or no disable analytics
  var piwikContainerID = window.stagingPIWIKContainerID || 'c1d8be2f-34c7-42f9-9143-96890d0241bd';
  // load piwik.pro
  (function(window, document, dataLayerName, id) {
    window[dataLayerName]=window[dataLayerName]||[],window[dataLayerName].push({start:(new Date).getTime(),event:"stg.start"});var scripts=document.getElementsByTagName('script')[0],tags=document.createElement('script');
    function stgCreateCookie(a,b,c){var d="";if(c){var e=new Date;e.setTime(e.getTime()+24*c*60*60*1e3),d="; expires="+e.toUTCString()}document.cookie=a+"="+b+d+"; path=/"}
    var isStgDebug=(window.location.href.match("stg_debug")||document.cookie.match("stg_debug"))&&!window.location.href.match("stg_disable_debug");stgCreateCookie("stg_debug",isStgDebug?1:"",isStgDebug?14:-1);
    var qP=[];dataLayerName!=="dataLayer"&&qP.push("data_layer_name="+dataLayerName),isStgDebug&&qP.push("stg_debug");var qPString=qP.length>0?("?"+qP.join("&")):"";
    tags.async=!0,tags.src="https://storydoc-analytics.containers.piwik.pro/"+id+".js"+qPString,scripts.parentNode.insertBefore(tags,scripts);
    !function(a,n,i){a[n]=a[n]||{};for(var c=0;c<i.length;c++)!function(i){a[n][i]=a[n][i]||{},a[n][i].api=a[n][i].api||function(){var a=[].slice.call(arguments,0);"string"==typeof a[0]&&window[dataLayerName].push({event:n+"."+i+":"+a[0],parameters:[].slice.call(arguments,1)})}}(i[c])}(window,"ppms",["tm","cm"]);
  })(window, document, 'dataLayer', piwikContainerID);


  // Init
  initAnalytics();

  function initAnalytics() {
    var isPiwik = typeof _paq !== "undefined";

    if(!isPiwik) {
      console.info('_paq is not found, try again in 500ms');
      return setTimeout(initAnalytics, 500);
    }

    // COOKIE CONSENT HANDLER
    if(!window.analyticsToSend) window.analyticsToSend = [];
    if (window.sendAnalyticsEvents) {
      window.ga = null;
      (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
      ga('create', window.analyticsProperty, 'auto');
      ga('send', 'pageview');
      if (window.analyticsToSend.length) {
        // Prevent to send same event twice
        window.analyticsToSend.pop();
        window.analyticsToSend = window.analyticsToSend.filter(function (item) { return item.eventAction !== "page load" })
        // Prevent to send same event twice end
        window.analyticsToSend.forEach(function (item) { ga('send', item) })
        window.analyticsToSend = [];
      }
    }
    // COOKIE CONSENT HANDLER END



    if(!window.eventLabel) {
      console.error('Missing eventLabel variable.')
      var eventLabel = 'sandbox-automated-test';
    } else {
      var eventLabel = window.eventLabel;
    };

    loadEventsHandler();
    if (canUseAnalytics) autoAcceptPIWIK();

    function loadEventsHandler() {
      var slides = document.querySelectorAll('#frontView .storyContent > .slide');
      if (!slides.length) return setTimeout(loadEventsHandler, 500);

      // Element viewed event
      function getFirstFiveWords(htmlContainer) {
          const textContent = htmlContainer.textContent.trim();
          const words = textContent.split(/\s+/);
          return words.slice(0, 5).join(' ');
      };

        var observer = new IntersectionObserver(function(entries) {
            if (entries[0].isIntersecting === true) {
                var event = entries[0].target.getAttribute('data-analytics-event');
                var content = getFirstFiveWords(entries[0].target);
                var slideIndex = Array.from(slides).findIndex(function (slide) { return slide.isSameNode(entries[0].target) });
                var analyticsAction = `Slide #${slideIndex + 1}`;
                if (event) analyticsAction = event;
                else if (content) analyticsAction = content;
                customEvent({
                    hitType: 'event',
                    eventCategory: 'view',
                    eventAction: analyticsAction
                });
            }
        }, { threshold: [.3] });
        slides.forEach(function (slide) { observer.observe(slide) });

        // Element clicked event
        var links = document.querySelectorAll('.buttonElement .buttonWrapper');
        links.forEach(function (link) {
            link.addEventListener('click', function () {
                var attr = link.getAttribute('data-analytics-click-event');
                var content = link.textContent;
                customEvent({
                    hitType: 'event',
                    eventCategory: 'click',
                    eventAction: `cta_${attr ? attr : content}`,
                });
            })
        });

        // Page load event
        customEvent({
          hitType: 'event',
          eventCategory: 'view',
          eventAction: 'page load',
          integrationTitle: 'Presentation opened'
        });

        // Started & finish reading events
        var startedReadingOffset = window.innerHeight * 0.5; // scrolling through half screen after the fold
        var finishedReadingOffset = document.documentElement.scrollHeight - (window.innerHeight + 150); // 150px from the end
        var startedReadingTriggered = false;
        var finishedReadingTriggered = false;
        window.addEventListener('scroll', function () {
          // started reading
          if (!startedReadingTriggered && window.pageYOffset > startedReadingOffset) {
              customEvent({
                  hitType: 'event',
                  eventCategory: 'view',
                  eventAction: 'view_slide_1',
                  integrationTitle: 'Started reading presentation'
              });
              startedReadingTriggered = true;
          }

          // finished reading
          if (!finishedReadingTriggered && window.pageYOffset > finishedReadingOffset) {
              customEvent({
                  hitType: 'event',
                  eventCategory: 'view',
                  eventAction: 'view_last_slide',
                  integrationTitle: 'Finished reading presentation'
              });
              finishedReadingTriggered = true;
          }
        });  
    }

    // ==== Custom Dimensions ====
    // Client-id
    ga('set', 'customTask', function(model) {
      model.set('dimension1', model.get('clientId'));
      if(isPiwik) _paq.push(['setCustomDimensionValue', 1, model.get('clientId')]);
    });
    if(window.analyticsData) {
      // set the global tracking - for internal analytics
      ga('create', 'UA-136823689-6', 'auto', 'globalTracker');

      // pageTitle
      ga('set', 'dimension2', window.analyticsData.pageTitle);
      ga('globalTracker.set', 'dimension2', window.analyticsData.pageTitle);

      // versionTitle
      ga('set', 'dimension3', window.analyticsData.versionTitle);
      ga('globalTracker.set', 'dimension3', window.analyticsData.versionTitle);
      // orgTitle
      ga('set', 'dimension4', window.analyticsData.orgTitle);
      ga('globalTracker.set', 'dimension4', window.analyticsData.orgTitle);
      // orgId
      ga('set', 'dimension5', window.analyticsData.orgId);
      ga('globalTracker.set', 'dimension5', window.analyticsData.orgId);
      // storyId
      ga('set', 'dimension6', window.analyticsData.storyId);
      ga('globalTracker.set', 'dimension6', window.analyticsData.storyId);
      // versionId
      ga('set', 'dimension7', window.analyticsData.versionId);
      ga('globalTracker.set', 'dimension7', window.analyticsData.versionId);
      // versionCreatorId
      ga('set', 'dimension8', window.analyticsData.versionCreatorId);
      ga('globalTracker.set', 'dimension8', window.analyticsData.versionCreatorId);
      // sessionStart timestamp
      ga('set', 'dimension9', new Date().toISOString());
      ga('globalTracker.set', 'dimension9', new Date().toISOString());
      // dimension10 = hit level timestamp


      // ======== PIWIK ==========
      if (isPiwik) {
        // pageTitle
        _paq.push(['setCustomDimensionValue', 2, window.analyticsData.pageTitle]);
        // versionTitle
        _paq.push(['setCustomDimensionValue', 3, window.analyticsData.versionTitle]);
        // orgTitle
        _paq.push(['setCustomDimensionValue', 4, window.analyticsData.orgTitle]);
        // orgId
        _paq.push(['setCustomDimensionValue', 5, window.analyticsData.orgId]);
        // storyId
        _paq.push(['setCustomDimensionValue', 6, window.analyticsData.storyId]);
        // versionId
        _paq.push(['setCustomDimensionValue', 7, window.analyticsData.versionId]);
        //versionCreatorId
        _paq.push(['setCustomDimensionValue', 8, window.analyticsData.versionCreatorId]);
        // sessionStart timestamp
        _paq.push(['setCustomDimensionValue', 9, new Date().toISOString()]);
      }
      // ======== PIWIK ==========

      ga('globalTracker.send', 'pageview');
    }


    function customEvent(analyticsPayload) {
      analyticsPayload.eventLabel = eventLabel;
      analyticsPayload.dimension10 = new Date().toISOString();
      if(isPiwik) _paq.push(['setCustomDimensionValue', 10, analyticsPayload.dimension10]);
      // GA
      window.sendAnalyticsEvents || !window.disableAnalytics
        ? ga('send', analyticsPayload)
        : window.analyticsToSend.push(analyticsPayload);
      // Piwik Pro
      if(isPiwik && checkIfEventAndCategoryAreSet(analyticsPayload.eventAction, analyticsPayload.eventCategory)) _paq.push(["trackEvent", analyticsPayload.eventCategory, analyticsPayload.eventAction]);

      if(typeof window.integratedAnalytics === "function" && (window.sendAnalyticsEvents || !window.disableAnalytics)) {
        window.integratedAnalytics(analyticsPayload);
      }
    }


    function checkIfEventAndCategoryAreSet(event, category) {
      var isEvent = event && event.trim();
      var isCategory = category && category.trim();
      return isEvent && isCategory ? true : false;
    }

    function autoAcceptPIWIK() {
      // 0 - reject, 1 - accept
      var settings = { consents: { analytics: { status: 1 } } };
      if (window.ppms && ppms.cm) {
        ppms.cm.api('setComplianceSettings', settings , onFulfilled, onRejected);
      }
    }

    function onFulfilled(settings) {
      console.info(settings)
    }
    
    function onRejected(err) {
      console.info(err)
    }
  }
})()