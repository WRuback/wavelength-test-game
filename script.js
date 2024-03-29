const promptList = [
    ["Bad Superpower", "Good Superpower"],
    ["Boring", "Exciting"],
    ["Bad Actor", "Good Actor"],
    ["Poorly Made", "Well Made"],
    ["Plain", "Fancy"],
    ["Unpopular", "Popular"],
    ["Worthless", "Priceless"],
    ["Better Hot", "Better Cold"],
    ["Mainstream", "Niche"],
    ["Unhygienic", "Hygienic"],
    ["Movie that Godzilla would Ruin", "Movie that Godzilla would Improve"],
    ["Unethical", "Ethical"],
    ["Bad for You", "Good For you"],
    ["Proof that God Exists", "Proof that God doesn't Exist"],
    ["Mature Person", "Immature Person"],
    ["Optional", "Mandatory"],
    ["Bad TV show", "Good TV show"],
    ["Quiet Place", "Loud Place"],
    ["Dangerous", "Safe"],
    ["Rare", "Common"],
    ["Role Model", "Bad Influence"],
    ["Dark", "Light"],
    ["Sport", "Game"],
    ["Star Wars", "Star Trek"],
    ["Loved", "Hated"],
    ["Villain", "Hero"],
    ["Replaceable", "Irreplaceable"],
    ["Unforgiveable", "Forgiveable"],
    ["Harmless", "Harmful"],
    ["Unhealthy", "Healthy"],
    ["Historically Important", "Historically Irrelevant"],
    ["Inflexible", "Flexible"],
    ["Introvert", "Extrovert"],
    ["Bad movie", "Good movie"],
    ["Normal thing to own", "Weird thing to own"],
    ["Bad person", "Good person"],
    ["Casual", "Formal"],
    ["Dry", "Wet"],
    ["Forbidden", "Encouraged"],
    ["Fragile", "Durable"],
    ["Good", "Evil"],
    ["Bad Habit", "Good Habit"],
    ["Need", "Want"],
    ["Dirty", "Clean"],
    ["Unimportant", "Important"],
    ["Waste of time", "Good use of time"],
    ["Ordinary", "Extraordinary"],
    ["Happens Slowly", "Happens Suddenly"],
    ["Unpopular Activity", "Popular Activity"],
    ["Sustenance", "Haute Cuisine"],
    ["Hot", "Cold"],
    ["Feels Bad", "Feels Good"],
    ["Useless Invention", " Useful Invention"],
    ["Tired", "Wired"],
    ["Unknown", "Famous"],
    ["Snack", "Meal"],
    ["Mean Person", "Nice Person"],
    ["Low Quality", "High Quality"],
    ["Wise", "Intelligent"],
    ["Peaceful", "Warlike"],
    ["Bad", "Good"],
    ["Colorless", "Colorful"],
    ["Fantasy", "Sci-Fi"],
    ["Nobody does it", "Everybody does it"],
    ["Lowbrow", "Highbrow"],
    ["Useless in an emergency", "Useful in an emergency"],
    ["Vice", "Virtue"],
    ["Stupid", "Brilliant"],
    ["Underrated Weapon", "Overrated Weapon"],
    ["Ethical to eat", "Unethical to eat"],
    ["Trashy", "Classy"],
    ["Boring topic", "Fascinating topic"],
    ["Underrated", "Overrated"],
    ["Uncontroverisal Topic", "Controversial Topic"],
    ["Looks like a person", "Doesn't look like a person"],
    ["Guilty Pleasure", "Openly Love"],
    ["Freedom Fighter", "Terrorist"],
    ["Worst living person", "Greatest living person"],
    ["Unstable", "Stable"],
    ["Dystopia", "Utopia"],
    ["Ugly Man", "Beautiful Man"],
    ["Easy to Kill", "Hard to Kill"],
    ["Fad", "Classic"],
    ["Disgusting cereal", "Delicious cereal"],
    ["Ineffective", "Effective"],
    ["Smelly in a bad way", "Smelly in a good way"],
    ["Basic", "Hipster"],
    ["Not a Sandwich", "A Sandwich"],
    ["Has a bad reputation", "Has a good reputation"],
    ["Friend", "Enemy"],
    ["Nature", "Nurture"],
    ["Square", "Round"],
    ["Scary Animal", "Nice Animal"],
    ["Bad Music", "Good Music"],
    ["Useless", "Useful"],
    ["Boring Hobby", "Interesting Hobby"],
    ["Rough", "Smooth"],
    ["Round", "Pointy"],
    ["Underrated thing to own", "Overrated thing to own"],
    ["Underrated letter of the alphabet", "Overrated letter of the alphabet"],
    ["Traditionally masculine", "Traditionally feminine"],
    ["Comedy", "Drama"],
    ["Culturally Significant", "Culturally Insignificant"],
    ["Unsexy Emoji", "Sexy Emoji"],
    ["Useless Major", "Useful Major"],
    ["Underrated Actor", "Overrated Actor"],
    ["Tastes Bad", "Tastes Good"],
    ["Smells Bad", "Smells Good"],
    ["The Light Side of the Force", "The Dark Side of the Force"],
    ["Underrated thing to do", "Overrated thing to do"],
    ["Worst Athlete of all time", "Greatest Athlete of all time"],
    ["Failure", "Masterpiece"],
    ["Gryffindor", "Slytherin"],
    ["Bad Man", "Good Man"],
    ["Hairless", "Hairy"],
    ["Normal Pet", "Exotic Pet"],
    ["Book was better", "Movie was better"],
    ["Ugly", "Beautiful"],
    ["Straight", "Curvy"],
    ["80s", "90s"],
    ["Underpaid", "Overpaid"],
    ["Underrated Skill", " Overrated Skill"],
    ["Sad Song", "Happy Song"],
    ["Geek", "Dork"],
    ["Worst Day of the year", "Best Day of the year"],
    ["Cat Person", "Dog Person"],
    ["Dry Food", "Wet Food"],
    ["Requires Luck", "Requires Skill"],
    ["Easy to Spell", "Hard to Spell"],
    ["Sad Movie", "Happy Movie"],
    ["Hard to Pronounce", "Easy to Pronounce"],
    ["Job", "Career"],
    ["Divided", "Whole"],
    ["Soft", "Hard"],
    ["Normal", "Weird"],
    ["Inessential", "Essential"],
    ["Liberal", "Conservative"],
    ["Difficult to Use", "Easy to Use"],
    ["Easy Subject", "Hard Subject"],
    ["Least Evil Company", "Most Evil Company"],
    ["Action Movie", "Adventure Movie"],
    ["Unsexy Animal", "Sexy Animal"],
    ["Hard to do", "Easy to do"],
    ["Underated Movie", "Overrated Movie"],
    ["Mildly Addictive", "Highly Addictive"],
    ["Low Calorie", "High Calorie"],
    ["Dangerous Job", "Safe Job"],
    ["Short lived", "Longed lived"],
    ["Hard to remember", "Easy to remember"],
    ["For Kids", "For Adults"],
    ["Underrated Musician", "Overrated Musician"],
    ["Artisanal", "Mass Produced"],
    ["Cheap", "Expensive"],
    ["Movie", "Film"],
    ["Unbelievable", "Believable"],
    ["Flavorless", "Flavorful"],
    ["Messy Food", "Clean Food"],
    ["Mental Activity", "Physical Activity"],
    ["Temporary", "Permanent"],
    ["Untalented", "Talented"],
    ["Unfashionable", "Fashionable"],
    ["Uncool", "Cool"],
    ["Round Animal", "Pointy Animal"],
    ["Bad Pizza Topping", "Good Pizza Topping"],
    ["Hard to Find", "Easy to Find"],
    ["Unreliable", "Reliable"],
    ["Useless Body Part", "Useful Body Part"],
    ["Weak", "Strong"]
]

const newPromptButton = document.getElementById("newprompt");
const hideButton = document.getElementById("hide");

const root = document.documentElement;

const spinner = document.querySelector(".scoresection");
const hider = document.querySelector(".hider");
const pointer = document.querySelector(".pointer");
const main = document.querySelector(".mainArea");
let hidden = true;

const leftPrompt = document.getElementById("leftside");
const rightPrompt = document.getElementById("rightside");
const rulesDisplay = document.getElementById("rulesDisplay");
let rotate = 0;

const backgroundStars = document.getElementById("backgroundstars");
const content = backgroundStars.getContext('2d');
let timingResize;

newPromptButton.addEventListener("click", () => {
    const prompt = promptList[Math.floor(Math.random() * promptList.length)]
    let curRotation = `rotate(${rotate + 540}deg)`;
    rotate = Math.floor(Math.random() * 181) - 90;

    leftPrompt.textContent = prompt[0];
    rightPrompt.textContent = prompt[1];

    let rotation = `rotate(${rotate}deg)`;
    spinner.style.transform = rotation;
    pointer.style.transform = `rotate(0deg)`;

    root.style.setProperty('--rotateto', rotation);
    root.style.setProperty('--rotatefrom', curRotation)

    spinner.classList.remove("spin");
    void spinner.offsetWidth;
    spinner.classList.add("spin");

    rulesDisplay.textContent = "Click Respin to select a new prompt, or hit 'hide spinner' to start the game."
});

hideButton.addEventListener("click", () => {
    hidden = !hidden;
    hider.hidden = hidden;
    if (!hidden) {
        newPromptButton.classList.add("hide");
        hideButton.innerText = "Reveal the Spinner";
        rulesDisplay.textContent = "Click on the spinner to select where the wavelength is. Then hit 'Reveal' to see if you got it!"
    } else {
        newPromptButton.classList.remove("hide");
        hideButton.innerText = "Hide the Spinner";
        rulesDisplay.textContent = "Click Respin to select a new prompt, or hit 'hide spinner' to start the game."
    }
});

hider.addEventListener("click", (e) => {
    const pointcentX = pointer.offsetLeft + pointer.offsetWidth / 2;
    const pointcentY = pointer.offsetTop + pointer.offsetHeight / 2;
    const angle = Math.atan2(e.clientY - main.offsetTop - pointcentY, e.clientX - main.offsetLeft - pointcentX);
    pointer.style.transform = `rotate(${(angle * 180 / Math.PI) + 90}deg)`;
});

function backgroundDraw() {
    backgroundStars.width = window.innerWidth;
    backgroundStars.height = window.innerHeight;
    content.strokeStyle = 'rgba(0, 255, 255, 0.3)';
    content.lineWidth = '2';
    const amount = window.innerWidth * window.innerHeight / 1000;
    for (let i = 0; i < amount; i++) {
        content.strokeStyle = `rgba(0, ${130 + (Math.random() * 125)}, ${130 + (Math.random() * 125)}, ${Math.random() * 0.2})`;
        content.beginPath();
        content.arc(Math.random() * window.innerWidth, Math.random() * window.innerHeight, 20, 0, 2 * Math.PI);
        content.stroke();
    }
};

window.addEventListener("resize", () => {
    clearTimeout(timingResize);
    timingResize = setTimeout(backgroundDraw, 100);
}, false);

backgroundDraw();