export const userListController = async (req, res, next) => {
  try {
    // Simulating a user list retrieval from a database
    const users = [
      { id: 1, username: 'user1', email: 'ab@gmail.com',role:'Doctor',shift:'Morning',contact:'1234567890'},
      { id: 5, username: 'user5', email:'gh@gmail.com',role:'Technician',shift:'Morning',contact:'1234567890'},
      { id: 2, username: 'user2',email:'bc@gmail.com',role:'Nurse',shift:'Morning',contact:'1234567890'},
      { id: 5, username: 'user5', email:'gh@gmail.com',role:'Technician',shift:'Morning',contact:'1234567890'},
      { id: 3, username: 'user3', email:'de@gmail.com',role:'Doctor',shift:'Afternoon',contact:'1234567890'},
      { id: 4, username: 'user4', email:'ef@gmail.com',role:'Nurse',shift:'Night',contact:'1234567890'},
      { id: 5, username: 'user5', email:'gh@gmail.com',role:'Technician',shift:'Morning',contact:'1234567890'},
    ]
    res.status(200).json({ message: 'User list retrieved successfully', users });
}
catch (err) {
    // Handle any errors that occur during the user list retrieval
    console.error('Error retrieving user list:', err);
    res.status(500).json({ message: 'Internal server error' });
    next(err);
  }
}


