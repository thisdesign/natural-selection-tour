export class CubeSlider {
  constructor(element) {
    this.slider = element
    this.rotation = 0
    this.currentIndex = 0
    this.slideDuration = 1000
    this.rotating = false
    this.slides = this.slider.querySelectorAll('.slide')
    this.currentSlide = this.slides[0]
    this.nextSlide = this.slides[1]

    this.currentSlide.classList.add('current')
    this.nextSlide.classList.add('next')
  }

  slideNext() {
    if (!this.rotating) {
      if (this.currentIndex < this.slides.length - 1) {
        this.handleSlide()
      } else {
        this.currentIndex = -1
        this.handleSlide()
      }
    }
  }

  handleSlide() {
    this.rotating = true
    this.rotation += 90
    this.currentIndex += 1
    this.slider.style.transition = `transform ${this.slideDuration}ms`
    this.slider.style.transform = `rotateY(-${this.rotation}deg)`

    setTimeout(() => {
      this.nextSlide.classList.remove('next')
      this.currentSlide.classList.remove('current')
      this.rotation = 0
      this.slider.style.transition = `none`
      this.slider.style.transform = `rotateY(-${this.rotation}deg)`

      //   Update slides
      this.currentSlide = this.slides[this.currentIndex]
      if (this.slides[this.currentIndex + 1]) {
        this.nextSlide = this.slides[this.currentIndex + 1]
      } else {
        this.nextSlide = this.slides[0]
      }

      this.nextSlide.classList.add('next')
      this.currentSlide.classList.add('current')

      this.rotating = false
    }, this.slideDuration + 10)
  }
}
