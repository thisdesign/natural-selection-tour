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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"hero_video_slice","items":[{"TextTop":[{"type":"paragraph","text":"Sint amet aliquip laboris ipsum deserunt consequat laborum ea nulla sit culpa officia. Velit dolor Lorem esse sunt id sunt cillum consectetur nulla ut fugiat amet enim.","spans":[]}],"TextBottom":[{"type":"paragraph","text":"Proident ipsum deserunt enim tempor laborum culpa. Commodo Lorem labore consequat minim deserunt. Ullamco laborum elit ullamco sint ipsum enim nisi dolor consectetur aliquip cupidatat sint reprehenderit aute.","spans":[]}]},{"TextTop":[{"type":"paragraph","text":"Enim sint aute veniam sint dolor consectetur ex in pariatur veniam laborum ad adipisicing. Fugiat velit et pariatur sunt dolore eu mollit tempor fugiat nisi quis ex proident.","spans":[]}],"TextBottom":[{"type":"paragraph","text":"Voluptate ea commodo ullamco magna consectetur officia nostrud commodo est Lorem reprehenderit. Adipisicing deserunt do eiusmod in esse cupidatat sunt quis labore non dolor nulla.","spans":[]}]},{"TextTop":[{"type":"paragraph","text":"Amet qui incididunt consequat aliquip exercitation ad culpa dolore qui officia nulla sit sit et. Pariatur cillum pariatur sunt.","spans":[]}],"TextBottom":[{"type":"paragraph","text":"Esse minim ad magna. Laboris nostrud magna ad do laboris.","spans":[]}]}],"primary":{"SectionNumber":"seize one-to-one deliverables","SectionTitle":"repurpose back-end mindshare","Logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1586952518485-11b180e92764?w=900&h=500&fit=crop"},"CtaText":"expedite transparent eyeballs","VideoPoster":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589321599763-d66926c29613?w=900&h=500&fit=crop"},"VideoFull":{"link_type":"Web","url":"https://slicemachine.dev"},"VideoLoop":{"link_type":"Web","url":"http://twitter.com"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
