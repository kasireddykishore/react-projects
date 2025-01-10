

import { useEffect, useState } from "react";
import "../components/login.css";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(
    sessionStorage.getItem("loggedIn") === "true"
  );
  const [loginErrors, setLoginErrors] = useState({
    email: "",
    password: "",
  });

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleLoginSubmit = () => {
    const newLoginErrors = {
      email: "",
      password: "",
    };
    let valid = true;

    if (!email.trim()) {
      newLoginErrors.email = "Email is required.";
      valid = false;
    } else if (!emailPattern.test(email)) {
      newLoginErrors.email = "Enter a valid email address.";
      valid = false;
    }

    if (!password.trim()) {
      newLoginErrors.password = "Password is required.";
      valid = false;
    } else if (password.length < 6) {
      newLoginErrors.password = "Password must be at least 6 characters.";
      valid = false;
    }

    setLoginErrors(newLoginErrors);

    if (valid) {
      setLoggedIn(true);
      sessionStorage.setItem("loggedIn", "true");
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    sessionStorage.clear();
  };

  const renderLoginForm = () => (
    <div className="w-25 m-auto mt-5 bg-light bg-gradient shadow-sm p-3 mb-5 bg-dark rounded text-light">
      <h1 className="text-primary text-center">Login</h1>
      <div className="m-2">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {loginErrors.email && (
          <span className="text-danger">{loginErrors.email}</span>
        )}
      </div>
      <div className="mt-3 m-2">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {loginErrors.password && (
          <span className="text-danger">{loginErrors.password}</span>
        )}
      </div>
      <div className="mt-3 m-2">
        <button className="btn btn-primary w-100" onClick={handleLoginSubmit}>
          Login
        </button>
      </div>
    </div>
  );

  return loggedIn ? (
    <CreateForm setLoggedIn={handleLogout} />
  ) : (
    renderLoginForm()
  );
}

function CreateForm({ setLoggedIn }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [gender, setGender] = useState("");
  const [department, setDepartment] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(
    sessionStorage.getItem("submitted") === "true"
  );
  const [dataList, setDataList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(
    Number(sessionStorage.getItem("currentPage")) || 1
  );
  const rowsPerPage = 3;
  const totalPages = Math.ceil(dataList.length / rowsPerPage);

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const mobilePattern = /^[0-9]{10}$/;

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    mobile: "",
    gender: "",
    department: "",
  });

  useEffect(() => {
    const storedData = sessionStorage.getItem("dataList");
    if (storedData) {
      setDataList(JSON.parse(storedData));
    }
  }, []);

  const saveToSessionStorage = (updatedData) => {
    sessionStorage.setItem("dataList", JSON.stringify(updatedData));
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    sessionStorage.setItem("currentPage", newPage);
  };

  const handleSubmit = () => {
    let valid = true;
    const newErrors = {
      name: "",
      email: "",
      mobile: "",
      gender: "",
      department: "",
    };

    if (!name.trim()) {
      newErrors.name = "Enter your name";
      valid = false;
    } else if (!/^[A-Za-z\s]+$/.test(name)) {
      newErrors.name = "Name can only contain letters and spaces.";
      valid = false;
    }

    if (!email.trim()) {
      newErrors.email = "Enter your email address";
      valid = false;
    } else if (!emailPattern.test(email)) {
      newErrors.email = "Enter a valid email address";
      valid = false;
    }

    if (!mobile.trim()) {
      newErrors.mobile = "Enter your mobile number";
      valid = false;
    } else if (!mobilePattern.test(mobile)) {
      newErrors.mobile = "Enter a valid 10-digit mobile number";
      valid = false;
    }

    if (!gender) {
      newErrors.gender = "Select your gender";
      valid = false;
    }

    if (!department) {
      newErrors.department = "Select your department";
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
        sessionStorage.setItem("submitted", "true");

        const updatedData = [...dataList];
        const newData = { name, email, mobile, gender, department };

        if (editIndex !== null) {
          updatedData[editIndex] = newData;
          setEditIndex(null);
        } else {
          updatedData.push(newData);
        }

        setDataList(updatedData);
        saveToSessionStorage(updatedData);

        setName("");
        setEmail("");
        setMobile("");
        setGender("");
        setDepartment("");
      }, 2000);
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    sessionStorage.clear();
  };

  const handleDelete = (index) => {
    const updatedData = dataList.filter((_, i) => i !== index);
    setDataList(updatedData);
    saveToSessionStorage(updatedData);

    if (updatedData.length === 0) {
      setCurrentPage(1);
    } else if (
      currentPage > 1 &&
      updatedData.length <= (currentPage - 1) * rowsPerPage
    ) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleEdit = (index) => {
    const entry = dataList[index];
    setName(entry.name);
    setEmail(entry.email);
    setMobile(entry.mobile);
    setGender(entry.gender);
    setDepartment(entry.department);
    setEditIndex(index);
    setSubmitted(false);
    sessionStorage.setItem("submitted", "false");
  };

  const displayedData = dataList.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const renderPagination = () => (
    <div className="pagination-controls mt-3 text-center">
      <button
        className="btn btn-secondary m-1"
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        Previous
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          className={`btn m-1 ${
            currentPage === index + 1 ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <button
        className="btn btn-secondary m-1"
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );

  return (
    <div>
      {loading ? (
        <div className="loding">Loading...</div>
      ) : submitted ? (
        <div className="w-75 m-auto mt-5 bg-light bg-gradient">
          <h1 className="text-primary text-center">Data</h1>
          {dataList.length === 0 ? (
            <div className="text-center">
              <img src="https://tse3.mm.bing.net/th?id=OIP.75HQ-yXgxZdKfsvozxMrOQHaF7&pid=Api&P=0&h=180"alt="no data"/>
              <p className="text-muted">No data available. Please add entries.</p>
            </div>
          ) : (
            <div>
              <table className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>E-Mail</th>
                    <th>Mobile</th>
                    <th>Gender</th>
                    <th>Department</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {displayedData.map((entry, index) => (
                    <tr key={index}>
                      <td>{entry.name}</td>
                      <td>{entry.email}</td>
                      <td>{entry.mobile}</td>
                      <td>{entry.gender}</td>
                      <td>{entry.department}</td>
                      <td>
                        <button
                          className="btn btn-warning m-2"
                          onClick={() =>
                            handleEdit(index + (currentPage - 1) * rowsPerPage)
                          }
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-danger m-2"
                          onClick={() =>
                            handleDelete(index + (currentPage - 1) * rowsPerPage)
                          }
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {renderPagination()}
            </div>
          )}
          <div className="d-flex justify-content-between">
            <button
              className="btn btn-primary addbtn w-25"
              onClick={() => {
                setSubmitted(false);
                sessionStorage.setItem("submitted", "false");
              }}
            >
              + Add New
            </button>
            <button className="btn btn-warning m-3" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      ) : (
        <div className="w-25 m-auto mt-5 bg-light bg-gradient shadow-sm p-3 mb-5 bg-dark rounded text-light">
          <h1 className="text-primary text-center">Create Form</h1>
          <div className="m-2">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <span className="text-danger">{errors.name}</span>}
          </div>
          <div className="mt-3 m-2">
            <label>Email</label>
            <input
              type="text"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <span className="text-danger">{errors.email}</span>}
          </div>
          <div className="mt-3 m-2">
            <label>Mobile</label>
            <input
              type="text"
              className="form-control"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            {errors.mobile && (
              <span className="text-danger">{errors.mobile}</span>
            )}
          </div>
          <div className="mt-3 m-2">
  <label>Gender</label>
  <div>
    <input
      type="radio"
      name="gender"
      value="Male"
      checked={gender === "Male"}
      onChange={(e) => setGender(e.target.value)}
    /> Male
    <input
      type="radio"
      name="gender"
      value="Female"
      checked={gender === "Female"}
      onChange={(e) => setGender(e.target.value)}
      className="ms-3 m-2"
    /> Female
  </div>
  {errors.gender && <span className="text-danger">{errors.gender}</span>}
  </div>
          <div className="mt-3 m-2">
            <label>Department</label>
            <select
              className="form-control"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            >
              <option value="">-- Select Department --</option>
              <option value="HR">Developer</option>
              <option value="HR">team lead</option>
              <option value="HR">HR</option>
              <option value="Marketing">Marketing</option>
              <option value="Finance">Finance</option>
              <option value="Engineering">Engineering</option>
            </select>
            {errors.department && (
              <span className="text-danger">{errors.department}</span>
            )}
          </div>
          <div className="mt-3 m-2">
            <button
              className="btn btn-primary w-100"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "Submitting..." : editIndex !== null ? "Update" : "Submit"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}