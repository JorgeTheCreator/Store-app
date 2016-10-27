// -------------------(Homework 12)

var mysql = require("mysql");
var prompt = require("prompt");

//  mysql connection
var connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "Bamazon"
});

// Connecting to the Bamazon Database
connection.connect(function(err){
    if(err){
    console.log('Error connecting to Db');
    return;
    }
    console.log('Connection established');

    var schema = {
        properties: {
            ID: {
            message: "\nPlease enter the ID of the product you would like to buy.",
            pattern: /^[0-9][0-9]$|^[0-9]$/,
            required: true
            },
            howMany: {
            message: "Please enter how many would you like to buy.",
            pattern: /^[0-9][0-9]$|^[0-9]$/,
            required: true

            }
        }
    };

    var schema2 = {
        properties: {
            AnotherPurchase: {
            message: "Would you like to buy another item?.",
            pattern: /(no|n|yes|y)/,
            required: true
            },
        }
    };

// Function stop to the app
var stopApp = function(){
    console.log("Your total is $"+totalCost);
}
// Function to start the app
var beginApp = function(){
    connection.query("SELECT * FROM Products", function(err, result) {
        if (err) throw err;
        return (getBamazonProducts(result));
      
      });
}

    // Function to display all of the products available for sale in a table
    var getBamazonProducts = function (products){
        console.log("Hi!, Welcome to Bamazon! Here are my products, their costs, and current stock.");
        for (var i = 0; i < products.length; i++) {
            var productsResults = "\r\n"+
            "\nItemID: " + products[i].ItemID+"\r\n"+
            "Product Description: " + products[i].ProductName+"\r\n"+
            "Department: " + products[i].DepartmentName+"\r\n"+
            "Price: $ "+ products[i].Price+"\r\n"+
            "Current Stock: " + products[i].StockQuantity;
            console.log(productsResults);
        }
        userSelectID();
    }

    // Function to get the user selection
    var userSelectID = function(){
        prompt.start();
        console.log("\nPlease enter the ID of the product you would like to buy.");

        prompt.get(schema, function (err, result) {
            if (err){
                console.log(err)
            }
            //console.log(result);
            var userChoiceID = parseInt(result.ID);
            var userChoiceHowMany = parseInt(result.howMany);
            // console.log("id=" + userChoiceID + " how many=" + userChoiceHowMany);

            // Function to check the inventory of an item
            var checkInventory = function(){
                connection.query('SELECT * FROM Products WHERE ItemID =' + userChoiceID, function(err, result) {
                    if (err) throw err;
                    //console.log(result);

                    var userWantsToBuy = userChoiceHowMany;
                    var productInventory = result[0].StockQuantity;
                    var productsPrice = result[0].Price;
                    var isInStock = productInventory - userWantsToBuy;
                    var totalCost= productsPrice * userWantsToBuy;
                    var stopApp = function(){
                        console.log("\nItem purchased: "+ result[0].ProductName +"\nYour total: $"+totalCost+"\nCurrently in stock: "+isInStock+"\nhave a nice day!");
                        
                        userSelectID();


                    };
                    if (userWantsToBuy > productInventory || productInventory === 0){
                        console.log("Insufficient quantity!"+"\r\n");
                        userSelectID();
                    } else {
                        console.log("\nThere are "+isInStock+" of "+result[0].ProductName+" in Stock");
                        console.log("You purchased "+ userWantsToBuy +" "+result[0].ProductName+"s at $"+ result[0].Price+" per item.");
                        console.log("Your total is $"+totalCost+"\n");
                        connection.query('UPDATE Products SET StockQuantity = '+isInStock+' WHERE ItemID ='+userChoiceID, function(err, result){
                        if (err) throw err;
                            connection.query('SELECT ItemID, ProductName, DepartmentName, Price, StockQuantity FROM products WHERE ItemID ='+userChoiceID, function(err, result){
                                //console.log(result);
                            }); 
                        });
                        prompt.get(schema2, function (err, result) {
                            if (err){
                                console.log(err)
                            }
                            //console.log(result);
                            var userAnswer = result.AnotherPurchase;
                            if (userAnswer === "n" || userAnswer === "no"){
                                stopApp();
                            }else{
                                beginApp();
                            }   
                        });
                    }
                  });
            };
            checkInventory();
        });
    }

// start the app
beginApp();
});