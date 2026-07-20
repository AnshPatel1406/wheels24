    </div> <!-- End of admin-main -->
    
    <script>
        // Set active class on sidebar based on current URL
        document.addEventListener("DOMContentLoaded", function() {
            const currentPath = window.location.pathname.split('/').pop();
            const navLinks = document.querySelectorAll('.admin-sidebar-nav a');
            navLinks.forEach(link => {
                if(link.getAttribute('href') === currentPath) {
                    link.classList.add('active');
                }
            });
        });
    </script>
</body>
</html>
