export interface CreateAvaliationDTO {
    userId: string;
    bookId: string;
    description: AvaliationDescription;
}

export enum AvaliationDescription {
    EXCELLENT = "EXCELLENT",
    GOOD = "GOOD",
    NORMAL = "NORMAL",
    BAD = "BAD"
}
