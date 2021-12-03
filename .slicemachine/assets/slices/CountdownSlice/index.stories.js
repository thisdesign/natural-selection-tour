import MyComponent from '../../../../slices/CountdownSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/CountdownSlice'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"countdown_slice","items":[],"primary":{"SectionNumber":"e-enable turn-key experiences","SectionTitle":"recontextualize vertical models","title":[{"type":"heading1","text":"Repurpose revolutionary experiences","spans":[]}],"TargetDate":"2018-12-16T12:32:50.814Z","CtaTitle":"incentivize wireless methodologies","CtaLink":{"link_type":"Web","url":"http://twitter.com"},"FooterContent":[{"type":"paragraph","text":"Eu non aute culpa consequat id laborum eu excepteur culpa excepteur elit.","spans":[]}],"SidebarSectionNumber":"synergize global systems","SidebarSectionTitle":"engineer ubiquitous experiences","SidebarStatus":"terrain-prep","SidebarFooterText":[{"type":"paragraph","text":"Id amet et mollit mollit est nulla culpa ipsum consequat adipisicing. Elit adipisicing Lorem deserunt excepteur culpa eu anim enim aliquip sint sit aliqua.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
