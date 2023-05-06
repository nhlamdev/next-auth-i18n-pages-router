export interface ISeries {
    create_by: string;
    created_at: string;
    summary: string;
    title: string;
    updated_at: string;
    _id: string;
}

export interface ITag {
    create_by: string;
    created_at: string;
    name: string;
    _id: string;
}

export interface IContent {
    body: string;
    complete: boolean;
    create_by: string;
    created_at: string;
    delete_at: string | null;
    image: string | null;
    series: ISeries;
    summary: string;
    tags: ITag[];
    title: string;
    updated_at: string;
    _id: string;
}
