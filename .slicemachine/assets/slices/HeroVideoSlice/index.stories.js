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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"hero_video_slice","items":[{"TextTop":[{"type":"paragraph","text":"Sunt culpa magna et nulla do sit elit veniam ullamco laboris nostrud. Labore nulla esse est qui sunt. Minim sunt non in minim ut nisi excepteur ipsum ex quis est cillum magna duis.","spans":[]}],"TextBottom":[{"type":"paragraph","text":"Labore elit ea reprehenderit Lorem mollit exercitation irure id velit proident id nisi culpa reprehenderit.","spans":[]}]},{"TextTop":[{"type":"paragraph","text":"Et quis dolore veniam cillum est ad elit cupidatat commodo officia. Laboris dolor occaecat labore voluptate anim mollit. Officia exercitation velit deserunt minim.","spans":[]}],"TextBottom":[{"type":"paragraph","text":"Eiusmod culpa ut veniam consectetur enim aute labore incididunt quis mollit enim aliquip dolor ullamco adipisicing.","spans":[]}]},{"TextTop":[{"type":"paragraph","text":"Ea Lorem ex occaecat id.","spans":[]}],"TextBottom":[{"type":"paragraph","text":"Adipisicing ad ullamco duis eu commodo esse non nisi aute dolore sunt cillum velit. Pariatur exercitation commodo velit ad enim duis eiusmod occaecat labore officia.","spans":[]}]},{"TextTop":[{"type":"paragraph","text":"Nostrud aliqua commodo in eu deserunt aute eiusmod tempor proident aliquip ea magna qui. Incididunt non id sint ex fugiat tempor nisi amet pariatur ad.","spans":[]}],"TextBottom":[{"type":"paragraph","text":"Pariatur proident ullamco Lorem incididunt in elit adipisicing cillum laboris dolor dolore irure cupidatat laboris dolore. Dolor in proident est nisi enim labore pariatur cupidatat.","spans":[]}]}],"primary":{"title":[{"type":"heading1","text":"Streamline cross-media platforms","spans":[]}],"VideoLoop":{"title":"Data Modelling — Create your Custom Types and Slices","author_name":"Prismic","author_url":"https://www.youtube.com/channel/UCJq6AEgtWeZt7ziQ-fLKOeA","type":"video","height":113,"width":200,"version":"1.0","provider_name":"YouTube","provider_url":"https://www.youtube.com/","thumbnail_height":360,"thumbnail_width":480,"thumbnail_url":"https://i.ytimg.com/vi/c-ATzcy6VkI/hqdefault.jpg","html":"<iframe width=\"200\" height=\"113\" src=\"https://www.youtube.com/embed/c-ATzcy6VkI?feature=oembed\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"},"VideoFull":{"url":"https://twitter.com/prismicio/status/1354112310252630016","author_name":"Prismic","author_url":"https://twitter.com/prismicio","html":"<blockquote class=\"twitter-tweet\"><p lang=\"en\" dir=\"ltr\">We&#39;re launching a new <a href=\"https://twitter.com/hashtag/SliceContest?src=hash&amp;ref_src=twsrc%5Etfw\">#SliceContest</a> tomorrow along with Slice Machine upgrades.<br><br>Want to know more? Join us at tomorrow&#39;s Product Meet-up👇<a href=\"https://t.co/prYSypiAvB\">https://t.co/prYSypiAvB</a><br><br>We can&#39;t tell you any further details for now, but here&#39;s a sneak peek at the prizes👀 <a href=\"https://t.co/fV1eoGlEBh\">pic.twitter.com/fV1eoGlEBh</a></p>&mdash; Prismic (@prismicio) <a href=\"https://twitter.com/prismicio/status/1354112310252630016?ref_src=twsrc%5Etfw\">January 26, 2021</a></blockquote>\n<script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>\n","width":550,"height":null,"type":"rich","cache_age":"3153600000","provider_name":"Twitter","provider_url":"http://www.twitter.com/","version":"1.0"},"CtaText":"orchestrate open-source e-tailers"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
