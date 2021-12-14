import MyComponent from '../../../../slices/HeroVideoSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/HeroVideoSlice'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"hero_video_slice","items":[{"TextTop":[{"type":"paragraph","text":"Aute id enim duis exercitation commodo anim amet cupidatat nisi consequat aliqua. Quis anim aliqua cillum cupidatat aute ullamco consequat esse proident fugiat. Aliqua sunt do duis duis sint est duis veniam.","spans":[]}],"TextBottom":[{"type":"paragraph","text":"Ex quis exercitation et ea consectetur aliquip fugiat exercitation. Sint ex do ut tempor Lorem velit ullamco mollit magna.","spans":[]}]},{"TextTop":[{"type":"paragraph","text":"Consequat ea eiusmod quis minim et laborum dolor est aliqua.","spans":[]}],"TextBottom":[{"type":"paragraph","text":"Proident proident velit minim minim commodo aliqua fugiat veniam cillum. Culpa aliqua fugiat velit magna sunt laborum non ipsum et dolore enim nulla magna. Do sint Lorem ad sint minim reprehenderit.","spans":[]}]},{"TextTop":[{"type":"paragraph","text":"Lorem ad mollit nulla aute elit eu dolore adipisicing pariatur. Proident nisi non consectetur duis cupidatat proident sint fugiat aliqua sit voluptate. Consequat anim est ex id aliquip non.","spans":[]}],"TextBottom":[{"type":"paragraph","text":"Magna laboris veniam mollit aliqua quis cillum nostrud ut mollit aute eu.","spans":[]}]},{"TextTop":[{"type":"paragraph","text":"Mollit quis dolor ullamco commodo proident irure minim commodo. Aute amet velit exercitation. Est nostrud adipisicing commodo ex in fugiat duis.","spans":[]}],"TextBottom":[{"type":"paragraph","text":"Deserunt sunt duis incididunt voluptate Lorem culpa enim nulla eu sint irure aute velit labore magna. Ex enim magna ullamco anim elit sint laboris quis culpa proident fugiat enim. Eiusmod aliquip aliqua consectetur veniam occaecat Lorem non consectetur voluptate sit ullamco.","spans":[]}]}],"primary":{"SectionNumber":"disintermediate global users","SectionTitle":"synergize revolutionary e-tailers","Logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1560762484-813fc97650a0?w=900&h=500&fit=crop"},"CtaText":"envisioneer B2C users","VideoPoster":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1606248897732-2c5ffe759c04?w=900&h=500&fit=crop"},"VideoFull":{"link_type":"Web","url":"http://twitter.com"},"VideoLoop":{"link_type":"Web","url":"http://google.com"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
