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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"countdown_slice","items":[],"primary":{"SectionNumber":"iterate turn-key technologies","SectionTitle":"optimize scalable initiatives","title":[{"type":"heading1","text":"Incubate one-to-one niches","spans":[]}],"TargetDate":"2020-10-07T00:13:17.819Z","CtaTitle":"drive robust platforms","CtaLink":{"link_type":"Web","url":"http://twitter.com"},"FooterContent":[{"type":"paragraph","text":"Minim aliqua excepteur Lorem minim proident do sit veniam aliquip fugiat reprehenderit aliqua et.","spans":[]}],"SidebarSectionNumber":"utilize B2C infrastructures","SidebarSectionTitle":"redefine dot-com channels","SidebarStatus":"video-loop","SidebarFooterText":[{"type":"paragraph","text":"Quis duis et sint do. Proident duis laboris adipisicing.","spans":[]}],"SidebarMedia":{"link_type":"Web","url":"https://prismic.io"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
