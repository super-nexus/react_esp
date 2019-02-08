export const trimGPIO = (gpioCopy, node) => {

    let gpio = {...gpioCopy};

    for (let i = 0; i < node["switches"].length; i++) {

        console.log("Looping");

        Object.keys(gpio).map(key => {
            // console.log("Current key: " + key);
            // console.log("Current value1: " + gpio[key]);
           //console.log("Current value2: " + node["switches"][i]["pin"]);

            if (gpio[key] === node["switches"][i]["pin"]) {
                //   console.log("Function executed");
                delete gpio[key];
                //  console.log("reborn gpio: " + JSON.stringify(gpio));
                return 0;
            }
            return 0;
        })
    }
    return gpio;
};
//
// export const fillGPIO = (gpio, baseData) => {
//
//     let exists = false;
//
//     for(let key of Object.keys(baseData)){
//
//         for(let gpioKey of Object.keys(gpio)){
//
//             if(key === gpioKey){
//                 exists = true;
//                 break;
//             }
//
//         }
//         if(!exists){
//             gpio[key] = baseData[key];
//         }
//         exists = false;
//     }
//     return gpio;
// };

// export const objectCompare = (obj1, obj2) => {
//
//     for(let keys1 of Object.keys(obj1)){
//         let exists = false;
//         for(let keys2 of Object.keys(obj2)) {
//             if(keys1 === keys2){
//                 exists = true;
//                 break;
//             }
//         }
//         if(!exists){
//             return false;
//         }
//         exists = false;
//     }
//     return true;
// };