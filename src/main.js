$(document).ready(function() {
    var frame_id = $('#frame_id');
    var covr_id  = $('#coverage_id').parent();
    var doc_id   = $('#doc_id').parent();

    $('#coverage_id').click(function(){
        if(covr_id.hasClass("active")) {
            return;
        }
        covr_id.addClass("active");
        doc_id.removeClass("active");
        frame_id.attr('src', "coverage/coverage.html");
    });

    $('#doc_id').click(function(){
        if($(this).hasClass("active")) {
            return;
        }
        doc_id.addClass("active");
        covr_id.removeClass("active");
        frame_id.attr('src', "docs/index.html");
    });
});
