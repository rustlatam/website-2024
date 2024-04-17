export const languages = {
    en: 'English',
    es: 'Spanish',
  };
  
  export const defaultLang = 'en';

  
  export const ui = {
    en: {
        'hero.slogan': 'Where Rust meets Latin America',
    'keynote.bodil.abstract': 'Bodil is a compulsive conference speaker in the fields of functional programming, web technologies and Soviet space dogs, and helps organise multiple developer conferences in the UK and Scandinavia. She’s been everywhere from JavaScript to Haskell and has recently been spending quality time with Rust. Most of the time she’s not even upset that it doesn’t have higher kinded types yet.',
      'keynote.fede.abstract': 'This talk is going to be a tasty mix of several things, say, a Rustacean Rhapsody. Software that is not a passing fad: applications from 20 years ago, operating systems from 30 years ago, languages from 40 years ago. The Rewrite It In Rust meme. Where is Latin America in all of this? Technological colonialism and decolonization. What to do with that mountain of incomprehensible software. Perspectives from a guy in his forties for people in their 20s. An anecdote or two or seven. Why Rust is different. This talk is in Spanish.',
      "about.title": "About Rust Latam",
      "about.first-paragraph": "Rust Latam Conference is the Latin America's leading event for and by the Rust movement, and one of Rust community's largest annual networking opportunities.",
      "about.second-paragraph": "Two days of conference will offer interactive sessions, hands-on activities, and engaging talks to bring together 200+ passionate advocates, developers and enthusiasts of the Rust Programming Language from around the world. People and ideas from the Rust Latin America community will leap off the screen to learn, discuss, debate and address Rust in person.",
      "about.third-paragraph": "Our third Rust Latam Conference is happening in Mexico City.",

      "location.title": "Location",
      "location.site": "UNAM School of Engineering",
      "location.description": "The venue for the conference will be the most prestigious engineering school in Latin America and one of the top engineering schools worldwide: UNAM School of Engineering.",


      "tickets.first-paragraph": "The ticket sale will open soon and will be an online sale only. Attendees cannot buy tickets offline or at the conference. Tickets will also be personal and will carry your name. There will be different prices; we encourage companies who pay for their employees attending the conference to actively support us (\"business ticket\"). However, no matter the ticket price level, everyone will enjoy the same conference content.",
      "tickets.second-paragraph": "We will announce the ticket sale opening on our social channels, so stay tuned!"
    },
    es: {
        'hero.slogan': 'Donde Rust se encuentra con América Latina',

    'keynote.bodil.abstract': 'Bodil es una oradora compulsiva en los campos de programación funcional, tecnologías web y perros espaciales soviéticos, ayuda a organizar múltiples conferencias de desarrolladores en el Reino Unido y Escandinavia. Ha estado en todas partes, desde JavaScript hasta Haskell, y recientemente ha estado pasando tiempo de calidad con Rust. La mayoría de las veces ella ni siquiera se molesta porque todavía no tiene Higher Kinded Types.',
    'keynote.fede.abstract': 'Esta charla va a ser un sabroso revoltijo de varias cosas, digamos, una Rapsodia Rustácea. El software que no pasa de moda: aplicaciones de hace 20 años, sistema operativo de hace 30, lenguajes de hace 40. El meme de Reescríbelo En Rust. ¿Dónde está Latinoamérica en todo esto? Colonialismo tecnológico y descolonización. Qué hacemos con esa montaña de software incomprensible. Perspectivas de un cuarentón para la gente de 20. Una anécdota o dos o siete. Por qué Rust es diferente. Esta charla es en español.',
    
    "about.title": "Acerca de Rust Latam",
"about.first-paragraph": "La Conferencia Rust Latam es el principal evento de América Latina para y por el movimiento Rust, y una de las mayores oportunidades anuales de networking de la comunidad Rust.",
"about.second-paragraph": "Dos días de conferencia ofrecerán sesiones interactivas, actividades prácticas y charlas interesantes para reunir a más de 200 apasionados defensores, desarrolladores y entusiastas del lenguaje de programación Rust de todo el mundo. Personas e ideas de la comunidad Rust de América Latina saltarán de la pantalla para aprender, discutir, debatir y abordar Rust en persona.",
"about.third-paragraph": "Nuestra tercera Conferencia Rust Latam se llevará a cabo en la Ciudad de México.",

"location.title": "Ubicación",
"location.site": "Facultad de Ingeniería de la UNAM",
"location.description": "El lugar de la conferencia será la escuela de ingeniería más prestigiosa de América Latina y una de las mejores escuelas de ingeniería a nivel mundial: la Facultad de Ingeniería de la UNAM.",

"tickets.first-paragraph": "La venta de boletos abrirá pronto y será exclusivamente en línea. Los asistentes no podrán comprar boletos en persona ni en la conferencia. Los boletos también serán personales y llevarán tu nombre. Habrá diferentes precios; alentamos a las empresas que pagan por la asistencia de sus empleados a la conferencia a que nos apoyen activamente (\"boleto empresarial\"). Sin embargo, sin importar el nivel de precio del boleto, todos disfrutarán del mismo contenido de la conferencia.",
"tickets.second-paragraph": "¡Anunciaremos la apertura de la venta de boletos en nuestros canales sociales, así que mantente atento!"

    },
  } as const;

export type Languages = typeof languages;
export type DefaultLang = typeof defaultLang;
export type UI = typeof ui;