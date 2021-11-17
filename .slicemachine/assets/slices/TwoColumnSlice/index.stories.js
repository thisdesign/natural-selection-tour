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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"two_column_slice","items":[],"primary":{"SectionNumber":"synthesize distributed architectures","SectionTitle":"enable back-end platforms","title":[{"type":"heading1","text":"Benchmark efficient niches","spans":[]}],"description":[{"type":"paragraph","text":"Nostrud qui sint elit nostrud sunt cillum ea. Pariatur nulla voluptate aliquip laboris amet sint dolore reprehenderit elit tempor officia qui. Enim aliqua eu enim enim minim dolor consequat eu elit id culpa pariatur.","spans":[]}],"Content":[{"type":"paragraph","text":"Aliqua aute eiusmod ipsum amet magna laborum nostrud qui. Ea laboris magna consequat ea labore amet anim ut qui duis et occaecat. Occaecat adipisicing non irure quis sunt esse.","spans":[]}],"SidebarSectionNumber":"redefine integrated ROI","SidebarSectionTitle":"benchmark seamless networks","SidebarColor":"#b7abab","SidebarTitle":[{"type":"paragraph","text":"Officia Lorem eiusmod do excepteur quis nisi tempor minim pariatur nulla.","spans":[]}],"SidebarFeaturedLetter":"leverage B2C web services","SidebarFooterText":[{"type":"paragraph","text":"Cupidatat ipsum id minim labore ad irure enim. Voluptate ea dolore ut id excepteur nisi nulla culpa sunt adipisicing aliquip.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'

export const _TwoColumnCountdown = () => ({
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
      mock: {"variation":"twoColumnCountdown","name":"Two Column - Countdown","slice_type":"two_column_slice","items":[],"primary":{"SectionNumber":"enable virtual blockchains","SectionTitle":"deliver collaborative vortals","Content":[{"type":"paragraph","text":"Enim laboris eiusmod ipsum nisi cupidatat veniam aliquip. Culpa eu nulla proident nisi minim magna nulla.","spans":[]}],"Countdown":"2016-02-02T08:13:53.175Z","CtaLink":{"link_type":"Web","url":"https://prismic.io"},"CtaTitle":"enable out-of-the-box partnerships","FooterTitle":[{"type":"paragraph","text":"Qui laboris minim amet culpa sint sint mollit eiusmod. Quis occaecat ea ut elit sint sit esse tempor irure nostrud fugiat commodo irure id amet.","spans":[]}],"FooterCopy":[{"type":"paragraph","text":"Ullamco nostrud incididunt tempor amet in nulla eiusmod nostrud nulla in laboris. Quis est cillum cillum dolore sint magna laboris ullamco voluptate proident.","spans":[]}],"SidebarSectionNumber":"leverage strategic interfaces","SidebarSectionTitle":"visualize sticky networks","SidebarColor":"#db6b32","SidebarTitle":[{"type":"paragraph","text":"Enim aliquip deserunt veniam laborum est. Anim veniam velit mollit nulla ut. Cillum in enim proident dolor ullamco voluptate labore exercitation magna cillum voluptate incididunt veniam sit.","spans":[]}],"SidebarFeaturedLetter":"unleash cross-platform vortals","SidebarFooterText":[{"type":"paragraph","text":"Mollit amet qui anim eiusmod velit.","spans":[]}]},"id":"_TwoColumnCountdown"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_TwoColumnCountdown.storyName = 'Two Column - Countdown'
