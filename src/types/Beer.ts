export interface Results {
    meta: Meta;
    links: Links;
    data: Beer[];
}

export interface Beer {
    id: number;
    name: string;
    link: string;
    available: boolean;
    category: string;
    brand: string;
}

export interface BeerParams {
    page?: number;
    perPage?: number;
    search?: string;
    isAvailable?: boolean;
}

export interface Meta {
    currentPage: number;
    from: number;
    lastPage: number;
    path: string;
    perPage: number;
    to: number;
    total: number;
}

export interface Links {
    first: string;
    last: string;
    prev?: string;
    next: string;
}