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
    ["Disgusting cereal", "Delicious cereal"]
]

const newPromptButton = document.getElementById("newprompt");
const spinButton = document.getElementById("spinrange");
const hideButton = document.getElementById("hide");

const spinner = document.querySelector(".scoresection");
const hider = document.querySelector(".hider");
const pointer = document.querySelector(".pointer");
const main = document.querySelector(".mainArea");
let hidden = true;

const leftPrompt = document.getElementById("leftside");
const rightPrompt = document.getElementById("rightside");

newPromptButton.addEventListener("click", ()=>{
    const prompt = promptList[Math.floor(Math.random() * promptList.length)]
    leftPrompt.textContent = prompt[0];
    rightPrompt.textContent = prompt[1];
});

spinButton.addEventListener("click", ()=>{
    const rotate = Math.floor(Math.random() * 181)-90;
    spinner.style.transform = `rotate(${rotate}deg)`;
});

hideButton.addEventListener("click", ()=>{
    hidden = !hidden;
    hider.hidden = hidden;
    spinButton.disabled = !hidden;
    newPromptButton.disabled = !hidden;
});

hider.addEventListener("click", (e)=>{
    const pointcentX = pointer.offsetLeft + pointer.offsetWidth / 2;
    const pointcentY = pointer.offsetTop + pointer.offsetHeight / 2;
    const angle = Math.atan2(e.clientY-main.offsetTop -pointcentY, e.clientX-main.offsetLeft-pointcentX);
    console.log((angle*180/Math.PI)+90)
    pointer.style.transform = `rotate(${(angle*180/Math.PI)+90}deg)`;
});