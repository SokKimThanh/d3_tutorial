var map_location_service = function ($window) {
    var msgs = [];
    let notify = (msg) => {
        msgs.push(msg);
        if (msgs.length === 1) {
            $window.alert(msgs.join('\n'));
            msgs = [];
        }
    }
    return {
        notify: function (msg) {
            return notify(msg);
        }
    }
} 