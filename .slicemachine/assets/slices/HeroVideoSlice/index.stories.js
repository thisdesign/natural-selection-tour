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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"hero_video_slice","items":[{"TextTop":[{"type":"paragraph","text":"Elit in duis reprehenderit reprehenderit officia laboris duis consectetur officia magna enim esse non.","spans":[]}],"TextBottom":[{"type":"paragraph","text":"Aliqua velit ea pariatur consequat laboris aute ex ex tempor eu commodo in aute. Aliquip esse officia in anim deserunt eiusmod qui ullamco consectetur elit.","spans":[]}]},{"TextTop":[{"type":"paragraph","text":"Reprehenderit commodo pariatur commodo anim.","spans":[]}],"TextBottom":[{"type":"paragraph","text":"Ut voluptate nostrud culpa duis commodo do tempor consectetur enim commodo qui cupidatat commodo est. Culpa voluptate cillum nulla magna cupidatat.","spans":[]}]},{"TextTop":[{"type":"paragraph","text":"Est et id ad reprehenderit elit nulla tempor et adipisicing. Do do magna Lorem aute irure veniam eu voluptate enim aliqua.","spans":[]}],"TextBottom":[{"type":"paragraph","text":"Ex labore fugiat mollit proident do Lorem veniam est sint irure tempor ex dolore occaecat ut.","spans":[]}]},{"TextTop":[{"type":"paragraph","text":"Anim reprehenderit sit ullamco in excepteur sunt occaecat. Occaecat in laborum fugiat ut ex ipsum esse proident sunt consectetur nulla sint. Voluptate enim excepteur deserunt cupidatat dolor amet commodo ad laboris sunt aliqua cillum fugiat velit duis.","spans":[]}],"TextBottom":[{"type":"paragraph","text":"Mollit laborum cupidatat nostrud reprehenderit velit aliqua magna incididunt minim irure. Ad labore Lorem nisi ipsum laborum ea occaecat sunt.","spans":[]}]},{"TextTop":[{"type":"paragraph","text":"Proident officia labore occaecat Lorem dolor fugiat eu excepteur. Occaecat id exercitation elit magna sit. Veniam eu adipisicing eu reprehenderit eiusmod veniam sint magna occaecat et irure nostrud.","spans":[]}],"TextBottom":[{"type":"paragraph","text":"Excepteur labore aliquip do sit tempor officia sunt reprehenderit. Commodo occaecat nostrud veniam velit laboris ex culpa commodo consectetur.","spans":[]}]}],"primary":{"SectionNumber":"grow frictionless bandwidth","SectionTitle":"strategize wireless experiences","Logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589321599763-d66926c29613?w=900&h=500&fit=crop"},"CtaText":"brand best-of-breed e-markets","VideoPoster":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=900&h=500&fit=crop"},"VideoFull":{"link_type":"Web","url":"https://slicemachine.dev"},"VideoLoop":{"link_type":"Web","url":"https://slicemachine.dev"},"LoopOnly":false},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
