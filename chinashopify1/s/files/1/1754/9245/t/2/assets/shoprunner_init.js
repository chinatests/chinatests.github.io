var _shoprunner_com = {};
  /* =======================================================================
  ======== Custom Diff Code to enable Shoprunner for Shopify Stores ========
  ========================================================================*/
  var shoprunner_load_interval = null;
  var _old_iframe = null;
  var validate_token = function(node){
      $.ajax({
          url: node.src,
          onloadFunction: node.onload,
          success: function (passed_token) {
              if (passed_token == ' ' || passed_token == '') {
                  sr_$.cookie.clear('token');
              }
              else {
                  if (passed_token) {
                      sr_$.cookie.set('token', passed_token, 1 / 3);
                  } else {
                      sr_$.cookie.set('token', data);
                  }
              }
              this.onloadFunction();
          },
          error: function () {
              sr_$.cookie.clear('token');
              this.onloadFunction();
          }
      });
  }
  var shoprunner_iframe_replacement = function (params) {
      if (params.src.indexOf('apps/shoprunner') >= 0) {
          validate_token(params);
      }
      else {
          _old_iframe.apply(this, arguments);
      }
  };
  window._shoprunner_script_loaded = function () {
      window._shoprunner_script_loaded_callbacks.forEach(function (callback) {
          callback.apply(this);
      }, this);
  };
  if (!window._shoprunner_dom_loaded_callbacks) {
      window._shoprunner_dom_loaded_callbacks = [];
  }
  if (!window._shoprunner_script_loaded_callbacks) {
      window._shoprunner_script_loaded_callbacks = [];
  }
  setTimeout(function(){
    var observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation){
        mutation.addedNodes.forEach(function(n){
          if (n.nodeName.toLowerCase() == 'iframe' && n.src.indexOf('/apps/shoprunner/validate') >= 0) {
            validate_token(n);
            n.src = '';
          }
        });
      });
    });
    observer.observe(document.head, {childList: true});
    observer.observe(document.body, {childList: true});
  }, 0);

  /* =======================================================================
  ==== End of Custom Diff Code to enable Shoprunner for Shopify Stores =====
  ========================================================================*/
  (function () {
      /* -----------------------------------------
       * SR Configuration
       * -----------------------------------------
       */

      _shoprunner_com.version = 2.0;
      _shoprunner_com.enabled = true;
      _shoprunner_com.retailerID = 'RMINKOFF';
      // Application Proxy URL - Static
      _shoprunner_com.loginValidationURL = '/apps/shoprunner/validate';

      /*
       * @const (Integer field)
       * 1 - Development/Staging
       * 2 - Production
       */
      _shoprunner_com.environmentID = 2;


      /* -------------------------------------- */
      /* DO NOT MODIFY ANYTHING BELOW THIS LINE */
      /* -------------------------------------- */

      if (_shoprunner_com.enabled) {
          _shoprunner_com.prefix = window.parent.document.location.protocol + "http://";
          _shoprunner_com.sr_jsContentURL = _shoprunner_com.prefix + "staging-content.shoprunner.com";

          if (_shoprunner_com.environmentID == 2) {
              _shoprunner_com.sr_jsContentURL = _shoprunner_com.prefix + "content.shoprunner.com";
          }

          var sr_CSS_URL = _shoprunner_com.sr_jsContentURL + "/" + _shoprunner_com.retailerID + ".css";
          var sr_js_content_el_URL = _shoprunner_com.sr_jsContentURL + "/" + _shoprunner_com.retailerID + ".js";

          setTimeout(function () {
              var a = document.createElement("link");
              a.href = sr_CSS_URL;
              a.type = "text/css";
              a.rel = "stylesheet";
              document.getElementsByTagName("head")[0].appendChild(a);
              var b = document.createElement("script");
              b.onload = window._shoprunner_script_loaded;
              b.src = sr_js_content_el_URL;
              b.type = "text/javascript";
              document.getElementsByTagName("head")[0].appendChild(b)
          }, 1);
      }

      _shoprunner_com.docReady = false;
      _shoprunner_com.dom_loaded = function () {
          _shoprunner_com.docReady = true;
          if (typeof (sr_$) !== "undefined") {
              /* =======================================================================
              ======== Custom Diff Code to enable Shoprunner for Shopify Stores ========
              ========================================================================*/
              shoprunner_load_interval = setInterval(function () {
                  if (sr_$.actions && sr_$.actions.iframe) {
                      clearInterval(shoprunner_load_interval);
                      if (!_old_iframe) {
                          _old_iframe = sr_$.actions.iframe;
                          sr_$.actions.iframe = shoprunner_iframe_replacement
                      }
                      sr_$.delayRun()
                  }
              }, 1);
              //sr_$.run()
              /* =======================================================================
              ==== End of Custom Diff Code to enable Shoprunner for Shopify Stores =====
              ========================================================================*/
          }
      }

      if (document.addEventListener) {
          document.addEventListener("DOMContentLoaded", _shoprunner_com.dom_loaded, false)
      } else {
          if (document.attachEvent) {
              document.attachEvent("onreadystatechange", _shoprunner_com.dom_loaded)
          }
      }

      if (window.addEventListener) {
          window.addEventListener("load", _shoprunner_com.dom_loaded, false)
      } else {
          if (window.attachEvent) {
              var r = window.attachEvent("onload", _shoprunner_com.dom_loaded)
          }
      }
  }());