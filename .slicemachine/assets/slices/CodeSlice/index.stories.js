import MyComponent from '../../../../slices/CodeSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/CodeSlice'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"code_slice","items":[],"primary":{"Intro":[{"type":"paragraph","text":"Laboris occaecat ea cillum reprehenderit nostrud aliqua consequat qui cupidatat anim nulla. Reprehenderit eiusmod nulla ex proident tempor nulla non exercitation anim et dolore qui.","spans":[]}],"LocationTitle":"exploit holistic initiatives","Locations":[{"type":"paragraph","text":"Quis quis sit culpa pariatur aliqua non nulla officia ipsum. Eiusmod consectetur ut ut enim esse.","spans":[]}],"RiderTitle":"incentivize web-enabled content","Footer":[{"type":"paragraph","text":"Adipisicing exercitation elit cupidatat nulla sint quis amet est ullamco ipsum cillum nostrud aliqua magna. Officia dolore Lorem qui.","spans":[]}],"ColumnTwo":[{"type":"paragraph","text":"Fugiat amet sunt dolor do nulla aute do amet esse id occaecat. Duis ea ullamco do ut minim irure cillum veniam dolore. Tempor qui ullamco anim commodo ullamco sit exercitation cillum pariatur commodo ipsum.","spans":[]}],"ColumnThree":[{"type":"paragraph","text":"Voluptate ex consectetur consectetur officia. Reprehenderit culpa labore voluptate adipisicing ex reprehenderit elit fugiat esse.","spans":[]}],"ColumnFour":[{"type":"paragraph","text":"Mollit id cillum enim nulla commodo. Ut ex enim cupidatat mollit esse dolore est ipsum. Incididunt culpa nisi consectetur esse adipisicing amet dolor ut tempor qui aliqua consectetur minim reprehenderit.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
