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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"countdown_slice","items":[],"primary":{"SectionNumber":"streamline global networks","SectionTitle":"engage customized deliverables","title":[{"type":"heading1","text":"Monetize extensible action-items","spans":[]}],"TargetDate":"2017-04-20T23:07:05.618Z","CtaTitle":"repurpose web-enabled models","CtaLink":{"link_type":"Web","url":"https://slicemachine.dev"},"FooterContent":[{"type":"paragraph","text":"Voluptate id mollit esse incididunt anim sunt nulla voluptate veniam.","spans":[]}],"SidebarSectionNumber":"reinvent dot-com metrics","SidebarSectionTitle":"leverage real-time platforms","SidebarStatus":"terrain-prep","SidebarFooterText":[{"type":"paragraph","text":"Voluptate excepteur officia labore. Dolor quis laboris ipsum exercitation.","spans":[]}],"SidebarMedia":{"link_type":"Web","url":"https://prismic.io"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
