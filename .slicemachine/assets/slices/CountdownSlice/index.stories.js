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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"countdown_slice","items":[],"primary":{"SectionNumber":"transition holistic niches","SectionTitle":"redefine interactive architectures","title":[{"type":"heading1","text":"Utilize sticky e-business","spans":[]}],"TargetDate":"2012-12-22T15:45:48.338Z","CtaTitle":"grow dynamic schemas","CtaLink":{"link_type":"Web","url":"http://google.com"},"FooterContent":[{"type":"paragraph","text":"Aliquip aliqua do est elit velit eu tempor esse. Qui est dolor velit dolore magna dolore culpa sit deserunt eu ea sit. Nisi elit sunt voluptate labore elit exercitation in occaecat.","spans":[]}],"SidebarSectionNumber":"disintermediate value-added e-tailers","SidebarSectionTitle":"evolve back-end platforms","SidebarStatus":"terrain-prep","SidebarFooterText":[{"type":"paragraph","text":"Do anim nostrud amet cupidatat proident enim ex nisi. Esse esse ex aliqua dolore Lorem minim eu reprehenderit ex esse. Magna ad cillum velit.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
