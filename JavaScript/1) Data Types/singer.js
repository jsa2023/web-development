var singer = {
    name: "Adele",
    age: 32,
    genres: ["pop", "soul"],
    active: true,
    birth: {
    	city: "London",
    	country: "UK",
    	dob: {
                day: 5,
                month: "May", 
                year: 1988
            }
    },
    albums: [
        { title: "19", year: 2008 },
        { title: "21", year: 2011 },
        { title: "25", year: 2015 }
    ],
    awards: {
        Grammys: 10,
        Brits: 6,
        BillboardMusicAwards: 5,
        otherAwards: [ "MTV Europe Music Award", "World Music Award"]
    },
    songs: ["Hello", "Someone Like You", "Set Fire to the Rain"],
    tours: [
        { name: "Adele Live", year: 2011 },
        { name: "Adele Live 2016", year: 2016 },
        { name: "Adele: Live in New York City", year: 2016 }
    ],
    social: {
        twitter: "@Adele",
        instagram: "@adele"
    },
    collaborators: ["Paul Epworth", "Ryan Tedder", "Greg Kurstin"],
    bio: "Adele Laurie Blue Adkins, is an English singer-songwriter. After graduating from the BRIT School for Performing Arts and Technology in 2006, Adele was given a recording contract by XL Recordings after a friend posted her demo on Myspace the same year. In 2007, she received the Brit Awards Critics' Choice award and won the BBC Sound of 2008 poll."
}
console.log(singer.albums[1].title);