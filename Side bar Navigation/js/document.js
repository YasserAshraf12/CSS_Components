$(document).ready(()=>{
    $(function() {
        $('.toggleBtn').on('click', function() {
            $('.sidebar, .toggleBtn').toggleClass('active');
        });
    });
});