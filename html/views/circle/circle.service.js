var circle_service = function() {
  function get_content_title(AUTO_LINK) {
    alert(AUTO_LINK);
  }
  return {
    get_content_title: function(AUTO_LINK) {
      return get_content_title(AUTO_LINK);
    }
  };
};
