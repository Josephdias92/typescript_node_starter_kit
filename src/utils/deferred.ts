export default class Deferred {
    public resolve: any;
    public reject: any;
    public promise: Promise<{}>;
    constructor() {
        this.resolve = null;
        this.reject = null;
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
        Object.freeze(this);
    }
}
