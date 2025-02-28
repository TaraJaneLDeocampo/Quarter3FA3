function generateStory() {
    let num1 = Math.ceil(Math.random() * 20);
    let num2 = Math.ceil(Math.random() * 20);
    let num3 = Math.ceil(Math.random() * 20);
    let largest = Math.max(num1, num2, num3);
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let nthLetter = num1 <= 26 ? alphabet[num1 - 1] : "?";
    let totalMinutes = num2 * num3;
    let hours = Math.floor(totalMinutes / 60);
    let minutes = totalMinutes % 60;
    let story = `A detective found a cryptic note marked with the letter '${nthLetter}'. 
    The number ${largest} was scribbled in red ink. 
    With only ${totalMinutes} minutes (${hours} hours and ${minutes} minutes) before the next clue disappeared, 
    the detective raced against time to solve the case.`;
    document.getElementById("story").innerText = story;
}
