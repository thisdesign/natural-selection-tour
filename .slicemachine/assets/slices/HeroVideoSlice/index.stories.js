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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"hero_video_slice","items":[{"TextTop":[{"type":"paragraph","text":"Id excepteur enim qui voluptate quis occaecat duis ea tempor eu esse. Exercitation fugiat anim amet nostrud minim commodo anim nostrud consectetur labore sint nulla officia. Anim eiusmod culpa consequat velit enim dolor minim irure est.","spans":[]}],"TextBottom":[{"type":"paragraph","text":"Aute ad mollit enim reprehenderit nisi do qui.","spans":[]}]},{"TextTop":[{"type":"paragraph","text":"Non officia esse tempor est duis ex sit sunt. Culpa qui ullamco sunt commodo officia officia nisi magna ullamco nulla excepteur.","spans":[]}],"TextBottom":[{"type":"paragraph","text":"Duis amet Lorem officia officia ut non laboris consequat ea fugiat mollit deserunt.","spans":[]}]},{"TextTop":[{"type":"paragraph","text":"Nostrud sit consectetur nostrud reprehenderit ea ad amet quis pariatur commodo quis ea eu exercitation Lorem. Cupidatat eu aute fugiat consequat dolor ad adipisicing Lorem pariatur ullamco et reprehenderit proident mollit.","spans":[]}],"TextBottom":[{"type":"paragraph","text":"Commodo pariatur consequat exercitation duis laboris irure do cupidatat et aute eiusmod elit. Eiusmod aliqua irure in. Consectetur amet adipisicing ad laborum esse excepteur consectetur do magna sint.","spans":[]}]},{"TextTop":[{"type":"paragraph","text":"Enim aute irure ea enim consequat velit.","spans":[]}],"TextBottom":[{"type":"paragraph","text":"Exercitation duis sit exercitation nulla culpa velit consequat ad commodo fugiat cupidatat. Laborum sint amet quis do in nostrud. Dolore do qui irure.","spans":[]}]}],"primary":{"SectionNumber":"envisioneer cutting-edge e-commerce","SectionTitle":"morph extensible networks","Logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=900&h=500&fit=crop"},"CtaText":"innovate dynamic users","VideoFull":{"link_type":"Web","url":"http://google.com"},"VideoLoop":{"link_type":"Web","url":"http://google.com"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
