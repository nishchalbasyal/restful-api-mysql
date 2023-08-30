const { Employee } = require("../models");
const bcrypt = require("bcrypt")

// For Fetching All Data From Database
const getEmployees = async (req, res) => {
  try {
    const users = await Employee.findAll();

    // To Hide Sensitive Data Like Password
    const employee = users.map((user) => {
      const { id, name, email, phone } = user;
      return { id, name, email, phone };
    });

    res.status(200).json(employee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

//For Getting Single User Info From Database
const getSingleEmployees = async (req, res) => {
  try {
    const users = await Employee.findOne({ where: { id: req.params.id } });
    users.hashpassword = undefined 
    users.createdAt = undefined 
    users.updatedAt = undefined
  
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

//For Updating
const updateEmployees = async (req, res) => {
  try {
    const {name,email,password,phone}= req.body;

    const updatedData = { name, email, phone };

    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      updatedData.hashpassword = hashedPassword;
    }


    const users = await Employee.update(updatedData, { where: { id: req.params.id } });
    res.status(200).json({ message: "update successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

//For  Creating new Employee records
const createEmployee = async (req, res) => {
  try {
    const data = req.body;
    console.log(data);

    const newEmployee = await Employee.build(data);
    newEmployee.hashpassword =  bcrypt.hashSync(req.body.password,10)
    await newEmployee.save()

    res.status(200).json(newEmployee);
  } catch (error) {
    console.error(error);

    res.status(500).json({ error: "Something went wrong" });
  }
};

//For Removing Data From Database
const deleteEmployees = async (req, res) => {
  try {
    console.log(req.params.email);
    const users = await Employee.destroy({ where: { id: req.params.id } });
    res.status(200).json({ message: "deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

module.exports = {
  getEmployees,
  createEmployee,
  getSingleEmployees,
  deleteEmployees,
  updateEmployees,
};
