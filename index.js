class TaggedStyle {

  style($element) {

    return (style, ...arg) => {

      const raw = style.raw.reduce((prev, current, index) => {
        return this.makeStyleString(arg, prev, current, index);
      });

      $element.setAttribute('style', raw);
    }
  }

  div(style, ...arg) {
    const $div = document.createElement('div');
    const raw = style.raw.reduce((prev, current, index) => {
      return this.makeStyleString(arg, prev, current, index);
    });
    $div.setAttribute('style', raw);

    return $div;
  }

  span(style, ...arg) {
    const $span = document.createElement('span');
    const raw = style.raw.reduce((prev, current, index) => {
      return this.makeStyleString(arg, prev, current, index);
    });
    $span.setAttribute('style', raw);

    return $span;
  }

  a(style, ...arg) {
    const $a = document.createElement('a');
    const raw = style.raw.reduce((prev, current, index) => {
      return this.makeStyleString(arg, prev, current, index);
    });
    $a.setAttribute('style', raw);

    return $a;
  }

  ul(style, ...arg) {
    const $ul = document.createElement('ul');
    const raw = style.raw.reduce((prev, current, index) => {
      return this.makeStyleString(arg, prev, current, index);
    });
    $ul.setAttribute('style', raw);

    return $ul;
  }

  li(style, ...arg) {
    const $li = document.createElement('li');
    const raw = style.raw.reduce((prev, current, index) => {
      return this.makeStyleString(arg, prev, current, index);
    });
    $li.setAttribute('style', raw);

    return $li;
  }

  makeStyleString(arg, prev, current, index) {
    if (arg.length > 0) {
      return prev + arg[index - 1] + current
    } else {
      return prev + current;
    }
  }
}

const tagged = new TaggedStyle();
export default tagged