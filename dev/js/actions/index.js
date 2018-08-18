export const sampleAction = (payload) => {
    console.log("sampleAction was triggered: ", payload);
    return {
        type: 'SAMPLE_ACTION',
        payload: payload
    }
};
