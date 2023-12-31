function toggleContent(contentId) {
    const content = document.getElementById(contentId);
    const container = document.getElementById('container');
   
    container.style.width = '500px';
    container.style.height = '550px'; 
    content.style.display = content.style.display === 'none' ? 'block' : 'none';

  }
  function toggleIcon() {
    
  }