
import { IPhotoGroup, IPhotoAlbum } from './photo-albums.types';
import { PhotoAlbum } from './photo-album.model';

export const photoAlbumByKey = (key: string): IPhotoAlbum => {
  return photoAlbums.find((album) => {
    return album.key.trim().toLowerCase() === key.trim().toLowerCase();
  });
}

export const photoAlbums: IPhotoAlbum[] = [
  {
    title: 'Riding the SAM Shortline Train',
    key: 'sam-shortline',
    coverPhotoSrc: 'sam-shortline-candler-grandy-papa-daddy-with-train-1.jpg',
    photoGroups: [
      {
        title: 'Cordele to Plains, GA',
        photos: [
          { src: 'sam-shortline-candler-grandy-papa-daddy-with-train-1.jpg' },
          { src: 'sam-shortline-candler-pointing-1.jpg' },
          { src: 'sam-shortline-candler-pointing-2.jpg' },
          { src: 'sam-shortline-grandy-1.jpg' },
          { src: 'sam-shortline-candler-grandy-1.jpg' },
          { src: 'sam-shortline-candler-grandy-2.jpg' },
          { src: 'sam-shortline-candler-grandy-daddy-1.jpg' },
          { src: 'sam-shortline-candler-grandy-daddy-2.jpg' },
          { src: 'sam-shortline-freight-cars-1.jpg' },
          { src: 'sam-shortline-freight-cars-2.jpg' },
          { src: 'sam-shortline-papa-1.jpg' },
          { src: 'sam-shortline-papa-2.jpg' },
          { src: 'sam-shortline-candler-papa-1.jpg' },
          { src: 'sam-shortline-candler-papa-candy-cane-bump.jpg' },
          { src: 'sam-shortline-candler-papa-grandy-walking.jpg' },
          { src: 'sam-shortline-candler-grandy-papa-railroad-crossing.jpg' },
          { src: 'sam-shortline-candler-grandy-papa-with-train-1.jpg' },
          { src: 'sam-shortline-candler-grandy-papa-with-train-2.jpg' },
          { src: 'sam-shortline-engine-in-plains.jpg' },
          { src: 'sam-shortline-candler-papa-grandy-jimmy-carter-peanut.jpg' },
          { src: 'sam-shortline-candler-desk-1.jpg' },
          { src: 'sam-shortline-candler-desk-2.jpg' },
          { src: 'sam-shortline-candler-aisle-1.jpg' },
          { src: 'sam-shortline-candler-aisle-2.jpg' },
          { src: 'sam-shortline-candler-hands-out.jpg' },
          { src: 'sam-shortline-candler-map-up.jpg' },
          { src: 'sam-shortline-candler-map-down.jpg' },
          { src: 'sam-shortline-candler-conductor.jpg' },
          { src: 'sam-shortline-candler-ruler-2.jpg' },
          { src: 'sam-shortline-candler-ruler-3.jpg' },
          { src: 'sam-shortline-candler-ruler-4.jpg' },
          { src: 'sam-shortline-candler-sticker-on-mouth.jpg' },
          { src: 'sam-shortline-candler-sticker-on-grandy-mouth-1.jpg' },
          { src: 'sam-shortline-candler-sticker-on-grandy-mouth-2.jpg' },
          { src: 'sam-shortline-candler-daddy-looking-out-window.jpg' },
          { src: 'sam-shortline-candler-window-staring-away.jpg' },
          { src: 'sam-shortline-candler-window-funny-face.jpg' },
          { src: 'sam-shortline-freight-train-broken.jpg' },
          { src: 'sam-shortline-candler-fist-pump.jpg' },
        ]
      },
    ]
  },
  {
    title: 'Thanksgiving at Grandy\'s Hosue',
    key: 'thanksgiving-2018',
    coverPhotoSrc: 'thanksgiving-2018-frank-papa-bev-1.jpg',
    photoGroups: [
      {
        title: 'Thanksgiving 2018:',
        photos: [
          { src: 'thanksgiving-2018-alex-1.jpg' },
          { src: 'thanksgiving-2018-alex-2.jpg' },
          { src: 'thanksgiving-2018-bev-hannah-1.jpg' },
          { src: 'thanksgiving-2018-bev-sam-1.jpg' },
          { src: 'thanksgiving-2018-bev.jpg' },
          { src: 'thanksgiving-2018-caleb-hannah-1.jpg' },
          { src: 'thanksgiving-2018-caleb-hannah-alex-1.jpg' },
          { src: 'thanksgiving-2018-caleb-hannah-alex-2.jpg' },
          { src: 'thanksgiving-2018-candler-1.jpg' },
          { src: 'thanksgiving-2018-candler-2.jpg' },
          { src: 'thanksgiving-2018-candler-3.jpg' },
          { src: 'thanksgiving-2018-candler-alex-daddy-grandy-1.jpg' },
          { src: 'thanksgiving-2018-candler-alex-hannah-tickling-alex.jpg' },
          { src: 'thanksgiving-2018-candler-alex-hannah-tickling-candler.jpg' },
          { src: 'thanksgiving-2018-candler-alex.jpg' },
          { src: 'thanksgiving-2018-candler-grandy-papa-1.jpg' },
          { src: 'thanksgiving-2018-candler-grandy-papa-2.jpg' },
          { src: 'thanksgiving-2018-candler-papa-ted-1.jpg' },
          { src: 'thanksgiving-2018-candler-papa-ted-2.jpg' },
          { src: 'thanksgiving-2018-dan-brandy-1.jpg' },
          { src: 'thanksgiving-2018-dan-brandy-2.jpg' },
          { src: 'thanksgiving-2018-frank-papa-bev-1.jpg' },
          { src: 'thanksgiving-2018-grandy-bev-1.jpg' },
          { src: 'thanksgiving-2018-grandy-bev-2.jpg' },
          { src: 'thanksgiving-2018-grandy-candler-alex.jpg' },
          { src: 'thanksgiving-2018-joseph-alex-1.jpg' },
          { src: 'thanksgiving-2018-mom-brandy.jpg' },
          { src: 'thanksgiving-2018-papa-ted-1.jpg' },
          { src: 'thanksgiving-2018-sam-hannah-1.jpg' },
          { src: 'thanksgiving-2018-sam-jennifer-caleb-hannah-1.jpg' },
          { src: 'thanksgiving-2018-sam-jennifer-caleb-hannah-2.jpg' },
          { src: 'thanksgiving-2018-sam-jennifer.jpg' },
        ]
      },
      
    ]
  },
  {
    title: 'Candler Playing Around',
    key: 'candler',
    coverPhotoSrc: 'candler-bathtub-trains.jpg',
    photoGroups: [
      {
        title: 'Candler:',
        photos: [
          { src: 'candler-orange-at-grandys.jpg' },
          { src: 'candler-umbrella-deer.jpg' },
          { src: 'candler-and-josh.jpg' },
          { src: 'candler-bridge-fist-up.jpg' },
          { src: 'candler-bridge-pose-1.jpg' },
          { src: 'candler-bridge-pose-2.jpg' },
          { src: 'candler-bridge-pose-3.jpg' },
          { src: 'brownie-monster.jpg' },
          { src: 'candler-bathtub-trains.jpg' },
          { src: 'candler-glasses-laughing.jpg' },
          { src: 'candler-piano-standing.jpg' },
          { src: 'candler-piano-sitting-1.jpg' },
          { src: 'candler-piano-snoopy.jpg' },
          { src: 'candler-playing-trains-1.jpg' },
          { src: 'candler-trains-knex-bridge.jpg' },
          { src: 'candler-trains-on-floor.jpg' },
          { src: 'candler-train-sylvester-1.jpg' },
          { src: 'candler-train-sylvester-2.jpg' },
          { src: 'candler-golf-range.jpg' },
          { src: 'candler-playing-trains-1.jpg' },
          { src: 'candler-snoopy-breakfast-casserole.jpg' },
        ]
      },
    ] 
  }, 
  {
    title: 'Grandy and Papa!',
    key: 'grandy-papa',
    coverPhotoSrc: 'grandy-and-papa.jpg',
    photoGroups: [
      {
        title: 'Grandy and Papa:',
        photos: [
          { src: 'candler-grandy-blowing-bubbles.jpg' },
          { src: 'candler-grandy-train-marietta.jpg' },
          { src: 'candler-grandy-cracker-barrel-1.jpg' },
          { src: 'candler-grandy-cracker-barrel-2.jpg' },
          { src: 'candler-grandy-swing.jpg' },
          { src: 'candler-papa-train-agrirama.jpg' },
          { src: 'candler-papa-train-marietta.jpg' },
          { src: 'grandy-and-papa.jpg' },
          { src: 'candler-grandy-papas-house.jpg' },
          { src: 'candler-papa-playing.jpg' },
          { src: 'christmas-2017-candler-grandly-papa.jpg' },
        ]
      },
    ] 
  },
  {
    title: 'With Amy & Family',
    key: 'amy-and-family',
    coverPhotoSrc: 'eva-tina-ngan-thanh.jpg',
    photoGroups: [
      {
        title: 'Amy & Family:',
        photos: [
          { src: 'amy-xinh-dep-1.jpg' },
          { src: 'amy-xinh-dep-2.jpg' },
          { src: 'candler-and-ngan.jpg' },
          { src: 'candler-ngan-thanh-ice-cream.jpg' },
          { src: 'eva-ngan-amy-candler-uncle.jpg' },
          { src: 'candler-ngan-thanh-pool.jpg' },
          { src: 'eva-and-uncle.jpg' },
          { src: 'eva-tina-ngan-thanh.jpg' },
          { src: 'eva-and-grandfather-1.jpg' },
          { src: 'eva-and-grandfather-2.jpg' },
        ]
      },
    ] 
  },
  {
    title: 'Random Pictures',
    key: 'random',
    coverPhotoSrc: 'eclipse-2017-2.jpg',
    photoGroups: [
      {
        title: 'Random:',
        photos: [
          { src: 'papa-ted-eds-truck-stop.jpg' },
          { src: 'train-marietta.jpg' },
          { description: 'Eclipse 2017', src: 'eclipse-2017-2.jpg' },
          { description: 'Eclipse 2017', src: 'eclipse-2017-1.jpg' },
        ]
      },
    ] 
  }
];
