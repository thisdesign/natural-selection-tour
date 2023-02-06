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
      mock: {"variation":"default-slice","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"SectionNumber":"write","SectionTitle":"origin","title":[{"type":"heading1","text":"Proper","spans":[]}],"TitleImage":{"dimensions":{"width":3810,"height":5715},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1587614295999-6c1c13675117"},"ImageFullWidth":true,"description":[{"type":"paragraph","text":"Cupidatat aliqua amet culpa Lorem sit anim nostrud elit.","spans":[]}],"Content":[{"type":"paragraph","text":"Sint irure eu sint adipisicing dolore nulla commodo eiusmod culpa. Velit velit laborum commodo ad ea ipsum occaecat.","spans":[]}],"SidebarSectionNumber":"expect","SidebarSectionTitle":"meat","SidebarStatus":"terrain-prep","SidebarStatusAvailable":false,"SidebarContent":[{"type":"paragraph","text":"Eiusmod nostrud mollit laboris mollit ut labore quis exercitation quis cillum ex adipisicing mollit. Adipisicing qui enim cillum esse in ad nostrud sunt amet nisi voluptate aliquip non exercitation.","spans":[]}],"SidebarCTA":"bowl","SidebarCTALink":{"link_type":"Web","url":"https://prismic.io"},"SidebarFooterText":[{"type":"paragraph","text":"Laborum incididunt velit esse pariatur duis. Ut deserunt pariatur ex et veniam ipsum.","spans":[]}]},"id":"_DefaultSlice","slice_type":"two_column_slice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = ''
