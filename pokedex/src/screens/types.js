function getTypeImagePath(type){
    let path = "";

    for (let i = 0; i < allTypes.length; i++){
        if (type === allTypes[i][0]){
            path = allTypes[i][1]
        }
    }

    return path;
}

export {getTypeImagePath};

const allTypes = [
    ['normal', require('../../assets/typeIcons/normal.png')],
    ['bug', require('../../assets/typeIcons/bug.png')],
    ['grass', require('../../assets/typeIcons/grass.png')],
    ['poison', require('../../assets/typeIcons/poison.png')],
    ['water', require('../../assets/typeIcons/water.png')],
    ['ice', require('../../assets/typeIcons/ice.png')],
    ['fire', require('../../assets/typeIcons/fire.png')],
    ['dragon', require('../../assets/typeIcons/dragon.png')],
    ['rock', require('../../assets/typeIcons/rock.png')],
    ['ground', require('../../assets/typeIcons/ground.png')],
    ['steel', require('../../assets/typeIcons/steel.png')],
    ['fighting', require('../../assets/typeIcons/fighting.png')],
    ['dark', require('../../assets/typeIcons/dark.png')],
    ['ghost', require('../../assets/typeIcons/ghost.png')],
    ['psychic', require('../../assets/typeIcons/psychic.png')],
    ['flying', require('../../assets/typeIcons/flying.png')],
    ['fairy', require('../../assets/typeIcons/fairy.png')],
    ['electric', require('../../assets/typeIcons/electric.png')]
];
