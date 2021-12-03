import MyComponent from '../../../../components/Rider';

export default {
  title: 'components/Rider'
}

export const _DefaultSlice = () => ({
  components: {
    MyComponent,
  },
  data() {
    return {
      mock: {
        "id": "YZfz2REAACIAR63l",
        "uid": null,
        "url": null,
        "type": "rider",
        "href": "https://naturalselectiontour.cdn.prismic.io/api/v2/documents/search?ref=YakZAhMAACIAygdm&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22YZfz2REAACIAR63l%22%29+%5D%5D",
        "tags": [],
        "first_publication_date": "2021-11-19T19:38:54+0000",
        "last_publication_date": "2021-12-02T19:05:38+0000",
        "slugs": ["austen-sweetin"],
        "linked_documents": [],
        "lang": "en-us",
        "alternate_languages": [],
        "data": {
          "Name": [{
            "type": "paragraph",
            "text": "AUSTEN SWEETIN",
            "spans": []
          }],
          "Location": [{
            "type": "paragraph",
            "text": "Glacier, WA\n48.8901° N, 121.9457° W",
            "spans": []
          }],
          "InformationLeft": [{
            "type": "paragraph",
            "text": "@austensweetin\nMtn: Alpental\nStance: Regular\nAppearance: 2nd",
            "spans": []
          }],
          "InformationRight": [{
            "type": "paragraph",
            "text": "Quiksilver\nCoal Headwear\nLibtech\nNow",
            "spans": []
          }],
          "Bio": [{
            "type": "paragraph",
            "text": "Austen Sweetin is a nucleus of energy, and it’s evident in his riding. Never one to speed check, Austen’s explosiveness is seen every time he leaves the lip or hacks into a pow turn. It’s this unique approach that has made him one of the best all-mountain freestyle snowboarders on planet earth, and exactly why he was chosen to be a part of The Natural Selection Tour this winter. Austen is a northwest local and in his early years, he stood out as an incredible park rider at annual events like SNOWBOARDER Magazine’s Superpark and The Launch, and that caught the attention of the crew at Forum Snowboards, who signed Austen to a contract. Once he had that backing, he skyrocketed onto the international scene. But the backcountry was calling and Austen set off into the unknown, emerging with some of the most psycho clips every winter.",
            "spans": []
          }],
          "Flag": {
            "dimensions": {
              "width": 47,
              "height": 47
            },
            "alt": "US Flag",
            "copyright": null,
            "url": "https://naturalselectiontour.cdn.prismic.io/naturalselectiontour/d9203738-3549-4710-a1cf-73558a15bd19_Flag.svg"
          },
          "Rider": {
            "dimensions": {
              "width": 500,
              "height": 500
            },
            "alt": null,
            "copyright": null,
            "url": "https://images.prismic.io/naturalselectiontour/21913f51-703c-42bb-a93d-7f15adb40864_AustenSweetin_RiderHeadshot_NaturalSelection_500x500.jpg?auto=compress,format"
          },
          "Video": {},
          "Logos": [{
            "Link": {
              "link_type": "Web",
              "url": "https://google.com"
            },
            "Image": {
              "dimensions": {
                "width": 97,
                "height": 78
              },
              "alt": null,
              "copyright": null,
              "url": "https://images.prismic.io/naturalselectiontour/383e3de0-53d4-49fb-b871-8e64ec64e6cd_Union.png?auto=compress,format"
            }
          }]
        }
      },
    }
  },
  template: '<MyComponent :rider="mock" />'
})
_DefaultSlice.storyName = 'Default slice'


