function promise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Hey, eu sou uma Promise!");
            resolve();
        }, 2000)
    })
}

export default async function () {
    await promise();
    setTimeout(() => {
        console.log("A promise terminou tem 4 segundos!");
    },2000);

}