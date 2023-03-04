const {sequelize} = require('./db')
const {User, Board, Cheese} = require('./models/index');

describe("User, Board, and Cheese models", () => {

    beforeEach(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    });


    // Tests to check if tables are created and can insert data
    test("Can create User", async () => {
        const testUser = await User.create({name: "Johnny", email: "Johnny@123.com"})

        expect(testUser.name).toBe("Johnny")
    })

    test("Can create Board", async () => {
        const testBoard = await Board.create({type: "wood", description: "A wooden board", rating: 3})

        expect(testBoard.rating).toBe(3)
    })

    test("Can create Cheese", async () => {
        const testCheese = await Cheese.create({title: "Cheese", description: "A block of yellow dairy"})

        expect(testCheese.title).toBe("Cheese")
    })



    // Multiple Boards can be added to a User
    test("Can add 2 boards to 1 user", async () => {
        const testUser = await User.create({name: "Johnny", email: "Johnny@123.com"})

        const testBoard1 = await Board.create({type: "wood", description: "A wooden board", rating: 5})
        const testBoard2 = await Board.create({type: "wood", description: "A wooden board", rating: 3})

        await testUser.addBoards(testBoard1)
        await testUser.addBoards(testBoard2)

        const findUsers = await testUser.getBoards()

        expect(findUsers.length).toBe(2)

    })

})