export const findLightByPin = (array, oldPin) => {

    for(let i = 0; i < array.length; i++){
        let currentLight = array[i];

        if(currentLight['pin'] === oldPin){
            return {
                light: currentLight,
                index: i
            }
        }
    }

    return 'error';
};