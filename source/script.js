document.addEventListener('DOMContentLoaded',function(){
      const menuItem = document.querySelectorAll('.menu li')
      const close = document.querySelector('.burger-close')
      const burger = document.querySelector('.burger')
      const openBurger1 = document.querySelectorAll('.nav-item')[0]
      const openBurger2 = document.querySelectorAll('.nav-item')[1]

    
      menuItem.forEach(item=>{
          item.classList.remove('active')
          item.addEventListener('click',function(){
            menuItem.forEach(li=>li.classList.remove('active'))
                  item.classList.add('active')
      })}
          
      )
      

      close.addEventListener('click', function(){
        burger.classList.add('display-none')
        menuItem.forEach(li=>li.classList.remove('active'))
      })

      
      openBurger1.addEventListener('click', function(){
        burger.classList.remove('display-none')
      })

      openBurger2.addEventListener('click', function(){
        burger.classList.remove('display-none')
      })
})