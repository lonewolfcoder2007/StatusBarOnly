import {fsdatabase} from "./config.js";
import {doc, setDoc, query, getDocs, orderBy, limit, collection} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { roles, races, ranks, roleWeapon, roleSkills, guilds, titles, regions } from "./data.js";
var totalscore = 0;
new Date;
function updateLeaderboard(name, score, rank){
    const currentTime = Date.now();
    const url = doc(fsdatabase, "Leaderboard", `${name}-${score}-${currentTime}`);
    setDoc((url), {
        name: name,
        score: score,
        rank: rank,
    }).then(() => {
        console.log("Data write successfully")
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`Data writing failed, ${errorCode}, ${errorMessage}`)
    })
}
function getRandomElement(arr) {
    return arr[Math.floor(Math.random()*arr.length)];
}
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function submitName() {
    const name = document.getElementById("nameInput").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    if((name == "Lonewolf" || name == "lonewolf") && gender == "Male"){
        document.getElementById("inputForm").style.display = "none";
        const race = "Human";
        const role = "Admin";
        totalscore = 9999999;
        const ra = "SSSR";
        const date = new Date(2007, 2, 9, 14, 7);
        const currentTime = Date.now();
        const diff = currentTime - date;
        const strength = "???";
        const health = "???";
        const mana = "???";
        const agi = "???";
        const lev = "???";
        const guild = "Codebreakers";
        const region = "Metaverse";
        const characterSkills = ["The Power of JavaScript (SSS)", "The Controller of HTML (SSS)", "World Restructuring (SSS)", "Domain Controller (SSS)"];
        const age = Math.floor(diff / 31557600000);
        const skillList = document.getElementById("charSkill");
        for(let i = 0; i < characterSkills.length; i++){
            const listItem = document.createElement("li");
            listItem.textContent = characterSkills[i];
            skillList.appendChild(listItem);
        }
        const titlePlace = document.getElementById("charTitle");
        const titleItem = document.createElement("li");
        titleItem.textContent = "Administrator Rights (SSS)"
        titlePlace.appendChild(titleItem);
        const dex = "???";
        const luck = "???";
        const endurance = "???";document.getElementById("charName").textContent = name;
        document.getElementById("charAgi").textContent = agi;
        document.getElementById("charLev").textContent = lev;
        document.getElementById("charRole").textContent = role;
        document.getElementById("charRace").textContent = race;
        document.getElementById("charStrength").textContent = strength;
        document.getElementById("charHealth").textContent = health;
        document.getElementById("charMana").textContent = mana;
        document.getElementById("charRank").textContent = ra;
        document.getElementById("charGuild").textContent = guild;
        document.getElementById("charRegion").textContent = region;
        document.getElementById("charAge").textContent = age;
        document.getElementById("charWeapon").textContent = "Keyboard (SSS)";
        document.getElementById("charDexterity").textContent = dex;
        document.getElementById("charLuck").textContent = luck;
        document.getElementById("charEndurance").textContent = endurance;
        document.getElementById("charGender").textContent = gender;
        document.getElementById("SecondRole").style.display = "none";
        document.getElementById("characterDisplay").style.display = "block";
        document.getElementById("scoreboard").style.display = "grid";
    }
    else if (name && gender != null) {
        console.log(name)
        console.log(gender)
        const race = getRandomElement(races);

        let role;
        const randomChance = Math.random() * 100;

        if (randomChance < 1) {
            role = "Demon King";
        } else if (randomChance > 98) {
            role = "Saint";
        } else {
            do {
                role = getRandomElement(roles);
            } while (
                (["Demon", "Sarkaz", "Orc"].includes(race) && ["Healer", "Paladin", "Saint"].includes(role)) ||
                (role === "Blacksmith" && race !== "Dwarf") ||
                ["Demon King", "Saint"].includes(role) || ((role == "Rifleman" || role == "Sapper") && (race == "Beast" || race == "Succubus" || race == "Dwarf" || race == "Feline" || race == "Slime" || race == "Deer"))
            );
        }


        document.getElementById("inputForm").style.display = "none";

        const strength = getRandomNumber(20, 100);
        const health = getRandomNumber(25, 100);
        const mana = getRandomNumber(1, 100);
        const agi = getRandomNumber(1, 100);
        const lev = getRandomNumber(1, 100);
        const guild = getRandomElement(guilds);
        const region = getRandomElement(regions);
        const characterSkills = [];
        const numberOfSkills = getRandomNumber(3, 5);
        const age = getRandomNumber(22, 60);
        const skillList = document.getElementById("charSkill");
        const dex = getRandomNumber(20, 100);
        const luck = getRandomNumber(1, 100);
        const endurance = getRandomNumber(Math.floor((strength * 0.5) + 9), strength);
        let ra = "";
        totalscore = totalscore + lev*5;
        var secondary_role = "";
        if(role == "Champion"){
            do{
                secondary_role = getRandomElement(roles);
            }
            while(secondary_role == "Champion");
            document.getElementById("SecondRole").style.display = "block";
        }
        else{
            document.getElementById("SecondRole").style.display = "none";
        }

        //Band score for ability and title
        const F_score = 1;
        const E_score = 5;
        const D_score = 10;
        const C_score = 25;
        const B_score = 50;
        const A_score = 150;
        const S_score = 300;
        const SS_score = 500;
        const SSS_score = 1000;
        //End of band score

        //Random score if rank = ???
        var random_score = [];
        random_score.push(F_score, E_score, D_score, C_score, B_score, A_score, S_score, SS_score, SSS_score);

        //Total band score for overall ranking
        const F_overall = 10;
        const E_overall = 50;
        const D_overall = 100;
        const C_overall = 300;
        const B_overall = 700
        const A_overall = 1250;
        const S_overall = 2000;
        const SS_overall = 3000;
        const SSS_overall = 4500;
        //End of total band score

        skillList.innerHTML = "";
        const availableSkill = roleSkills[role];

        for (let i = 0; i < numberOfSkills; i++) {
            var skill = getRandomElement(availableSkill);
            var rank = getRandomElement(ranks);
            var ImmunityChance = Math.random() * 1000;
            if(ImmunityChance == 1000){
                skill = "Total Immunity"
                rank = "SSS";
                totalscore = totalscore + SSS_score;
            }
            else{
                do{
                    skill = getRandomElement(availableSkill);
                }
                while(skill == "Total Immunity");
                if(rank == "F"){
                    totalscore = totalscore + F_score;
                }
                else if(rank == "E"){
                    totalscore = totalscore + E_score;
                }
                else if(rank == "D"){
                    totalscore = totalscore + D_score;
                }
                else if(rank == "C"){
                    totalscore = totalscore + C_score;
                }
                else if(rank == "B"){
                    totalscore = totalscore + B_score;
                }
                else if(rank == "A"){
                    totalscore = totalscore + A_score;
                }
                else if(rank == "S"){
                    totalscore = totalscore + S_score;
                }
                else if(rank == "SS"){
                    totalscore = totalscore + SS_score;
                }
                else{
                    totalscore = totalscore + SSS_score;
                }
            }
            if (!characterSkills.includes(skill)) {
                characterSkills.push({
                    skill: skill,
                    rank: rank
                })
            }
            const listItem = document.createElement("li");
            listItem.textContent = `${skill} (${rank})`;
            skillList.appendChild(listItem);
        }
        const titlesCount = getRandomNumber(1, 2);
        const titleList = document.getElementById("charTitle");
        titleList.innerHTML = "";

        const availableTitles = titles[role];


        for (let i = 0; i < titlesCount; i++) {
            var NoobChances = getRandomNumber(0, 100);
            var GreatWar = getRandomNumber(0, 1000);
            var title = getRandomElement(availableTitles);
            var titleRank = getRandomElement(ranks);
            if (GreatWar == 1000) {
                title = "Great War Participant - Losing Side";
            } else if (GreatWar == 0) {
                title = "Great War Participant - Winning Side";
            }
            if(NoobChances == 50){
                title = "Noob"
            }
            if(title == "Black Baron" || title == "Great War Participant - Winning Side"){
                titleRank = "SSS";
                totalscore = totalscore + SSS_score;
            }
            else if(title == "Great War Participant - Losing Side" || title == "Noob"){
                titleRank = "F";
                totalscore = totalscore + F_score
            }
            else{
                if(titleRank == "F"){
                    totalscore = totalscore + F_score;
                }
                else if(titleRank == "E"){
                    totalscore = totalscore + E_score;
                }
                else if(titleRank == "D"){
                    totalscore = totalscore + D_score;
                }
                else if(titleRank == "C"){
                    totalscore = totalscore + C_score;
                }
                else if(titleRank == "B"){
                    totalscore = totalscore + B_score;
                }
                else if(titleRank == "A"){
                    totalscore = totalscore + A_score;
                }
                else if(titleRank == "S"){
                    totalscore = totalscore + S_score;
                }
                else if(titleRank == "SS"){
                    totalscore = totalscore + SS_score;
                }
                else{
                    totalscore = totalscore + SSS_score
                }
            }
            const listItem = document.createElement("li");
            listItem.textContent = `${title} (${titleRank})`;
            titleList.appendChild(listItem);
        }

        const availableWeapons = roleWeapon[role];
        const characterWeapon = [];
        const WeaponNumber = 1;

        for (let i = 0; i <WeaponNumber; i++){
            const weapon = getRandomElement(availableWeapons);
            var rank = getRandomElement(ranks);
            if(weapon == "None"){
                characterWeapon.push(`${weapon}`)
            }
            else if(weapon == "Unknown"){
                rank = "???";
                totalscore = totalscore + getRandomElement(random_score);
            }
            else{
                if(rank == "F"){
                    totalscore = totalscore + F_score;
                }
                else if(rank == "E"){
                    totalscore = totalscore + E_score;
                }
                else if(rank == "D"){
                    totalscore = totalscore + D_score;
                }
                else if(rank == "C"){
                    totalscore = totalscore + C_score;
                }
                else if(rank == "B"){
                    totalscore = totalscore + B_score;
                }
                else if(rank == "A"){
                    totalscore = totalscore + A_score;
                }
                else if(rank == "S"){
                    totalscore = totalscore + S_score;
                }
                else if(rank == "SS"){
                    totalscore = totalscore + SS_score;
                }
                else{
                    totalscore = totalscore + SSS_score;
                }
            }
            characterWeapon.push(`${weapon} (${rank})`);
        }
        if(totalscore < F_overall){
            ra = "N/A";
        }
        else if (totalscore >= F_overall && totalscore < E_overall){
            ra = "F";
        }
        else if(totalscore >= E_overall && totalscore < D_overall){
            ra = "E";
        }
        else if(totalscore >= D_overall && totalscore < C_overall){
            ra = "D";
        }
        else if(totalscore >= C_overall && totalscore < B_overall){
            ra = "C";
        }
        else if(totalscore >= B_overall && totalscore < A_overall){
            ra = "B";
        }
        else if(totalscore >= A_overall && totalscore < S_overall){
            ra = "A";
        }
        else if(totalscore >= S_overall && totalscore < SS_overall){
            ra = "S";
        }
        else if(totalscore >= SS_overall && totalscore < SSS_overall){
            ra = "SS";
        }
        else{
            ra = "SSS"
        }
        updateLeaderboard(name, totalscore, ra);

        document.getElementById("charName").textContent = name;
        document.getElementById("charAgi").textContent = agi;
        document.getElementById("charLev").textContent = lev;
        document.getElementById("charRole").textContent = role;
        document.getElementById("charRace").textContent = race;
        document.getElementById("charStrength").textContent = strength;
        document.getElementById("charHealth").textContent = health;
        document.getElementById("charMana").textContent = mana;
        document.getElementById("charRank").textContent = ra;
        document.getElementById("charGuild").textContent = guild;
        document.getElementById("charRegion").textContent = region;
        document.getElementById("charAge").textContent = age;
        document.getElementById("charWeapon").textContent = characterWeapon;
        document.getElementById("charDexterity").textContent = dex;
        document.getElementById("charLuck").textContent = luck;
        document.getElementById("charEndurance").textContent = endurance;
        document.getElementById("charGender").textContent = gender;

        if (["Healer", "Paladin", "Saint"].includes(role)) {
            const divinePower = getRandomNumber(50, 100);
            document.getElementById("charDivinePower").textContent = divinePower;
            document.getElementById("divinePower").style.display = "block";
        }

        if (["Necromancer", "Unknown", "Death Knight", "Demon King"].includes(role) || race === "Demon") {
            const darkEnergy = getRandomNumber(50, 100);
            document.getElementById("charDarkEnergy").textContent = darkEnergy;
            document.getElementById("darkEnergy").style.display = "block";
        }

        document.getElementById("characterDisplay").style.display = "block";
        document.getElementById("scoreboard").style.display = "block";
        }   
    else{
        alert("Please fill in required field.");
    }
    console.log(totalscore);
}
document.getElementById("ignition").addEventListener("click", submitName)
const URL = query(collection(fsdatabase, "Leaderboard"), orderBy("score", "desc"), limit(10));
function DisplayLeaderboard(){
    getDocs(URL).then((results) =>
    {
        console.log(results);
        const fileNames = results._snapshot.docChanges;
        console.log(fileNames);
        for (let i = 0; i < fileNames.length; i++) {
            let data = fileNames[i].doc.data.value.mapValue.fields;
            let name = data.name.stringValue;
            let score = data.score.integerValue;
            let rank = data.rank.stringValue;
            let row = document.createElement('tr');
            let data1 = document.createElement('td');
            let data2 = document.createElement('td');
            let data3 = document.createElement('td');
            let strong1 = document.createElement('strong');
            let strong2 = document.createElement('strong');
            let strong3 = document.createElement('strong');
            let strong4 = document.createElement('strong');
            let number = document.createElement('td');
            row.setAttribute("id", `row${i}`);
            strong1.innerHTML = name;
            strong2.innerHTML = score;
            strong3.innerHTML = rank;
            strong4.innerHTML = i + 1;
            let leaderboard = document.getElementById("board");
            leaderboard.appendChild(row);
            row.appendChild(number);
            row.appendChild(data1);
            row.appendChild(data2);
            row.appendChild(data3);
            data1.appendChild(strong1);
            data2.appendChild(strong2);
            data3.appendChild(strong3);
            number.appendChild(strong4);
            if(i == 0){
                data1.style.color = "#F39C12";
                data2.style.color = "#F39C12";
                data3.style.color = "#F39C12";
                number.style.color = "#F39C12";
            }
            else if(i == 1){
                data1.style.color = "#CCCCFF";
                data2.style.color = "#CCCCFF";
                data3.style.color = "#CCCCFF";
                number.style.color = "#CCCCFF";
            }
            else if(i == 2){
                data1.style.color = "#78281F";
                data2.style.color = "#78281F";
                data3.style.color = "#78281F";
                number.style.color = "#78281F";
            }
        }
        document.getElementById("leaderboardDisplay").style.display = "block";
        document.getElementById('reset').style.display = "block";
        document.getElementById("characterDisplay").style.display = "none";
        document.getElementById('scoreboard').style.display = 'none';
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`Data retrieving unsuccessful, code ${errorCode}, message ${errorMessage}`);
    });
}
document.getElementById("leaderboard").addEventListener("click", DisplayLeaderboard)