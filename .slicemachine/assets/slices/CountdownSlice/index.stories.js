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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"countdown_slice","items":[],"primary":{"SectionNumber":"01","SectionTitle":"Section","title":[{"type":"heading1","text":"Deliver seamless technologies","spans":[]}],"TargetDate":"2022-01-20T23:04:44.000Z","CtaTitle":"More","CtaLink":{"link_type":"Web","url":"https://slicemachine.dev"},"FooterContent":[{"type":"paragraph","text":"Duis incididunt ad cupidatat.","spans":[]}],"SidebarSectionNumber":"02","SidebarSectionTitle":"Sidebar","SidebarStatus":"terrain-prep","SidebarFooterText":[{"type":"paragraph","text":"Reprehenderit minim voluptate ullamco est commodo amet aliqua qui. Nostrud consequat laborum consectetur proident et adipisicing consequat.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'