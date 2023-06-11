$(document).ready(function() {
    var frame_id = $('#frame_id');
    var warning_id = $("#warning_id").parent();
    var covr_id  = $('#coverage_id').parent();
    var doc_id   = $('#doc_id').parent();

    $('#warning_id').click(function(){
        if($(this).hasClass("active")) {
            return;
        }
        warning_id.addClass("active");
        doc_id.removeClass("active");
        covr_id.removeClass("active");
        frame_id.attr('src', "compiler/index.html");
    });

    $('#coverage_id').click(function(){
        if(covr_id.hasClass("active")) {
            return;
        }
        warning_id.removeClass("active");
        covr_id.addClass("active");
        doc_id.removeClass("active");
        frame_id.attr('src', "coverage/index.html");
    });

    $('#doc_id').click(function(){
        if($(this).hasClass("active")) {
            return;
        }
        warning_id.removeClass("active");
        doc_id.addClass("active");
        covr_id.removeClass("active");
        frame_id.attr('src', "docs/index.html");
    });
    $('#warning_id').click();
});
