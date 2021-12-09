import MyComponent from '../../../../slices/ImageSliderSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/ImageSliderSlice'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"image_slider_slice","items":[{"Image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587905069134-008460d7a636?w=900&h=500&fit=crop"}},{"Image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=900&h=500&fit=crop"}}],"primary":{"SectionNumber":"drive value-added methodologies","SectionTitle":"iterate enterprise initiatives"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
