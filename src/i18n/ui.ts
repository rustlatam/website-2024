export const languages = {
    en: 'English',
    es: 'Spanish',
  };
  
  export const defaultLang = 'en';

  
  export const ui = {
    en: {
    'keynote.bodil.abstract': 'Bodil is a compulsive conference speaker in the fields of functional programming, web technologies and Soviet space dogs, and helps organise multiple developer conferences in the UK and Scandinavia. She’s been everywhere from JavaScript to Haskell and has recently been spending quality time with Rust. Most of the time she’s not even upset that it doesn’t have higher kinded types yet.',
      'keynote.fede.abstract': 'This talk is going to be a tasty mix of several things, say, a Rustacean Rhapsody. Software that is not a passing fad: applications from 20 years ago, operating systems from 30 years ago, languages from 40 years ago. The Rewrite It In Rust meme. Where is Latin America in all of this? Technological colonialism and decolonization. What to do with that mountain of incomprehensible software. Perspectives from a guy in his forties for people in their 20s. An anecdote or two or seven. Why Rust is different. This talk is in Spanish.'
    },
    es: {
    'keynote.bodil.abstract': 'Bodil es una oradora compulsiva en los campos de programación funcional, tecnologías web y perros espaciales soviéticos, ayuda a organizar múltiples conferencias de desarrolladores en el Reino Unido y Escandinavia. Ha estado en todas partes, desde JavaScript hasta Haskell, y recientemente ha estado pasando tiempo de calidad con Rust. La mayoría de las veces ella ni siquiera se molesta porque todavía no tiene Higher Kinded Types.',
    'keynote.fede.abstract': 'Esta charla va a ser un sabroso revoltijo de varias cosas, digamos, una Rapsodia Rustácea. El software que no pasa de moda: aplicaciones de hace 20 años, sistema operativo de hace 30, lenguajes de hace 40. El meme de Reescríbelo En Rust. ¿Dónde está Latinoamérica en todo esto? Colonialismo tecnológico y descolonización. Qué hacemos con esa montaña de software incomprensible. Perspectivas de un cuarentón para la gente de 20. Una anécdota o dos o siete. Por qué Rust es diferente. Esta charla es en español.'
    },
  } as const;

export type Languages = typeof languages;
export type DefaultLang = typeof defaultLang;
export type UI = typeof ui;