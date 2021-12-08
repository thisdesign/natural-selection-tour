export default {
  computed: {},
  methods: {
    getStatus(statusCode) {
      const status = {
        color: '',
        letter: 'X',
      }
      if (statusCode === 'terrain-prep') {
        status.color = 'yellow'
        status.letter = 'P'
      } else if (statusCode === 'live') {
        status.color = 'blue'
        status.letter = 'L'
      } else if (statusCode === 'archived') {
        status.color = 'smoke-blue'
        status.letter = 'A'
      } else if (statusCode === 'wx-hold') {
        status.color = 'red'
        status.letter = 'H'
      }
      return status
    },
  },
}
