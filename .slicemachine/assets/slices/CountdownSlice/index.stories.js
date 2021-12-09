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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"countdown_slice","items":[],"primary":{"SectionNumber":"recontextualize best-of-breed eyeballs","SectionTitle":"enable revolutionary experiences","title":[{"type":"heading1","text":"Synergize enterprise action-items","spans":[]}],"TargetDate":"2016-06-08T19:12:38.573Z","CtaTitle":"deliver 24/7 content","CtaLink":{"link_type":"Web","url":"https://prismic.io"},"FooterContent":[{"type":"paragraph","text":"Pariatur et est aute ea ut mollit Lorem mollit mollit amet enim quis eu deserunt et. Sit nulla enim nulla tempor nulla ullamco anim culpa tempor enim culpa ullamco enim do.","spans":[]}],"SidebarSectionNumber":"grow turn-key e-tailers","SidebarSectionTitle":"deliver cross-media web services","SidebarStatus":"terrain-prep","SidebarFooterText":[{"type":"paragraph","text":"Duis ullamco aliqua aliquip fugiat aliqua culpa ullamco duis in ipsum reprehenderit dolore pariatur laborum consectetur.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
