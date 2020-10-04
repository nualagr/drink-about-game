describe("whatCanIDrink", function(){
    describe("Age tests", function(){
        it("should return 'Sorry. I can’t tell what drink because that age is incorrect!' if we don't supply a number greater than 0", function(){
            expect(ageTest(-1)).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        })
        it("should return 'Sorry. I can’t tell what drink because that age is incorrect!' if we supply the number 0", function(){
            expect(ageTest(0)).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        })
        it("should return 'Drink Toddy' if we supply a number between 0 and 14", function(){
            expect(ageTest(13)).toBe("Drink Toddy");
        })
        it("should return 'Drink Coke' if we supply a number between 13 and 18", function(){
            expect(ageTest(17)).toBe("Drink Coke");
        })
        it("should return 'Drink Beer' if we supply a number between 18 and 21",function(){
            expect(ageTest(18)).toBe("Drink Beer");
        })
        it("should return 'Drink Whiskey' if we supply a number between 20 and 130", function(){
            expect(ageTest(100)).toBe("Drink Whiskey");
        })
        it("should return 'Sorry. I can’t tell what drink because that age is incorrect!' if we supply a number outside of those ranges", function(){
            expect(ageTest(130)).toBe( "Sorry. I can’t tell what drink because that age is incorrect!");
        })
    })
})