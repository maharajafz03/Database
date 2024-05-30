const User = require("./user"); 
const connectDB = require("./DBconfig")

connectDB()

async function main() {
    
    try {
        // Create a new user
        const data = await User.create({ 
            name: "nandy", 
            age: 23, 
            email: "babycorn43@dmail.eth", 
            address:{
                street:"LA",
                city:"NYC"}
            });
        // User.name = "nandy"
        console.log(data);
    } 
    catch (error) {
        console.error("Error creating user:", error);
    }
}

// Call the main function to execute the code
 main();




