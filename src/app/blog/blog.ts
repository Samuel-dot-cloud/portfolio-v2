import { CustomDate } from "./custom-date";

export class Blog {
    id?: string;
    title?: string;
    author?: string;
    authorId?: string;
    image?: string;
    content?: string;
    published?: CustomDate;
}
