export const sampleAction = (user) => {
    console.log("sampleAction was triggered: ", user.first);
    return {
        type: 'SAMPLE_ACTION',
        payload: user
    }
};
