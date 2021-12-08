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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"hero_video_slice","items":[{"TextTop":[{"type":"paragraph","text":"Laborum laboris labore sit excepteur fugiat quis eiusmod. Magna sit laboris ex et. Fugiat fugiat do pariatur.","spans":[]}],"TextBottom":[{"type":"paragraph","text":"Ex non enim nisi exercitation culpa ea esse duis est anim. In eu tempor exercitation ad mollit quis veniam ad labore laborum. Deserunt excepteur quis voluptate proident anim ipsum ipsum magna eu in pariatur deserunt.","spans":[]}]},{"TextTop":[{"type":"paragraph","text":"Nostrud enim non dolore Lorem ad adipisicing consectetur.","spans":[]}],"TextBottom":[{"type":"paragraph","text":"Culpa occaecat duis occaecat nisi id. Amet adipisicing minim do sint ullamco anim dolore do enim non aliquip cupidatat sint ipsum. Excepteur nisi laborum est culpa consectetur adipisicing velit sint id velit labore.","spans":[]}]},{"TextTop":[{"type":"paragraph","text":"Exercitation deserunt quis tempor.","spans":[]}],"TextBottom":[{"type":"paragraph","text":"Officia laboris magna dolore qui aliqua consectetur reprehenderit enim nostrud do irure laboris. Dolor sint cupidatat ullamco esse nulla ea quis quis. Consequat esse occaecat officia id nisi do elit tempor mollit nisi elit consequat aliquip.","spans":[]}]},{"TextTop":[{"type":"paragraph","text":"Dolore officia laboris labore velit et dolor dolor eu quis do tempor reprehenderit nostrud.","spans":[]}],"TextBottom":[{"type":"paragraph","text":"Est officia eiusmod adipisicing culpa eiusmod consectetur dolor ut tempor labore ea. Exercitation est velit ipsum ullamco deserunt aute ad incididunt veniam.","spans":[]}]}],"primary":{"SectionNumber":"repurpose mission-critical mindshare","SectionTitle":"empower distributed e-services","Logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=900&h=500&fit=crop"},"CtaText":"architect viral users","VideoFull":{"link_type":"Web","url":"http://google.com"},"VideoLoop":{"link_type":"Web","url":"http://google.com"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
