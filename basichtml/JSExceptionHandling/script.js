async function doCalculation() {
    try {
        const API_URl = "https://api.mathjs.org/v4/";

        const response = await fetch(API_URl);
        const data = await response.json();
        testingData(data);
    } catch (error) {
        alert("An error occurred:");
    }  finally {
        console.log("Calculation attempt completed.");
    }



function testingData(data) {
    try {
        console.log("Testing data:", data);
    }    catch (error) {
        throw error;
    }
}

}