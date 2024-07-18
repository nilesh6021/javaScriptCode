// const marval_hero =["Ironman","Thor","Spiderman","CaptanA"];
// const dc_hero =["Batman","Superman","flash","Joker"]

// //  marval_hero.push(dc_hero);
// //  console.log(marval_hero);
// //  console.log(marval_hero[4][0]);

// // marval_hero.concat(dc_hero);
// // console.log(marval_hero);

// const allHero =marval_hero.concat(dc_hero)
// console.log(allHero)//['Ironman', 'Thor', 'Spiderman', 'CaptanA', 'Batman', 'Superman', 'flash', 'Joker']
// // console.log(allHero.join())

// const all_in_one =[...marval_hero,...dc_hero];
// console.log(all_in_one)////['Ironman', 'Thor', 'Spiderman', 'CaptanA', 'Batman', 'Superman', 'flash', 'Joker']


// const complexarray =[1,2,3,4,5,[6,7,8],[9,8,6,[8,0,4],10]]
// const onearray =complexarray.flat(Infinity)
// console.log(onearray);

const fname ="NILESH";
console.log(Array.isArray(fname))//false

console.log(Array.from(fname))//['N', 'I', 'L', 'E', 'S', 'H']