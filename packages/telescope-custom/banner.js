templates["afterDay"] = "banner";

Template.banner.helpers({
  isThirdDay: function () {
    return this.index == 2;
  }
});

(function() {
  var _fbq = window._fbq || (window._fbq = []);
  if (!_fbq.loaded) {
    var fbds = document.createElement('script');
    fbds.async = true;
    fbds.src = '//connect.facebook.net/en_US/fbds.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(fbds, s);
    _fbq.loaded = true;
  }
  _fbq.push(['addPixelId', '240368872814670']);
  _fbq.push(['addPixelId', '279124408946377']);
})();
window._fbq = window._fbq || [];
window._fbq.push(['track', 'PixelInitialized', {}]);


footerModules.push({
  template: 'shareme',
  order: 20
});

