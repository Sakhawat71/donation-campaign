
const getStordDonationData = () => {
    const stordDontetionData = localStorage.getItem('donetion-data');
    if(stordDontetionData){
        return JSON.parse(stordDontetionData);
    }
    return [];
}

const saveDonationData = id =>{
    const stordDontetionData = getStordDonationData();
    const exist = stordDontetionData.find(donateId => donateId === id)

    if(!exist){
        stordDontetionData.push(id)
        localStorage.setItem('donetion-data',JSON.stringify(stordDontetionData))
    }
}

export {getStordDonationData,saveDonationData}