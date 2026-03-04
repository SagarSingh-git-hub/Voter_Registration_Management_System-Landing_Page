;(function(){
  var hasGSAP = typeof window.gsap !== 'undefined'
  var hasST = hasGSAP && typeof window.ScrollTrigger !== 'undefined'
  if(hasGSAP && hasST){
    window.gsap.registerPlugin(window.ScrollTrigger)
    var elems = document.querySelectorAll('.glass-panel, .group, section, .py-24, .py-12')
    elems.forEach(function(el){
      window.gsap.from(el,{scrollTrigger:{trigger:el,start:'top 85%'},y:24,opacity:0,duration:.6,ease:'power2.out'})
    })
  }
  var tiltCards = document.querySelectorAll('.tilt-card')
  tiltCards.forEach(function(card){
    card.addEventListener('mousemove',function(e){
      var rect = card.getBoundingClientRect()
      var x = e.clientX - rect.left
      var y = e.clientY - rect.top
      var rx = ((y/rect.height)-0.5)*6
      var ry = ((x/rect.width)-0.5)*-6
      card.style.transform = 'rotateX('+rx+'deg) rotateY('+ry+'deg)'
    })
    card.addEventListener('mouseleave',function(){
      card.style.transform = 'rotateX(0deg) rotateY(0deg)'
    })
  })
})(); 
