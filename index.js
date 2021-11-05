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