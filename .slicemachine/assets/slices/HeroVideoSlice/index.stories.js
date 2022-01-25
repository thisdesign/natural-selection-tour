import MyComponent from '../../../../slices/HeroVideoSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/HeroVideoSlice'
}


export const _DefaultSlice = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"hero_video_slice","items":[{"TextTop":[{"type":"paragraph","text":"Et aliqua duis voluptate aute et esse exercitation proident veniam incididunt ullamco adipisicing. Velit nisi cillum nisi labore culpa. Laboris nulla pariatur cillum ea quis in duis reprehenderit amet pariatur.","spans":[]}],"TextBottom":[{"type":"paragraph","text":"Non laboris velit ea fugiat magna tempor quis.","spans":[]}]},{"TextTop":[{"type":"paragraph","text":"Cillum sit in eu.","spans":[]}],"TextBottom":[{"type":"paragraph","text":"Commodo aute cillum cupidatat velit. Labore et magna aliqua consequat irure culpa fugiat labore incididunt. Id sint laboris nisi eu tempor ex ullamco aute officia.","spans":[]}]},{"TextTop":[{"type":"paragraph","text":"Lorem velit exercitation est anim aute esse. Tempor ea incididunt amet cillum nostrud id incididunt pariatur deserunt sunt adipisicing amet irure irure.","spans":[]}],"TextBottom":[{"type":"paragraph","text":"Sunt sit ex consectetur ex mollit minim tempor amet anim. Pariatur in irure voluptate.","spans":[]}]},{"TextTop":[{"type":"paragraph","text":"Dolore incididunt amet voluptate. Incididunt tempor adipisicing laborum sit aute. Lorem ex ullamco tempor nostrud cupidatat anim cupidatat anim elit.","spans":[]}],"TextBottom":[{"type":"paragraph","text":"Elit cupidatat occaecat et reprehenderit fugiat nostrud ad sit adipisicing. Elit amet aliquip non veniam in mollit commodo enim cillum officia anim sint veniam. Enim id aute mollit deserunt aliqua aliqua aute proident sit duis sint irure cillum.","spans":[]}]}],"primary":{"SectionNumber":"recontextualize innovative channels","SectionTitle":"target back-end e-commerce","Logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=900&h=500&fit=crop"},"CtaText":"implement best-of-breed web-readiness","VideoPoster":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1600861194802-a2b11076bc51?w=900&h=500&fit=crop"},"VideoFull":{"link_type":"Web","url":"http://google.com"},"VideoLoop":{"link_type":"Web","url":"https://prismic.io"},"LoopOnly":false},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
