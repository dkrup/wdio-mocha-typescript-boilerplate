const url = require('url');

export class ParamsPetDTO {
    public status: string;

    constructor(status: string) {
        Object.assign(this, status);
    }
}
