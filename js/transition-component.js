AFRAME.registerComponent('scene-transition', {
    schema: {type: 'string'},

    init: function () {
        var url = this.data;
        this.el.addEventListener('click', function (evt) {
            window.location.href = url;
        });
    }
});