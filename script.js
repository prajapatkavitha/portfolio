document.querySelector('nav').addE 
ventListener('click', function(event) 
{

    // Get the target element 
    var target = event.target;
    
    // Check if the target is a navigation link 
    if (target.tagName === 'A') {
    
    // Prevent default link behavior 
    event.preventDefault();
    
    // Get the href attribute of the link
     var href = target.getAttribute('href');
    
    // Scroll to the corresponding section 
    document.querySelector(href).scrollIntoView({behavior: 'smooth' }); } });
    
    // Add event listener to project images
     document.querySelectorAll('.project img').forEach(function(image) { image.addEventListener('click', function() {
    
    // Get the project container
     var project = this.parentNode;
    
    // Toggle the project's description
     project.querySelector('p').classList.toggle('hid den'); }); });
    