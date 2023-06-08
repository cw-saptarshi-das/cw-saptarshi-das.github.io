function clickHandler() {
    let count = 5;
    alert(`You are ${count} days ahead`);
    count = countIncrement(count);
    alert(`You are ${count} days behind`);

}

function countIncrement(count) {
    document.querySelector("#skill-section > div > div.skill-set-1 > div.skill-item2.skill-item").remove();
    console.log("reached nested call");
    return count + 4;
}