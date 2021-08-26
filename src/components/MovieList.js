import React from 'react';

import Props from './Props';
const moviesArr = [
  {
    id: 1,
    title: "Boruto Next Generation",
    src: "https://fusion.molotov.tv/arts/i/446x588/Ch8SHQoUaV63PYEtrIayOEd87aDKFbDHYa0SA2pwZxgBCh8IARIbChS9K7j1qRO1L26d43hpHij26AHbwBIDcG5n/jpg",
    description: "The life of a litlle one son of Naruto Hokage seventh of Name ",
    movieURL: "https://www.youtube.com/watch?v=klMhg9deh00"

  },
  {
    id: 2,
    title: "Naruto Shuppiden",
    src: "https://media.senscritique.com/media/000018371224/source_big/Naruto_Shippuden_Les_Liens.jpg",
    description: "From Zero to Hero ,A litlle boy without parents will came a Hokage in a country who he had ingonred",
    movieURL: "https://www.youtube.com/watch?v=xCZHhDHZDA8"

  },
  {
    id: 3,
    title: "One Piece",
    src: "https://www.glenat.com/sites/default/files/liseuse/9782344044698/files/assets/common/page-html5-substrates/page0001_1.jpg?uni=6dff7c37585cde0efbb4ecbdf0e2c09e",
    description: "un garçon dont le corps a acquis les propriétés du caoutchouc après avoir mangé par inadvertance un fruit du démon",
    movieURL: "https://www.youtube.com/watch?v=16w3RTqDn_0"

  },
  {
    id: 4,
    title: "One Punch Man",
    src: "https://image.api.playstation.com/vulcan/img/cfn/11307GutLoF0Y7PjVgl-cfyOZa3Vf9Lb8sevsoTxr4GTp4ykgrdEXQRf8lMWZUq_UWtZmAdTVOnZBMZrE9CwZnTfaqQIpj9N.png?w=440",
    description: "Jeune inactif ayant perdu goût à la vie, il décide de devenir un héros après avoir affronté un crabe géant. Dès lors, il s’entraîne pendant trois ans afin de devenir un puissant héros soit dix kilomètres de course à pied, cent pompes, cent abdos, cent squats, chaque jour. Après un entrainement « intensif », Saitama remarque deux changements : il est devenu terriblement fort, au point de vaincre ses ennemis en un coup, et a perdu tous ses cheveux.",
    href: "https://www.youtube.com/watch?v=KsB_xVnf7yM"
  },
  {
    id: 5,
    title: "Attaque des Titans",
    src: "https://i1.wp.com/www.filmspourenfants.net/wp-content/uploads/2018/01/lattaque-des-titans-a.jpg?fit=555%2C743&ssl=1",
    description: "Dans un monde où l’humanité vit entourée d’immenses murs pour se protéger de créatures gigantesques, les Titans. Le récit raconte le combat mené par l’humanité pour reconquérir son territoire, en éclaircissant les mystères liés à l’apparition des Titans, du monde extérieur et des évènements précédant la construction des murs.",
    href: "https://www.youtube.com/watch?v=xm1iR8ZU0VM"
  },
  {
    id: 6,
    title: "Dragon Bull Z",
    src: "https://www.ecranlarge.com/uploads/image/001/150/eg2cakffqh3dvujvj2qyce7ybvk-021.jpg",
    description: "dans des univers multiples où la guerre et l’affrontement entre le bien et le mal sont permanents. L'un des motifs récurrents est la présence de boules de cristal. Si sept boules de cristal sont réunies, n’importe quel vœu peut être exaucé en invoquant le dragon Shenron, émanation du Tout-Puissant. Ces dernières sont la cause des plus grands conflits de la saga, car elles peuvent notamment apporter l’immortalité",
    href: "https://www.youtube.com/watch?v=wuNvVxoWEvM"
  }

]


function MovieList(props) {
  return (
    <div>
      <h2 className='wlmv'> The Movies</h2>
      <div className="Movie">
        <Props movies={moviesArr} />
      </div>
    </div>
  )
}
export default MovieList;
