function solve() {
   let input = document.getElementById('searchField');
   let btn = document.getElementById('searchBtn');
   let searchData = document.querySelectorAll('tbody tr');

   btn.addEventListener('click', (x) => {
      for (let i = 0; i < searchData.length; i++) {
         let data = searchData[i].getElementsByTagName('td');
         
         if (data[0].textContent.includes(input.value)) {
            searchData[i].className = "select";
         } else if (data[1].textContent.includes(input.value)) {
            searchData[i].className = "select";
         } else if (data[2].textContent.includes(input.value)) {
            searchData[i].className = "select";
         };  
      }
   });

   input.addEventListener('click', (x) => {
      input.value = '';
      
      for (let i = 0; i < searchData.length; i++) {
         searchData[i].classList.remove("select");
      }
   });
}