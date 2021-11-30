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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"countdown_slice","items":[],"primary":{"SectionNumber":"01","SectionTitle":"Section","title":[{"type":"heading1","text":"Harness cutting-edge partnerships","spans":[]}],"TargetDate":"2017-11-14T17:42:28.192Z","CtaTitle":"More","CtaLink":{"link_type":"Web","url":"http://google.com"},"FooterContent":[{"type":"paragraph","text":"Exercitation ad magna labore ad nostrud labore velit. Exercitation reprehenderit minim tempor culpa commodo non excepteur Lorem eiusmod elit ullamco in elit mollit amet.","spans":[]}],"SidebarSectionNumber":"02","SidebarSectionTitle":"Sidebar","SidebarStatus":"terrain-prep","SidebarFooterText":[{"type":"paragraph","text":"Et sit laborum mollit aliqua quis qui quis mollit nostrud veniam aliquip. Id ex fugiat ea occaecat ut non commodo ut nostrud nisi fugiat ea et duis. Duis id labore minim elit esse.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
