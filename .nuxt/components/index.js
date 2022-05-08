export { default as Archive } from '../../components/archive.vue'
export { default as ArchiveAndPage } from '../../components/archiveAndPage.vue'
export { default as ArchiveByFile } from '../../components/archiveByFile.vue'
export { default as ArticleView } from '../../components/articleView.vue'
export { default as AutoColorBadge } from '../../components/autoColorBadge.vue'
export { default as AutoColorBadges } from '../../components/autoColorBadges.vue'
export { default as Backtop } from '../../components/backtop.vue'
export { default as BreadcrumbPath } from '../../components/breadcrumbPath.vue'
export { default as Comment } from '../../components/comment.vue'
export { default as FileComment } from '../../components/fileComment.vue'
export { default as FileList } from '../../components/fileList.vue'
export { default as FileListAndPage } from '../../components/fileListAndPage.vue'
export { default as FileView } from '../../components/fileView.vue'
export { default as FullCarousel } from '../../components/fullCarousel.vue'
export { default as FullImage } from '../../components/fullImage.vue'
export { default as FullScrubImage } from '../../components/fullScrubImage.vue'
export { default as Navbar } from '../../components/navbar.vue'
export { default as PageFoot } from '../../components/pageFoot.vue'
export { default as PageHead } from '../../components/pageHead.vue'
export { default as Pagination } from '../../components/pagination.vue'
export { default as PaginationPage } from '../../components/paginationPage.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
