const jsonString = `
[
  {
    "id": 1,
    "name": "John Smith",
    "phone": "02 9988 2211",
    "departmentId": 1,
    "street": "1 Code Lane",
    "city": "Javaville",
    "state": "NSW",
    "zip": "0100",
    "country": "Australia",
    "department": {
      "id": 1,
      "name": "Information Communications Technology"
    }
  },
  {
    "id": 2,
    "name": "Sue White",
    "phone": "03 8899 2255",
    "departmentId": 2,
    "street": "16 Bit way",
    "city": "Byte Cove",
    "state": "QLD",
    "zip": "1101",
    "country": "Australia",
    "department": {
      "id": 2,
      "name": "Finance"
    }
  },
  {
    "id": 3,
    "name": "Bob O' Bits",
    "phone": "05 7788 2255",
    "departmentId": 3,
    "street": "8 Silicon Road",
    "city": "Cloud Hills",
    "state": "VIC",
    "zip": "1001",
    "country": "Australia",
    "department": {
      "id": 3,
      "name": "Marketing"
    }
  },
  {
    "id": 4,
    "name": "Mary Blue",
    "phone": "06 4455 9988",
    "departmentId": 2,
    "street": "4 Processor Boulevard",
    "city": "Appletson",
    "state": "NT",
    "zip": "1010",
    "country": "Australia",
    "department": {
      "id": 2,
      "name": "Finance"
    }
  },
  {
    "id": 5,
    "name": "Mick Green",
    "phone": "02 9988 1122",
    "departmentId": 0,
    "street": "700 Bandwidth Street",
    "city": "Bufferland",
    "state": "NSW",
    "zip": "0110",
    "country": "Australia",
    "department": {
      "id": 0,
      "name": "General"
    }
  },
  {
    "id": 6,
    "name": "Sarah Brown",
    "phone": "04 1234 5678",
    "departmentId": 1,
    "street": "24 Byte Avenue",
    "city": "Codeville",
    "state": "NSW",
    "zip": "2000",
    "country": "Australia",
    "department": {
      "id": 1,
      "name": "Information Communications Technology"
    }
  },
  {
    "id": 7,
    "name": "Daniel Lee",
    "phone": "04 9876 5432",
    "departmentId": 1,
    "street": "8 Processor Lane",
    "city": "Dataville",
    "state": "VIC",
    "zip": "3000",
    "country": "Australia",
    "department": {
      "id": 1,
      "name": "Information Communications Technology"
    }
  },
  {
    "id": 8,
    "name": "Olivia White",
    "phone": "04 5555 1234",
    "departmentId": 1,
    "street": "16 Bit Road",
    "city": "Bitburg",
    "state": "QLD",
    "zip": "4000",
    "country": "Australia",
    "department": {
      "id": 1,
      "name": "Information Communications Technology"
    }
  },
  {
    "id": 9,
    "name": "James Smith",
    "phone": "04 3333 8888",
    "departmentId": 1,
    "street": "32 Code Lane",
    "city": "Javaville",
    "state": "NSW",
    "zip": "0100",
    "country": "Australia",
    "department": {
      "id": 1,
      "name": "Information Communications Technology"
    }
  },
  {
    "id": 10,
    "name": "Lily Davis",
    "phone": "04 7777 9999",
    "departmentId": 1,
    "street": "4 Processor Street",
    "city": "Appletson",
    "state": "NT",
    "zip": "1010",
    "country": "Australia",
    "department": {
      "id": 1,
      "name": "Information Communications Technology"
    }
  }
]
`;

const database = JSON.parse(jsonString);

// Function to get all records from the database
function getAllRecords() {
  return database;
}

// Function to add a new record to the database
function addRecord(newRecord) {
  newRecord.id = getNextId(); // Assign a unique ID
  database.push(newRecord);
}

// Function to update a record in the database by ID
function updateRecord(recordId, updatedData) {
  const recordIndex = database.findIndex((record) => record.id === recordId);
  if (recordIndex !== -1) {
    database[recordIndex] = { ...database[recordIndex], ...updatedData };
  }
}

// Function to delete a record from the database by ID
function deleteRecord(recordId) {
  const recordIndex = database.findIndex((record) => record.id === recordId);
  if (recordIndex !== -1) {
    database.splice(recordIndex, 1);
  }
}

// Function to generate the next unique ID
function getNextId() {
  const ids = database.map((record) => record.id);
  return ids.length > 0 ? Math.max(...ids) + 1 : 1;
}

// Export the functions to be used in other parts of your React Native app
export default {
  getAllRecords,
  addRecord,
  updateRecord,
  deleteRecord,
};

// Example usage in your React Native components:
// import databaseFunctions from './databasefile.js';

// You can now use the databaseFunctions to access and modify your data.
