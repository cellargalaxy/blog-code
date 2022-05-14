function init() {
  const script = `<script type="module" src="https://unpkg.com/giscus?module"></script>`
  const html = `<giscus-widget id="comments"
        repo="cellargalaxy/blog-code"
        repoid="MDEwOlJlcG9zaXRvcnkyMDEwNDQ2MDc="
        category="Announcements"
        categoryid="DIC_kwDOC_uyf84CPGgz"
        mapping="pathname"
        reactionsenabled="1"
        emitmetadata="1"
        inputposition="top"
        theme="light"
        lang="zh-CN"
        loading="lazy"
        crossorigin="anonymous"
        ></giscus-widget>`
  $("#comment").append(script, html).css("padding", "1em")
}

export default {
  init: init,
}
