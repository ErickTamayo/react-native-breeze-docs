const matter = require("gray-matter");
const stringify = require("stringify-object");

module.exports = async function (src) {
  const callback = this.async();
  const { content, data } = matter(src);
  const code = `export const frontMatter = ${stringify(data)}
${content}`;

  return callback(null, code);
};
