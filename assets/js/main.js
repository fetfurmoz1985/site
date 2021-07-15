jQuery(document).ready(function($) {
    $('a').click(function() {
      if ($(this).attr('href') == '#') {
        return false;
      }
    });
    $('#myModal').on('shown.bs.modal', function () {
      //#myInput - id элемента, которому необходимо установить фокус
      $('#myInput').focus();
    })
});