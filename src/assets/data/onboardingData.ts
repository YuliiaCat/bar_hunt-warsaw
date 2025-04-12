import IOnboarding from '../../types/onboarding';

const onboardingData: IOnboarding[] = [
  {
    id: 1,
    image: require('../images/onboard/onboarding1.jpg'),
    title: "Discover Warsaw's Best Bars!",
    text: 'Looking for your next bar adventure? Let BarHunt Warsaw help you explore and find amazing bars and pubs in the city with just a spin.',
    btnText: 'Get Started',
  },
  {
    id: 2,
    image: require('../images/onboard/onboarding2.jpg'),
    title: 'Simple, Fun, and Random!',
    text: '• Choose a category: themed, cozy, musical, or sporty. \n• Watch the spinner work its magic. \n• Discover a randomly selected bar and save it to your favorites or share it with friends!',
    btnText: 'Next',
  },
  {
    id: 3,
    image: require('../images/onboard/onboarding3.jpg'),
    title: 'Your Favorites, Your Way.',
    text: 'Save the bars you love for future visits and share your discoveries with friends directly from the app.',
    btnText: 'Let’s Go!',
  },
  {
    id: 4,
    image: require('../images/onboard/onboarding4.jpg'),
    title: 'Test Your Luck!',
    text: 'Play the "Luck Cup" mini-game while exploring! Guess where the olive is hidden under shuffled cups and win fun rewards like bar facts, cocktail recipes, and jokes.',
    btnText: 'Next',
  },
  {
    id: 5,
    image: require('../images/onboard/onboarding5.jpg'),
    title: 'Let the Adventure Begin!',
    text: 'Explore, save, and share Warsaw’s top bars with a simple spin. Where will your next drink be?',
    btnText: 'Start Exploring',
  },
];

export default onboardingData;
