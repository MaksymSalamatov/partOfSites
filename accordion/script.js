(function () {
   let foo = s => document.querySelectorAll(s),
       title = foo('.item-title'),
       child = foo('.item-child');

   title.forEach(item => {
      item.addEventListener('click', () => {
         let content = item.nextElementSibling;

         if(content.style.maxHeight) {
            document.querySelectorAll('.item-child').forEach(item => {
               item.style.maxHeight = null;
            })
         } else {
            document.querySelectorAll('.item-child').forEach(item => {
               item.style.maxHeight = null;
            })
            content.style.maxHeight = content.scrollHeight + 'px';
         }
      })
   })

   child.forEach(item => {
      item.addEventListener('click', () => {
         item.style.maxHeight = null;
      })
   })
})()