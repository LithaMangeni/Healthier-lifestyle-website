// // Navigation functionality
// document.addEventListener('DOMContentLoaded', function() {
//     const navLinks = document.querySelectorAll('.nav-links a');
    
//     // Highlight current page
//     navLinks.forEach(link => {
//         // Normalize paths for comparison
//         const linkPath = new URL(link.href).pathname;
//         const currentPath = window.location.pathname;
        
//         // Check if current path matches link path
//         if (currentPath === linkPath) {
//             link.classList.add('active');
//         }
        
//         // Special case for homepage
//         if (currentPath.endsWith('/') || currentPath.endsWith('index.html')) {
//             const homeLink = document.querySelector('.nav-links a[href="index.html"]');
//             if (homeLink) homeLink.classList.add('active');
//         }
//     });
    
//     // Debugging - log navigation info
//     console.log('Current URL:', window.location.href);
//     console.log('Current Path:', window.location.pathname);
//     navLinks.forEach(link => {
//         console.log(`Link ${link.textContent} points to:`, link.href);
//     });
// });