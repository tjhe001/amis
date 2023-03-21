amis.define('docs/zh-CN/components/office-viewer.md', function(require, exports, module, define) {

  module.exports = {
    "title": "Office Viewer",
    "description": null,
    "type": 0,
    "group": "⚙ 组件",
    "menuName": "OfficeViewer 文档渲染",
    "icon": null,
    "order": 23,
    "html": "<div class=\"markdown-body\"><blockquote>\n<p>2.9.0 及以上版本</p>\n</blockquote>\n<p>用于渲染 office 文档，目前只支持 docx 格式，通过前端转成 HTML 的方式进行渲染，支持以下功能：</p>\n<ul>\n<li>基础文本样式</li>\n<li>表格及表格样式</li>\n<li>内嵌图片</li>\n<li>列表</li>\n<li>注音</li>\n<li>链接</li>\n</ul>\n<p>不支持的功能：</p>\n<ul>\n<li>分页符</li>\n<li>形状</li>\n<li>艺术字</li>\n<li>域</li>\n<li>对象</li>\n</ul>\n<h2><a class=\"anchor\" name=\"%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" href=\"#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>基本用法</h2></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"office-viewer\",\n  \"src\": \"/examples/static/simple.docx\",\n  \"wordOptions\": {\n    \"padding\": \"8px\"\n  }\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E6%B8%B2%E6%9F%93%E9%85%8D%E7%BD%AE%E9%A1%B9\" href=\"#%E6%B8%B2%E6%9F%93%E9%85%8D%E7%BD%AE%E9%A1%B9\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>渲染配置项</h2><p>目前只支持 Word 文档，所以只有 word 的配置项，放在 <code>wordOptions</code> 下</p>\n<h3><a class=\"anchor\" name=\"word-%E6%B8%B2%E6%9F%93%E9%85%8D%E7%BD%AE%E5%B1%9E%E6%80%A7%E8%A1%A8\" href=\"#word-%E6%B8%B2%E6%9F%93%E9%85%8D%E7%BD%AE%E5%B1%9E%E6%80%A7%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>word 渲染配置属性表</h3><pre><code class=\"language-json\"><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">\"type\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"office-viewer\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"wordOptions\"</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token property\">\"padding\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"8px\"</span><span class=\"token punctuation\">,</span>\n    <span class=\"token property\">\"classPrefix\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"docx\"</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n</code></pre>\n<table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>classPrefix</td>\n<td><code>string</code></td>\n<td>&#39;docx-viewer&#39;</td>\n<td>渲染的 class 类前缀</td>\n</tr>\n<tr>\n<td>bulletUseFont</td>\n<td><code>boolean</code></td>\n<td>true</td>\n<td>列表使用字体渲染，请参考下面的乱码说明</td>\n</tr>\n<tr>\n<td>fontMapping</td>\n<td><code>object</code></td>\n<td></td>\n<td>字体映射，是个键值对，用于替换文档中的字体</td>\n</tr>\n<tr>\n<td>forceLineHeight</td>\n<td><code>string</code></td>\n<td></td>\n<td>设置段落行高，忽略文档中的设置</td>\n</tr>\n<tr>\n<td>padding</td>\n<td><code>string</code></td>\n<td></td>\n<td>设置页面间距，忽略文档中的设置</td>\n</tr>\n<tr>\n<td>enableReplaceText</td>\n<td><code>boolean</code></td>\n<td>true</td>\n<td>是否开启变量替换功能</td>\n</tr>\n</tbody></table>\n<h2><a class=\"anchor\" name=\"%E5%88%97%E8%A1%A8%E7%AC%A6%E5%8F%B7%E5%87%BA%E7%8E%B0%E4%B9%B1%E7%A0%81%E9%97%AE%E9%A2%98\" href=\"#%E5%88%97%E8%A1%A8%E7%AC%A6%E5%8F%B7%E5%87%BA%E7%8E%B0%E4%B9%B1%E7%A0%81%E9%97%AE%E9%A2%98\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>列表符号出现乱码问题</h2><p>默认情况下列表左侧的符号使用字体渲染，这样能做到最接近 Word 渲染效果，但如果用户的系统中没有这些字体就会显示乱码，为了解决这个问题需要手动在 amis 渲染的页面里导入对应的字体，比如</p>\n<pre><code>&lt;style&gt;\n  @font-face {\n    font-family: Wingdings;\n    src: url(./static/font/wingding.ttf);\n  }\n\n  @font-face {\n    font-family: Symbol;\n    src: url(./static/font/symbol.ttf);\n  }\n&lt;/style&gt;\n</code></pre>\n<p>目前已知会有 <code>Wingdings</code> 和 <code>Symbol</code> 两个字体，可能还有别的</p>\n<p>如果不想嵌入这两个字体，就只能在前面的 <code>wordOptions</code> 里设置 <code>bulletUseFont: false</code>。</p>\n<h2><a class=\"anchor\" name=\"%E5%8F%98%E9%87%8F%E6%9B%BF%E6%8D%A2\" href=\"#%E5%8F%98%E9%87%8F%E6%9B%BF%E6%8D%A2\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>变量替换</h2><p>文档可以预先定义变量，通过配置 <code>enableVar</code> 来开启这个功能，在实际渲染时根据上下文数据来渲染变量，比如</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"title\": \"\",\n  \"mode\": \"inline\",\n  \"wrapWithPanel\": false,\n  \"body\": [\n    {\n      \"type\": \"input-text\",\n      \"name\": \"name\",\n      \"value\": \"amis\",\n      \"label\": \"姓名\"\n    },\n    {\n      \"type\": \"input-email\",\n      \"name\": \"email\",\n      \"label\": \"邮箱\"\n    },\n    {\n      \"type\": \"input-text\",\n      \"name\": \"phone\",\n      \"label\": \"手机号\"\n    },\n    {\n      \"type\": \"office-viewer\",\n      \"id\": \"office-viewer\",\n      \"src\": \"/examples/static/info.docx\",\n      \"wordOptions\": {\n        \"enableVar\": true,\n        \"padding\": \"8px\"\n      }\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<p>如果关闭将显示原始文档</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"office-viewer\",\n  \"id\": \"office-viewer\",\n  \"src\": \"/examples/static/info.docx\",\n  \"wordOptions\": {\n    \"padding\": \"8px\"\n  }\n}\n</script></div><div class=\"markdown-body\">\n<h3><a class=\"anchor\" name=\"%E5%8F%98%E9%87%8F%E8%AF%A6%E7%BB%86%E8%AF%B4%E6%98%8E\" href=\"#%E5%8F%98%E9%87%8F%E8%AF%A6%E7%BB%86%E8%AF%B4%E6%98%8E\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>变量详细说明</h3><p>目前变量使用的写法是 <code>{{name}}</code>，其中 <code>name</code> 代表变量名，另外这里可以是 amis 表达式，比如前面示例的 <code>{{DATETOSTR(TODAY(), &#39;YYYY-MM-DD&#39;)}}</code></p>\n<blockquote>\n<p>为了避免 Word 自作主张添加额外标签，对于复杂的变量建议先在记事本之类的纯文本编辑器里编辑，再粘贴进 Word 里。</p>\n</blockquote>\n<h2><a class=\"anchor\" name=\"%E4%B8%8D%E6%B8%B2%E6%9F%93%E6%A8%A1%E5%BC%8F\" href=\"#%E4%B8%8D%E6%B8%B2%E6%9F%93%E6%A8%A1%E5%BC%8F\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>不渲染模式</h2><p>通过配置 <code>display: false</code> 可以让文档不渲染，虽然不渲染，但还是可以使用后面的下载及打印功能</p>\n<h2><a class=\"anchor\" name=\"%E4%B8%8B%E8%BD%BD%E6%96%87%E6%A1%A3\" href=\"#%E4%B8%8B%E8%BD%BD%E6%96%87%E6%A1%A3\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>下载文档</h2><p>基于事件动作实现</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">[\n  {\n    \"type\": \"action\",\n    \"label\": \"下载文档\",\n    \"onEvent\": {\n        \"click\": {\n          \"actions\": [\n            {\n              \"actionType\": \"saveAs\",\n              \"componentId\": \"office-viewer-download\"\n            }\n          ]\n        }\n      }\n  },\n  {\n    \"type\": \"office-viewer\",\n    \"id\": \"office-viewer-download\",\n    \"display\": false,\n    \"src\": \"/examples/static/simple.docx\"\n  }\n]\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E6%89%93%E5%8D%B0%E6%96%87%E6%A1%A3\" href=\"#%E6%89%93%E5%8D%B0%E6%96%87%E6%A1%A3\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>打印文档</h2><p>基于事件动作实现</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">[\n  {\n    \"type\": \"action\",\n    \"label\": \"打印\",\n    \"onEvent\": {\n        \"click\": {\n          \"actions\": [\n            {\n              \"actionType\": \"print\",\n              \"componentId\": \"office-viewer-print\"\n            }\n          ]\n        }\n      }\n  },\n  {\n    \"type\": \"office-viewer\",\n    \"id\": \"office-viewer-print\",\n    \"display\": false,\n    \"src\": \"/examples/static/simple.docx\"\n  }\n]\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E9%85%8D%E5%90%88%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0%E5%AE%9E%E7%8E%B0%E9%A2%84%E8%A7%88%E5%8A%9F%E8%83%BD\" href=\"#%E9%85%8D%E5%90%88%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0%E5%AE%9E%E7%8E%B0%E9%A2%84%E8%A7%88%E5%8A%9F%E8%83%BD\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>配合文件上传实现预览功能</h2><p>配置和 <code>input-file</code> 相同的 <code>name</code> 即可</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"title\": \"\",\n  \"wrapWithPanel\": false,\n  \"body\": [\n    {\n      \"type\": \"input-file\",\n      \"name\": \"file\",\n      \"label\": \"File\",\n      \"asBlob\": true,\n      \"accept\": \".docx\"\n    },\n    {\n      \"type\": \"office-viewer\",\n      \"id\": \"office-viewer\",\n      \"name\": \"file\"\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%B1%9E%E6%80%A7%E8%A1%A8\" href=\"#%E5%B1%9E%E6%80%A7%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>属性表</h2><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>src</td>\n<td>Api</td>\n<td></td>\n<td>文档地址</td>\n</tr>\n<tr>\n<td>enableVar</td>\n<td><code>boolean</code></td>\n<td></td>\n<td>是否开启变量替换功能</td>\n</tr>\n<tr>\n<td>wordOptions</td>\n<td><code>object</code></td>\n<td></td>\n<td>Word 渲染配置</td>\n</tr>\n</tbody></table>\n<h2><a class=\"anchor\" name=\"%E5%8A%A8%E4%BD%9C%E8%A1%A8\" href=\"#%E5%8A%A8%E4%BD%9C%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>动作表</h2><p>当前组件对外暴露以下特性动作，其他组件可以通过指定<code>actionType: 动作名称</code>、<code>componentId: 该组件id</code>来触发这些动作，动作配置可以通过<code>args: {动作配置项名称: xxx}</code>来配置具体的参数，详细请查看<a href=\"../../docs/concepts/event-action#触发其他组件的动作\">事件动作</a>。</p>\n<table>\n<thead>\n<tr>\n<th>动作名称</th>\n<th>动作配置</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>saveAs</td>\n<td><code>name?: string</code> 文件名</td>\n<td>下载文档</td>\n</tr>\n<tr>\n<td>print</td>\n<td>-</td>\n<td>打印文档</td>\n</tr>\n</tbody></table>\n</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "基本用法",
          "fragment": "%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "fullPath": "#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "level": 2
        },
        {
          "label": "渲染配置项",
          "fragment": "%E6%B8%B2%E6%9F%93%E9%85%8D%E7%BD%AE%E9%A1%B9",
          "fullPath": "#%E6%B8%B2%E6%9F%93%E9%85%8D%E7%BD%AE%E9%A1%B9",
          "level": 2,
          "children": [
            {
              "label": "word 渲染配置属性表",
              "fragment": "word-%E6%B8%B2%E6%9F%93%E9%85%8D%E7%BD%AE%E5%B1%9E%E6%80%A7%E8%A1%A8",
              "fullPath": "#word-%E6%B8%B2%E6%9F%93%E9%85%8D%E7%BD%AE%E5%B1%9E%E6%80%A7%E8%A1%A8",
              "level": 3
            }
          ]
        },
        {
          "label": "列表符号出现乱码问题",
          "fragment": "%E5%88%97%E8%A1%A8%E7%AC%A6%E5%8F%B7%E5%87%BA%E7%8E%B0%E4%B9%B1%E7%A0%81%E9%97%AE%E9%A2%98",
          "fullPath": "#%E5%88%97%E8%A1%A8%E7%AC%A6%E5%8F%B7%E5%87%BA%E7%8E%B0%E4%B9%B1%E7%A0%81%E9%97%AE%E9%A2%98",
          "level": 2
        },
        {
          "label": "变量替换",
          "fragment": "%E5%8F%98%E9%87%8F%E6%9B%BF%E6%8D%A2",
          "fullPath": "#%E5%8F%98%E9%87%8F%E6%9B%BF%E6%8D%A2",
          "level": 2,
          "children": [
            {
              "label": "变量详细说明",
              "fragment": "%E5%8F%98%E9%87%8F%E8%AF%A6%E7%BB%86%E8%AF%B4%E6%98%8E",
              "fullPath": "#%E5%8F%98%E9%87%8F%E8%AF%A6%E7%BB%86%E8%AF%B4%E6%98%8E",
              "level": 3
            }
          ]
        },
        {
          "label": "不渲染模式",
          "fragment": "%E4%B8%8D%E6%B8%B2%E6%9F%93%E6%A8%A1%E5%BC%8F",
          "fullPath": "#%E4%B8%8D%E6%B8%B2%E6%9F%93%E6%A8%A1%E5%BC%8F",
          "level": 2
        },
        {
          "label": "下载文档",
          "fragment": "%E4%B8%8B%E8%BD%BD%E6%96%87%E6%A1%A3",
          "fullPath": "#%E4%B8%8B%E8%BD%BD%E6%96%87%E6%A1%A3",
          "level": 2
        },
        {
          "label": "打印文档",
          "fragment": "%E6%89%93%E5%8D%B0%E6%96%87%E6%A1%A3",
          "fullPath": "#%E6%89%93%E5%8D%B0%E6%96%87%E6%A1%A3",
          "level": 2
        },
        {
          "label": "配合文件上传实现预览功能",
          "fragment": "%E9%85%8D%E5%90%88%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0%E5%AE%9E%E7%8E%B0%E9%A2%84%E8%A7%88%E5%8A%9F%E8%83%BD",
          "fullPath": "#%E9%85%8D%E5%90%88%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0%E5%AE%9E%E7%8E%B0%E9%A2%84%E8%A7%88%E5%8A%9F%E8%83%BD",
          "level": 2
        },
        {
          "label": "属性表",
          "fragment": "%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "fullPath": "#%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "level": 2
        },
        {
          "label": "动作表",
          "fragment": "%E5%8A%A8%E4%BD%9C%E8%A1%A8",
          "fullPath": "#%E5%8A%A8%E4%BD%9C%E8%A1%A8",
          "level": 2
        }
      ],
      "level": 0
    }
  };

});
