const varlog = console.log.bind(console);
export default {
    funclog: (params: any): void => {
        console.log(params);
    },
    varlog
};
