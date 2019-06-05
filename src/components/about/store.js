import maryland from './images/maryland.jpg'
import praiano from './images/praiano.jpg'
import rome from './images/rome.jpg'
import rugby from './images/rugby.jpg'
import sanfran from './images/sanfran.jpg'
import wakeboarding from './images/wakeboarding.jpg'

export const myImages = [
        { image: rugby,
          bigCaption: 'Rugby Playoffs',
          smallCaption: 'Maryland vs Tennessee in Knoxville',
        },
        { image: praiano,
          bigCaption: 'Praiano, Italy',
          smallCaption: 'Amalfi Coast',
        },
        { image: rome,
          bigCaption: 'The Colosseum',
          smallCaption: false,
        },
        { image: maryland,
          bigCaption: 'Maryland Homecoming',
          smallCaption: false,
        },
        { image: wakeboarding,
          bigCaption: 'Trying to get some air',
          smallCaption: false,
        },
        { image: sanfran,
          bigCaption: 'PCH Trip',
          smallCaption: `Took the backroads through state parks from San Diego
          to Oregon, then drove the PCH back down to San Diego`,
          pch: true,
        },
]
