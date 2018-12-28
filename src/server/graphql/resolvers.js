module.exports = 
{
    stall: async function (stallTime = 3000) {
        await new Promise(resolve => setTimeout(resolve, stallTime));
    },

    hello: function() { 
        return {    
            text: 'Hello World',
            views: 1234
        }
    },

    createEntity: async function (args, req) {
        const firstname = args.userInput.firstname;
        const lastname =  args.userInput.lastname;
        const position =  args.userInput.position;

        console.log(`FirstName: ${firstname} LastName: ${lastname} Position: ${position}`);

        //TODO::add logic to do CRUD persistance
        await stall();

        //return the type defined in the schema
        return new {
            _id: 'xxxxxxx-32432-324323',
            firstname: 'Peyton',
            lastname: 'Manning'
        };
    }
};