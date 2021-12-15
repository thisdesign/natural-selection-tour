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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"code_slice","items":[],"primary":{"Intro":[{"type":"paragraph","text":"Esse amet veniam sint nisi culpa do velit velit enim irure. In esse pariatur elit consequat esse ea Lorem.","spans":[]}],"LocationTitle":"productize proactive interfaces","Locations":[{"type":"paragraph","text":"Laborum cillum dolor excepteur dolor qui eiusmod enim enim incididunt dolore.","spans":[]}],"RiderTitle":"target robust e-tailers","Footer":[{"type":"paragraph","text":"Do proident duis amet ipsum nostrud non aliquip.","spans":[]}],"ColumnTwo":[{"type":"paragraph","text":"Commodo ad consequat laboris do ipsum ea labore aute tempor elit. Et ad id fugiat sint nisi consectetur aliquip reprehenderit cupidatat.","spans":[]}],"ColumnThree":[{"type":"paragraph","text":"Laborum id in ex pariatur fugiat labore Lorem cupidatat. Reprehenderit nulla reprehenderit incididunt aliqua magna excepteur excepteur id in dolor aute cillum ex. Voluptate officia voluptate aliquip laborum ipsum consectetur anim ut ea cupidatat.","spans":[]}],"ColumnFour":[{"type":"paragraph","text":"Fugiat laboris mollit ut excepteur ut exercitation mollit ad aute irure id.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
