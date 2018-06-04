// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/benbaumann/code/frontendproject.zip (Unzipped Files)/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/benbaumann/code/frontendproject.zip (Unzipped Files)/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/benbaumann/code/frontendproject.zip (Unzipped Files)/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/benbaumann/code/frontendproject.zip (Unzipped Files)/src/pages/index.js"))
}

exports.json = {
  "layout-index.json": require("/Users/benbaumann/code/frontendproject.zip (Unzipped Files)/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/benbaumann/code/frontendproject.zip (Unzipped Files)/.cache/json/dev-404-page.json"),
  "404.json": require("/Users/benbaumann/code/frontendproject.zip (Unzipped Files)/.cache/json/404.json"),
  "index.json": require("/Users/benbaumann/code/frontendproject.zip (Unzipped Files)/.cache/json/index.json"),
  "404-html.json": require("/Users/benbaumann/code/frontendproject.zip (Unzipped Files)/.cache/json/404-html.json")
}