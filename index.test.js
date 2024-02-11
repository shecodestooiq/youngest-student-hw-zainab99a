const showYoungestStudent = require('./index');

describe('showYoungestStudent function', () => {
    test('should correctly identify and display the name of the youngest student', () => {
        // Student-defined array
        const userDefinedStudents = [
            { name: 'Alice', age: 25 },
            { name: 'Bob', age: 2 },
            { name: 'Charlie', age: 21 },
        ];

        // Mock console.log
        const mockLog = jest.spyOn(console, 'log').mockImplementation(() => { });

        showYoungestStudent(userDefinedStudents);

        // Find the expected youngest student based on the user's input
        const expectedYoungest = userDefinedStudents.reduce((youngest, student) => {
            return student.age < youngest.age ? student : youngest;
        }, userDefinedStudents[0]);

        // Expect console.log to have been called with the correct output
        expect(mockLog).toHaveBeenCalledWith(expectedYoungest.name);

        // Restore the original console.log
        mockLog.mockRestore();
    });

    test('should handle an empty array of students', () => {
        // Mock console.log
        const mockLog = jest.spyOn(console, 'log').mockImplementation(() => { });

        showYoungestStudent([]);

        // Expect console.log to have been called with the correct output
        expect(mockLog).toHaveBeenCalledWith('No students provided.');

        // Restore the original console.log
        mockLog.mockRestore();
    });
});
