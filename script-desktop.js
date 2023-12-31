function toggleContent(contentId) {
    const content = document.getElementById(contentId);
    const container = document.getElementById('container');
   
  

    container.style.width = '610px';
    container.style.height = '600px'; 
    content.style.display = content.style.display === 'none' ? 'block' : 'none';
     
  }
  function toggleIcon() {
    
  }