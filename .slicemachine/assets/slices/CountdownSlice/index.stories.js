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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"countdown_slice","items":[],"primary":{"SectionNumber":"integrate web-enabled action-items","SectionTitle":"grow scalable convergence","title":[{"type":"heading1","text":"Deploy plug-and-play ROI","spans":[]}],"TargetDate":"2021-06-01T20:46:26.287Z","CtaTitle":"transform wireless initiatives","CtaLink":{"link_type":"Web","url":"https://slicemachine.dev"},"FooterContent":[{"type":"paragraph","text":"Reprehenderit nisi ipsum exercitation consectetur ex magna aliqua excepteur laborum officia in eu.","spans":[]}],"SidebarSectionNumber":"empower bricks-and-clicks interfaces","SidebarSectionTitle":"mesh next-generation functionalities","SidebarStatus":"terrain-prep","SidebarFooterText":[{"type":"paragraph","text":"Sunt minim id minim anim dolor do. Sit esse ipsum elit aliqua cillum enim dolore laborum voluptate duis non pariatur excepteur in eu.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
