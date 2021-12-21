export class CubeSlider {
  constructor(element) {
    this.slider = element
    this.rotation = 0
    this.currentIndex = 0
    this.slideDuration = 1000
    this.rotating = false
    this.slides = this.slider.querySelectorAll('.slide')
    if (this.slides.length < 2) return
    this.currentSlide = this.slides[0]
    this.nextSlide = this.slides[1]
    this.prevSlide = this.slides[this.slides.length - 1]

    this.currentSlide.classList.add('current')
    this.nextSlide.classList.add('next')
    this.prevSlide.classList.add('previous')
    this.slides.forEach((slide) => {
      slide.style.transition = `transform ${this.slideDuration}ms, width ${this.slideDuration}ms`
    })
  }

  slideNext() {
    if (!this.rotating) {
      if (this.currentIndex < this.slides.length - 1) {
        this.currentIndex += 1
        this.handleSlide()
      } else {
        this.currentIndex = 0
        this.handleSlide()
      }
    }
  }

  handleSlide() {
    this.rotating = true
    // this.rotation -= 90
    // this.slider.style.transition = `transform ${this.slideDuration}ms`
    // this.slider.style.transform = `rotateY(${this.rotation}deg)`
    this.nextSlide.classList.remove('next')
    this.currentSlide.classList.remove('current')
    this.prevSlide.classList.remove('previous')
    this.rotation = 0
    this.slider.style.transition = `none`
    this.slider.style.transform = `rotateY(-${this.rotation}deg)`

    //   Update slides
    this.currentSlide = this.slides[this.currentIndex]
    this.nextSlide = this.slides[this.currentIndex + 1] ?? this.slides[0]
    this.prevSlide =
      this.slides[this.currentIndex - 1] ?? this.slides[this.slides.length - 1]

    this.nextSlide.classList.add('next')
    this.currentSlide.classList.add('current')
    this.prevSlide.classList.add('previous')
    setTimeout(() => {
      this.rotating = false
    }, this.slideDuration)
  }

  slideTo(index) {
    if (this.currentIndex !== index) {
      this.currentIndex = index
      this.handleSlide()
    }
  }
}
