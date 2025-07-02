module.exports = function (tags, config) {
  if (!config.fancy) {
    config.min_font = 1;
    config.max_font = 1;
    config.unit = 'em';
  }

  let tagcloudHTML;

  if (tags)
    tagcloudHTML = this.tagcloud(tags, config);
  else
    tagcloudHTML = this.list_tags();

  if (config.fancy)
    return `<canvas id="tagCanvas">${tagcloudHTML}<canvas>`;

  return tagcloudHTML;
};