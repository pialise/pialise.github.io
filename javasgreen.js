function showNewRoll() {
  
var engRolls = [
  "Side Scull", 
  "Chest Scull", 
  "Standard Greenland Roll", 
  "Paddle in Crook of Arm", 
  "Storm Roll",
  "Reverse sweep Roll (stern to bow)",
  "Spine Roll (paddle projecting over head)",
  "Paddle held behind back",
  "Standard Roll with Paddle held behind head",
  "Reverse Roll with Paddle held behind head",
  "Armpit Roll",
  "Vertical Sculling Roll",
  "Sculling Roll with paddle held horizontal on foredeck",
  "Sculling Roll with paddle held horizontal above \"backrest\"",
  "Roll with arms crossed",
  "Sculling with paddle held under kayak",
  "Successive Storm rolls performed in 10 seconds",
  "Successive Standard rolls performed in 10 seconds",
  "Roll with hunting float",
  "Throwing stick, start tucked forward, finish tucked forward",
  "Throwing stick, start leaning aft, sweep from stern to bow",
  "Throwing stick, start tucked forward, finish leaning aft",
  "Hand roll, start tucked forward, finish tucked forward",
  "Hand roll, start leaning aft, sweep from stern to bow",
  "Hand roll, start tucked forward, finish leaning aft",
  "Hand roll with a clenched fist, start tucked forward, finish tucked forward",
  "Hand roll with a clenched fist, start leaning aft, sweep from stern to bow",
  "Hand roll with a clenched fist, start tucked forward, finish leaning aft",
  "Hand roll holding eight kilogram brick, start tucked forward, finish tucked forward",
  "Hand roll holding eight kilogram brick, start leaning aft, sweep from stern to bow",
  "Hand roll holding Eight kilogram brick, start tucked forward, finish leaning aft",
  "Elbow roll",
  "Straight jacket, no hands-roll",
  "Paddling upside down",
  "Walrus Pull"
];
var greenRolls = [
  "Innaqatsineq",
  "Palluussineq",
  "Kinnguffik paarlallugu/nerfallaallugu",
  "Pakassummillugu/unermillugu",
  "Siukkut pallortillugu/masikkut",
  "Kingumut naatillugu",
  "Aariammillugu",
  "Kingup apummaatigut",
  "Siukkut tunusummillugu",
  "Kingukkut tunusummillugu",
  "Paatip kallua tuermillugu illuinnarmik",
  "Qiperuussineq paatit ammorluinnaq, qajaq pusivillugu",
  "Masikkut aalatsineq",
  "Isserfikkut aalatsineq",
  "Tallit paarlatsillugit paateqar/uni masikkut",
  "Qaannap ataatigu ipilaarlugu",
  "Pallortillugu assakaaneq",
  "Nerfallarlugu assakaaneq",
  "Avataq isserfiup taqqaanut qaannap sinarsuanut qilerullugu",
  "Norsamik masikkut",
  "Norsamik kingukkut",
  "Norsamik nerfallaallugu",
  "Assammik masikkut",
  "Assammik kingukkut",
  "Assammik nerfallaallugu",
  "Assak peqillugu masikkut",
  "Assak peqillugu kingukkut",
  "Assak peqillugu nerfallaallugu",
  "Ujaqqamik tigummisserluni masikkut",
  " Ujaqqamik tigummisserluni kingukkut",
  "Ujaqqamik tigumisserluni nerfallaallugu",
  "Ikusaannarmik niaqoq/pukusuk patillugu",
  "Tallit paarlatsillugit timaannarmik",
  "Pusilluni paarneq",
  "Nusutsinneq kinngunani iluarisamut"
];

var randomNumber = Math.floor((Math.random() * greenRolls.length));
var displayEngName = engRolls[randomNumber];
var displayGreenName = greenRolls[randomNumber];
  
document.getElementById("clickfornew").innerHTML = "Click for new roll";
document.getElementById("english").innerHTML = displayEngName;
  
document.getElementById("clickforanswer").innerHTML = "Click for greenlandic";
document.getElementById("greenlandic").innerHTML = displayGreenName;
document.getElementById("greenlandic").style.color= "white";
  //console.log([displayEngName, displayGreenName]);
}
  function answerFunction(){
   document.getElementById("greenlandic").style.color= "#808080"; 
       }