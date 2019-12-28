export class Todo { // Export class define que essa class é do tipo publica no TS
    /**
     *
     */
    constructor(
        public id: Number,
        public title: String,
        public done: Boolean,
        ) { }
}