import MyComponent from '../../../../slices/TwoColumnSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/TwoColumnSlice'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"two_column_slice","items":[],"primary":{"SectionNumber":"streamline viral schemas","SectionTitle":"integrate innovative interfaces","title":[{"type":"heading1","text":"Redefine best-of-breed interfaces","spans":[]}],"description":[{"type":"paragraph","text":"Laborum minim fugiat sunt Lorem nulla mollit ullamco sit cillum ipsum officia. Ea officia aliquip cillum pariatur velit reprehenderit.","spans":[]}],"Content":[{"type":"paragraph","text":"Do voluptate excepteur ad magna anim enim. Veniam ipsum officia laboris pariatur elit esse velit sunt cillum velit officia ad reprehenderit eu.","spans":[]}],"SidebarSectionNumber":"orchestrate interactive supply-chains","SidebarSectionTitle":"architect 24/365 experiences","SidebarStatus":"terrain-prep","SidebarFooterText":[{"type":"paragraph","text":"Elit commodo magna officia duis do. Ipsum deserunt cupidatat eu. Incididunt dolore elit officia ipsum amet ipsum nisi deserunt.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
