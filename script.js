const dataObj = {
    generation: ['60s', '70s', '80s', '90s'],
    yearlyTrend: {
        1960: {
            musicGenre: ['Classic Rock', 'British Invasion', 'Beat Music', 'Blues Rock', 'Hard Rock', 'Yé-yé'],
            clothingStyle: ['Beatnik Style', 'Ivy League Style', 'Mod Style', 'Surfer Style', 'Bohemian Style', 'Hippie Style', 'Skinhead Style'],
            cars: ['Ford Mustang', 'Pontiac GTO', 'Lamborghini Miura', 'Aston Martin DB5', 'Jaguar E-Type', 'Ferrari 250 GTO', 'Porsche 911', 'Ford GT40', 'Lincoln Continental']
        },
        1970: {
            musicGenre: ['Disco', 'Funk', 'Progressive Rock', 'Punk Rock', 'Glam Rock', 'Heavy Metal', 'Reggae'],
            clothingStyle: ['Disco Style', 'Hippie Style', 'Punk Style', 'Bohemian Style', 'Preppy Style', 'Safari Style'],
            cars: ['Chevrolet Camaro', 'Porsche 928', 'Datsun 240Z', 'Lamborghini Countach', 'BMW 3 Series', 'Pontiac Firebird', 'Volkswagen Golf', 'Ferrari Daytona']
        },
        1980: {
            musicGenre: ['New Wave', 'Synthpop', 'Hair Metal', 'Hip Hop', 'Thrash Metal', 'Post-Punk', 'Electronic Dance'],
            clothingStyle: ['Power Dressing', 'New Romantic Style', 'Hip Hop Style', 'Preppy Style', 'Casual Streetwear', 'Athleisure'],
            cars: ['DeLorean DMC-12', 'Ferrari Testarossa', 'Toyota Supra', 'Chevrolet Corvette C4', 'BMW M3', 'Mazda RX-7', 'Mercedes-Benz 190E', 'Lamborghini Jalpa']
        },
        1990: {
            musicGenre: ['Grunge', 'Alternative Rock', 'Britpop', 'Gangsta Rap', 'Techno', 'Pop Punk', 'Trip Hop'],
            clothingStyle: ['Grunge Style', 'Minimalist Style', 'Hip Hop Style', 'Rave Fashion', 'Casual Chic', 'Sporty Streetwear'],
            cars: ['Toyota Supra Mk4', 'Mazda Miata', 'Chevrolet Camaro Z28', 'Nissan Skyline GT-R R34', 'BMW Z3', 'Honda NSX', 'Ford Explorer', 'Porsche Boxster']
        }
    },
};


const randArrElem = arr => {
    for (let i = 0; i < arr.length; i++){
        const randElement = arr[Math.floor(Math.random() * arr.length)]
        return randElement
    }
}


const messageGenerator = () => {
    const generation = dataObj.generation
    const randomGeneration = randArrElem(generation)
    const year = parseInt(randomGeneration) + 1900;
    const yearDate = dataObj.yearlyTrend[year]
    const { musicGenre, clothingStyle, cars } = yearDate

    console.log(`You are from the ${randomGeneration} generation. Your favorite music is ${randArrElem(musicGenre)}, your favorite fashion is ${randArrElem(clothingStyle)}, and your dream car is ${randArrElem(cars)}.`);
}

messageGenerator()