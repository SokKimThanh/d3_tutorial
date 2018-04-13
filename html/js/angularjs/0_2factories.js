
var d3service = function () {
    function get_content_title(AUTO_LINK) {
        alert(AUTO_LINK);
    }
    return {
        get_content_title: function (AUTO_LINK) {
            return get_content_title(AUTO_LINK)
        }
    }
}
d3app.service("d3service", d3service)