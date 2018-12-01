
export interface IPhoto {
    description?: string;
    src: string;
}

export interface IPhotoGroup {
    title: string;
    photos: IPhoto[];
}

export interface IPhotoAlbum {
    title: string;
    photoGroups: IPhotoGroup[];
}
