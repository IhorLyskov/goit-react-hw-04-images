(function (document, player) {
  var config = {
    cdn_url: 'https://f.vimeocdn.com',
    vimeo_api_url: 'api.vimeo.com',
    request: {
      files: {
        dash: {
          separate_av: true,
          streams: [
            {
              profile: 165,
              quality: '540p',
              id: 'f0f2fce9-f7f0-4253-af47-7bbb63e7d709',
              fps: 29,
            },
            {
              profile: 139,
              quality: '240p',
              id: 'e12ac86a-b077-49cc-8241-c655b33089d6',
              fps: 29,
            },
            {
              profile: 164,
              quality: '360p',
              id: '5094daf3-dcb9-4e5f-aeb4-503a176c4811',
              fps: 29,
            },
            {
              profile: 175,
              quality: '1080p',
              id: '97a8c5b6-ff5a-4d56-9e76-2630ae1a82ab',
              fps: 29,
            },
            {
              profile: 174,
              quality: '720p',
              id: '99005928-3490-4993-aeb7-112737d7e6ab',
              fps: 29,
            },
          ],
          cdns: {
            akfire_interconnect_quic: {
              url: 'https://126vod-adaptive.akamaized.net/exp=1666383391~acl=%2F731eced6-513c-40c4-8b2c-c4fa1f3a7e7d%2F%2A~hmac=a5aa8f233e130e1b8893f3cfc9d2e00921f8874301ef88cfa7d4115b8ed5c5e3/731eced6-513c-40c4-8b2c-c4fa1f3a7e7d/sep/video/f0f2fce9,e12ac86a,5094daf3,97a8c5b6,99005928/master.json?base64_init=1',
              origin: 'gcs',
              avc_url:
                'https://126vod-adaptive.akamaized.net/exp=1666383391~acl=%2F731eced6-513c-40c4-8b2c-c4fa1f3a7e7d%2F%2A~hmac=a5aa8f233e130e1b8893f3cfc9d2e00921f8874301ef88cfa7d4115b8ed5c5e3/731eced6-513c-40c4-8b2c-c4fa1f3a7e7d/sep/video/f0f2fce9,e12ac86a,5094daf3,97a8c5b6,99005928/master.json?base64_init=1',
            },
            fastly_skyfire: {
              url: 'https://skyfire.vimeocdn.com/1666383391-0x6f0038c2ef2432f65e85ce2376c727de98910d9c/731eced6-513c-40c4-8b2c-c4fa1f3a7e7d/sep/video/f0f2fce9,e12ac86a,5094daf3,97a8c5b6,99005928/master.json?base64_init=1',
              origin: 'gcs',
              avc_url:
                'https://skyfire.vimeocdn.com/1666383391-0x6f0038c2ef2432f65e85ce2376c727de98910d9c/731eced6-513c-40c4-8b2c-c4fa1f3a7e7d/sep/video/f0f2fce9,e12ac86a,5094daf3,97a8c5b6,99005928/master.json?base64_init=1',
            },
          },
          streams_avc: [
            {
              profile: 165,
              quality: '540p',
              id: 'f0f2fce9-f7f0-4253-af47-7bbb63e7d709',
              fps: 29,
            },
            {
              profile: 139,
              quality: '240p',
              id: 'e12ac86a-b077-49cc-8241-c655b33089d6',
              fps: 29,
            },
            {
              profile: 164,
              quality: '360p',
              id: '5094daf3-dcb9-4e5f-aeb4-503a176c4811',
              fps: 29,
            },
            {
              profile: 175,
              quality: '1080p',
              id: '97a8c5b6-ff5a-4d56-9e76-2630ae1a82ab',
              fps: 29,
            },
            {
              profile: 174,
              quality: '720p',
              id: '99005928-3490-4993-aeb7-112737d7e6ab',
              fps: 29,
            },
          ],
          default_cdn: 'akfire_interconnect_quic',
        },
        hls: {
          separate_av: true,
          default_cdn: 'akfire_interconnect_quic',
          cdns: {
            akfire_interconnect_quic: {
              url: 'https://126vod-adaptive.akamaized.net/exp=1666383391~acl=%2F731eced6-513c-40c4-8b2c-c4fa1f3a7e7d%2F%2A~hmac=a5aa8f233e130e1b8893f3cfc9d2e00921f8874301ef88cfa7d4115b8ed5c5e3/731eced6-513c-40c4-8b2c-c4fa1f3a7e7d/sep/video/f0f2fce9,5094daf3,97a8c5b6,99005928,e12ac86a/master.m3u8?f=dash',
              origin: 'gcs',
              avc_url:
                'https://126vod-adaptive.akamaized.net/exp=1666383391~acl=%2F731eced6-513c-40c4-8b2c-c4fa1f3a7e7d%2F%2A~hmac=a5aa8f233e130e1b8893f3cfc9d2e00921f8874301ef88cfa7d4115b8ed5c5e3/731eced6-513c-40c4-8b2c-c4fa1f3a7e7d/sep/video/f0f2fce9,5094daf3,97a8c5b6,99005928,e12ac86a/master.m3u8?f=dash',
            },
            fastly_skyfire: {
              url: 'https://skyfire.vimeocdn.com/1666383391-0x6f0038c2ef2432f65e85ce2376c727de98910d9c/731eced6-513c-40c4-8b2c-c4fa1f3a7e7d/sep/video/f0f2fce9,5094daf3,97a8c5b6,99005928,e12ac86a/master.m3u8?f=dash',
              origin: 'gcs',
              avc_url:
                'https://skyfire.vimeocdn.com/1666383391-0x6f0038c2ef2432f65e85ce2376c727de98910d9c/731eced6-513c-40c4-8b2c-c4fa1f3a7e7d/sep/video/f0f2fce9,5094daf3,97a8c5b6,99005928,e12ac86a/master.m3u8?f=dash',
            },
          },
        },
        progressive: [
          {
            profile: '165',
            width: 960,
            mime: 'video/mp4',
            fps: 29,
            url: 'https://vod-progressive.akamaized.net/exp=1666383391~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2104%2F19%2F485523117%2F2174320355.mp4~hmac=7de1d4fcda9fc878ab093004c8cf8667011715e694c2688ea6fe691c3c8e3fcf/vimeo-prod-skyfire-std-us/01/2104/19/485523117/2174320355.mp4',
            cdn: 'akamai_interconnect',
            quality: '540p',
            id: 'f0f2fce9-f7f0-4253-af47-7bbb63e7d709',
            origin: 'gcs',
            height: 540,
          },
          {
            profile: '164',
            width: 640,
            mime: 'video/mp4',
            fps: 29,
            url: 'https://vod-progressive.akamaized.net/exp=1666383391~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2104%2F19%2F485523117%2F2174320298.mp4~hmac=f8c8a632efdfc31e0fbda5b7e9879bb4b4abed65db4c3e6f529e57bc62105150/vimeo-prod-skyfire-std-us/01/2104/19/485523117/2174320298.mp4',
            cdn: 'akamai_interconnect',
            quality: '360p',
            id: '5094daf3-dcb9-4e5f-aeb4-503a176c4811',
            origin: 'gcs',
            height: 360,
          },
          {
            profile: '175',
            width: 1920,
            mime: 'video/mp4',
            fps: 29,
            url: 'https://vod-progressive.akamaized.net/exp=1666383391~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2104%2F19%2F485523117%2F2174320312.mp4~hmac=8bb955b3ee7ee9f3a190cd30defb437cac1b6e2bc626329e7976c2a87f66e59f/vimeo-prod-skyfire-std-us/01/2104/19/485523117/2174320312.mp4',
            cdn: 'akamai_interconnect',
            quality: '1080p',
            id: '97a8c5b6-ff5a-4d56-9e76-2630ae1a82ab',
            origin: 'gcs',
            height: 1080,
          },
          {
            profile: '174',
            width: 1280,
            mime: 'video/mp4',
            fps: 29,
            url: 'https://vod-progressive.akamaized.net/exp=1666383391~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2104%2F19%2F485523117%2F2174320324.mp4~hmac=752dea2603b429c6c023b22a94b003bddf30c79806e6d5a3946c3f2f384a5ce3/vimeo-prod-skyfire-std-us/01/2104/19/485523117/2174320324.mp4',
            cdn: 'akamai_interconnect',
            quality: '720p',
            id: '99005928-3490-4993-aeb7-112737d7e6ab',
            origin: 'gcs',
            height: 720,
          },
          {
            profile: '139',
            width: 426,
            mime: 'video/mp4',
            fps: 29,
            url: 'https://vod-progressive.akamaized.net/exp=1666383391~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2104%2F19%2F485523117%2F2174320316.mp4~hmac=33769d246085eb742b6b1a2239315ee2b77a140d5030699c078449a728cfc539/vimeo-prod-skyfire-std-us/01/2104/19/485523117/2174320316.mp4',
            cdn: 'akamai_interconnect',
            quality: '240p',
            id: 'e12ac86a-b077-49cc-8241-c655b33089d6',
            origin: 'gcs',
            height: 240,
          },
        ],
      },
      lang: 'ru-RU',
      sentry: {
        url: 'https://6f5f8e1cecfa40fb850f578b69fc1705@o189131.ingest.sentry.io/1297650',
        enabled: false,
        debug_enabled: true,
        debug_intent: 0,
      },
      ab_tests: {
        webvr: { track: false, data: {}, group: false },
        chromecast: { track: false, data: {}, group: false },
        cmcd: { track: false, data: {}, group: false },
        llhls_timeout: { track: true, data: {}, group: false },
        stats_fresnel: { track: false, data: {}, group: true },
      },
      referrer: 'https://komarovskiy.info/',
      cookie_domain: '.vimeo.com',
      timestamp: 1666376263,
      gc_debug: { bucket: 'vimeo-player-debug' },
      expires: 6828,
      client: { ip: '188.190.66.146' },
      currency: 'USD',
      session: '2b096d1c11df717b04baaa6b6224d2ef3fd9f1901666376263',
      cookie: {
        volume: 1.0,
        captions_styles: {
          fontFamily: null,
          fontSize: null,
          fontOpacity: null,
          color: null,
          windowColor: null,
          edgeStyle: null,
          bgColor: null,
          windowOpacity: null,
          bgOpacity: null,
        },
        scaling: 1,
        captions: null,
        quality: null,
        hd: 0,
      },
      build: { backend: '1.52.0', js: '4.11.10' },
      urls: {
        fresnel_mimir_inputs_url:
          'https://fresnel-events.vimeocdn.com/add/mimir_inputs',
        barebone_js: 'https://f.vimeocdn.com/p/4.11.10/js/barebone.js',
        fresnel_chunk_url:
          'https://fresnel-events.vimeocdn.com/add/chunk_downloads',
        vuid_js: 'https://f.vimeocdn.com/js_opt/modules/utils/vuid.min.js',
        three_js: 'https://f.vimeocdn.com/p/external/three.rvimeo.min.js',
        test_imp: 'https://fresnel.vimeocdn.com/add/player-test-impression',
        js_base: 'https://f.vimeocdn.com/p/4.11.10/js/',
        fresnel_manifest_url:
          'https://fresnel-events.vimeocdn.com/add/playback_manifest',
        fresnel: 'https://fresnel.vimeocdn.com/add/player-stats',
        chromeless_css: 'https://f.vimeocdn.com/p/4.11.10/css/chromeless.css',
        player_telemetry_url:
          'https://player-telemetry.vimeo.com/player-events',
        mux_url: 'https://f.vimeocdn.com/p/external/mux.js',
        chromeless_js: 'https://f.vimeocdn.com/p/4.11.10/js/chromeless.js',
        js_vendor_module:
          'https://f.vimeocdn.com/p/4.11.10/js/vendor.ru-RU.module.js',
        js_module: 'https://f.vimeocdn.com/p/4.11.10/js/player.ru-RU.module.js',
        ambisonics_js: 'https://f.vimeocdn.com/p/external/ambisonics.min.js',
        js: 'https://f.vimeocdn.com/p/4.11.10/js/player.ru-RU.js',
        css: 'https://f.vimeocdn.com/p/4.11.10/css/player.css',
        proxy: 'https://player.vimeo.com/static/proxy.html',
      },
      signature: '0858424bdae08cb5ff9256e44785a827',
      flags: {
        dnt: 0,
        preload_video: 'metadata_on_hover',
        plays: 1,
        partials: 1,
        autohide_controls: 0,
      },
      country: 'UA',
      file_codecs: {
        hevc: { hdr: [], sdr: [], dvh1: [] },
        av1: [],
        avc: [
          'f0f2fce9-f7f0-4253-af47-7bbb63e7d709',
          '5094daf3-dcb9-4e5f-aeb4-503a176c4811',
          '97a8c5b6-ff5a-4d56-9e76-2630ae1a82ab',
          '99005928-3490-4993-aeb7-112737d7e6ab',
          'e12ac86a-b077-49cc-8241-c655b33089d6',
        ],
      },
    },
    player_url: 'player.vimeo.com',
    video: {
      version: {
        current: null,
        available: [{ is_current: 1, id: 178714336, file_id: 2174317090 }],
      },
      height: 1080,
      duration: 1707,
      thumbs: {
        1280: 'https://i.vimeocdn.com/video/1005331556-c6a73f6877563c4566a26db679d56d3c04cd428bbac08481ad93eb795b1300d8-d_1280',
        960: 'https://i.vimeocdn.com/video/1005331556-c6a73f6877563c4566a26db679d56d3c04cd428bbac08481ad93eb795b1300d8-d_960',
        640: 'https://i.vimeocdn.com/video/1005331556-c6a73f6877563c4566a26db679d56d3c04cd428bbac08481ad93eb795b1300d8-d_640',
        base: 'https://i.vimeocdn.com/video/1005331556-c6a73f6877563c4566a26db679d56d3c04cd428bbac08481ad93eb795b1300d8-d',
      },
      owner: {
        account_type: 'pro',
        name: '\u0416\u0443\u0440\u043d\u0430\u043b \u0414\u043e\u043a\u0442\u043e\u0440\u0430 \u041a\u043e\u043c\u0430\u0440\u043e\u0432\u0441\u043a\u043e\u0433\u043e',
        img: 'https://i.vimeocdn.com/portrait/51944047_60x60.jpg',
        url: 'https://vimeo.com/user140796033',
        img_2x: 'https://i.vimeocdn.com/portrait/51944047_120x120.jpg',
        id: 140796033,
      },
      id: 485523117,
      embed_code:
        '<iframe title="vimeo-player" src="https://player.vimeo.com/video/485523117?h=c1b9a924bb" width="640" height="360" frameborder="0" allowfullscreen></iframe>',
      title:
        '\u0423\u0440\u043e\u043a 32 \u041f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u044f \u0441 \u0440\u0435\u0431\u0435\u043d\u043a\u043e\u043c',
      share_url: 'https://vimeo.com/485523117',
      width: 1920,
      embed_permission: 'whitelist',
      fps: 29.0,
      spatial: 0,
      live_event: null,
      allow_hd: 1,
      hd: 1,
      lang: null,
      default_to_hd: 0,
      url: null,
      privacy: 'disable',
      channel_layout: 'stereo',
      unlisted_hash: null,
    },
    user: {
      team_origin_user_id: 0,
      liked: 0,
      account_type: 'none',
      vimeo_api_client_token: null,
      vimeo_api_interaction_tokens: null,
      team_id: 0,
      watch_later: 0,
      owner: 0,
      id: 0,
      mod: 0,
      private_mode_enabled: 0,
      logged_in: 0,
    },
    seo: {
      upload_date: '2020-11-30 10:10:05',
      embed_url: 'https://player.vimeo.com/video/485523117?h=c1b9a924bb',
      description: '',
      thumbnail:
        'https://i.vimeocdn.com/video/1005331556-c6a73f6877563c4566a26db679d56d3c04cd428bbac08481ad93eb795b1300d8-d_640',
    },
    embed: {
      autopause: 1,
      color: 'FE4A49',
      texttrack: '',
      on_site: 0,
      app_id: '',
      pip: 0,
      api: null,
      keyboard: 1,
      player_id: '',
      quality: null,
      muted: 0,
      dnt: 0,
      editor: false,
      log_plays: 1,
      playsinline: 1,
      transparent: 1,
      outro: 'beginning',
      settings: {
        fullscreen: 1,
        byline: 0,
        like: 0,
        playbar: 1,
        title: 0,
        color: 0,
        speed: 1,
        watch_later: 0,
        share: 0,
        scaling: 1,
        spatial_compass: 1,
        collections: 0,
        portrait: 0,
        pip: 0,
        logo: 0,
        embed: 0,
        auto_pip: 0,
        badge: 0,
        spatial_label: 1,
        volume: 1,
      },
      autopip: 0,
      context: 'embed.main',
      time: 0,
      loop: 0,
      autoplay: 0,
    },
    view: 1,
    vimeo_url: 'vimeo.com',
  };
  if (!config.request) {
    return;
  }
  if (typeof config.request === 'object' && 'error' in config.request) {
    if ('html' in config.request) {
      document.documentElement.innerHTML = config.request.html
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>');
    }
    return;
  }
  var isIframe = (function () {
    try {
      return window.self !== window.top;
    } catch (e) {
      return true;
    }
  })();
  if (!isIframe && /twitter/i.test(navigator.userAgent) && config.video.url) {
    window.location = config.video.url;
  }
  if (config.request.lang) {
    document.documentElement.setAttribute('lang', config.request.lang);
  }
  var fullscreenSupport =
    'exitFullscreen' in document ||
    'webkitExitFullscreen' in document ||
    'webkitCancelFullScreen' in document ||
    'mozCancelFullScreen' in document ||
    'msExitFullscreen' in document ||
    'webkitEnterFullScreen' in document.createElement('video');
  var inlineSvgSupport = (function () {
    var div = document.createElement('div');
    div.innerHTML = '<svg/>';
    return (
      (div.firstChild && div.firstChild.namespaceURI) ===
      'http://www.w3.org/2000/svg'
    );
  })();
  var windowsPhone =
    /MSIE 9/.test(navigator.userAgent) &&
    /Windows Phone/.test(navigator.userAgent);
  var IE10 = /IE 10/.test(navigator.userAgent);
  var usePlayer = fullscreenSupport || IE10 || windowsPhone;
  var firstScript = document.getElementsByTagName('script')[0];
  var script = document.createElement('script');
  var jsDone = false;
  var playerObject = false;
  if (!inlineSvgSupport) {
    usePlayer = false;
  }
  if (!usePlayer) {
    var placeholder = document.querySelector('.vp-placeholder');
    if (placeholder && placeholder.parentNode) {
      placeholder.parentNode.removeChild(placeholder);
    }
  }
  if (usePlayer) {
    player.className = 'player loading';
    var startTime = new Date().getTime();
    script.src = config.request.urls.js;
    firstScript.parentNode.insertBefore(script, firstScript);
    script['onreadystatechange' in script ? 'onreadystatechange' : 'onload'] =
      function () {
        if (
          !jsDone &&
          (!this.readyState ||
            this.readyState === 'loaded' ||
            this.readyState === 'complete')
        ) {
          jsDone = true;
          playerObject = new VimeoPlayer(
            player,
            config,
            cssDone || { link: link, startTime: startTime }
          );
        }
      };
    var cssDone = false;
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href =
      config.request.urls.css +
      (typeof cacheBuster === 'undefined' ? '' : cacheBuster);
    document.getElementsByTagName('head')[0].appendChild(link);
    link.onload = function () {
      cssDone = true;
    };
  } else {
    player.innerHTML =
      '<div class="fallback"><iframe title="vimeo-player" src="/video/485523117/fallback?js&amp;referrer=' +
      encodeURIComponent(config.request.referrer) +
      '" frameborder="0"></iframe></div>';
  }
  if (!config.request.flags.dnt && !config.embed.dnt) {
    window._vuid = [['pid', config.request.session]];
    var vim = document.createElement('script');
    vim.async = true;
    vim.src = config.request.urls.vuid_js;
    firstScript.parentNode.insertBefore(vim, firstScript);
  }
})(document, document.getElementById('player'));
