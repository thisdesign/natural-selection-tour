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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"countdown_slice","items":[],"primary":{"SectionNumber":"visualize dot-com e-business","SectionTitle":"syndicate visionary interfaces","title":[{"type":"heading1","text":"Generate granular synergies","spans":[]}],"TargetDate":"2019-04-06T01:08:18.313Z","CtaTitle":"morph impactful architectures","CtaLink":{"link_type":"Web","url":"http://twitter.com"},"FooterContent":[{"type":"paragraph","text":"Duis adipisicing magna sit commodo eiusmod proident incididunt duis quis esse consectetur et deserunt. Minim labore et quis deserunt officia eu qui. Ut non ut magna irure nisi veniam mollit laboris cupidatat id.","spans":[]}],"SidebarSectionNumber":"target end-to-end interfaces","SidebarSectionTitle":"integrate customized web-readiness","SidebarStatus":"archived","SidebarFooterText":[{"type":"paragraph","text":"Consequat anim quis in nostrud sit Lorem. Voluptate amet Lorem quis nulla adipisicing minim dolore dolor commodo dolor adipisicing cupidatat sint velit. Incididunt veniam aliqua irure nisi officia fugiat minim aute laborum reprehenderit dolor.","spans":[]}],"SidebarMedia":{"link_type":"Web","url":"http://twitter.com"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
