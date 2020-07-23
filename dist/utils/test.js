var varlog = console.log.bind(console);
export default {
    funclog: function (params) {
        console.log(params);
    },
    varlog: varlog
};
