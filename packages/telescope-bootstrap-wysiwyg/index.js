if (Meteor.isClient) {
  templates["post_submit"] = "custom_post_submit";
  templates["post_edit"] = "custom_post_edit";
}

sanitize = function (s) {
  // console.log('// before sanitization:')
  // console.log(s)
  if(Meteor.isServer){
    var s = sanitizeHtml(s, {
      allowedTags: [
        'h3', 'h4', 'h5', 'h6', 'blockquote', 'p', 'a', 'ul',
        'ol', 'nl', 'li', 'b', 'i', 'strong', 'em', 'strike',
        'code', 'hr', 'br', 'div', 'table', 'thead', 'caption',
        'tbody', 'tr', 'th', 'td', 'pre', 'img'
      ]
    });
    // console.log('// after sanitization:')
    // console.log(s)
  }
  return s;
};
