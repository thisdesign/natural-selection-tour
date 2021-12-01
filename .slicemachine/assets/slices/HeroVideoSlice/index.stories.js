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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"hero_video_slice","items":[{"TextTop":[{"type":"paragraph","text":"Duis commodo exercitation sit laborum consequat cillum.","spans":[]}],"TextBottom":[{"type":"paragraph","text":"Sint veniam excepteur nostrud fugiat minim proident esse ex eu incididunt elit ipsum sint nulla commodo.","spans":[]}]},{"TextTop":[{"type":"paragraph","text":"Ex dolor sit eu nostrud tempor anim tempor fugiat minim laboris proident.","spans":[]}],"TextBottom":[{"type":"paragraph","text":"Dolor non culpa proident commodo anim adipisicing ullamco ex in. Irure nostrud ex id dolore incididunt ut magna magna labore quis laboris.","spans":[]}]},{"TextTop":[{"type":"paragraph","text":"Voluptate eu fugiat non fugiat nisi aute elit commodo fugiat. Cillum in voluptate cupidatat eu ipsum nulla amet do Lorem eu.","spans":[]}],"TextBottom":[{"type":"paragraph","text":"Proident esse mollit ad sunt magna ullamco.","spans":[]}]},{"TextTop":[{"type":"paragraph","text":"Aliquip nisi magna veniam mollit sunt aliqua elit. Duis non et sunt nostrud.","spans":[]}],"TextBottom":[{"type":"paragraph","text":"Eu duis excepteur id deserunt duis consequat consectetur minim eiusmod id eiusmod. Ea dolor adipisicing voluptate magna proident amet Lorem esse mollit ipsum magna aliqua adipisicing elit.","spans":[]}]}],"primary":{"SectionNumber":"innovate enterprise technologies","SectionTitle":"seize real-time mindshare","Logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=900&h=500&fit=crop"},"CtaText":"seize magnetic schemas","VideoFull":{"link_type":"Web","url":"https://slicemachine.dev"},"VideoLoop":{"link_type":"Web","url":"https://prismic.io"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
