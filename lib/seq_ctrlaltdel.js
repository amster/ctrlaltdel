var SEQ;
SEQ = SEQ || {};

SEQ.CtrlAltDel = function ($target) {
  var t = this;
  t._elemInnerHtml = {};
  
  t.$target = $target;
}
$.extend(SEQ.CtrlAltDel.prototype, {
  remove: function (id) {
    var t = this,
        $elem = $('#' + id);
    $elem.remove();
    delete t._elemInnerHtml[id];
  },
  /**
   * opts: Supported keys:
   *
   *   classes: CSS classes to apply. Separate multiple classes with spaces.
   *   css: CSS attributes to set/modify. If no position is supplied the DIV
   *       will be set to position:absolute.
   *   html: Inner HTML.
   */
  set: function (id, opts) {
    var t = this,
        $elem = $('#' + id);
    if ($elem.length === 0) {
      $elem = $('<div id="'+id+'"></div>');
      t.$target.append($elem);
    }
    if (t._elemInnerHtml[id] != opts.html) {
      $elem.html(opts.html);
      t._elemInnerHtml[id] = opts.html;
    }
    if (opts.classes) {
      $elem.addClass(opts.classes);
    }
    if (!opts.css) {
      opts.css = { position: 'absolute' };
    }
    if (!opts.css.position) {
      opts.css.position = 'absolute';
    }
    $elem.css(opts.css);
    
    return $elem;
  },
  target: function () {
    return this.$target;
  }
})

