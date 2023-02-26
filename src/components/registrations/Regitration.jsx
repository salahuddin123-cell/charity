import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import { FormControlLabel } from "@material-ui/core";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import toast, { Toaster } from "react-hot-toast";



const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const styles = {
  drawerWidth: {
    width: "50%",
    "@media (min-width: 780px)": {
      width: "80%",
    },
  },
};
const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

const Regitration = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const [age, setage] = useState(null);
  const [catergory, setcategory] = useState(1);
  const [stipendget, setstipend] = useState(null);
  const [membership, setmembership] = useState(null);
  const [personName, setPersonName] = React.useState([]);

  const onSubmit = async (data) => {
    handleNext();
    if (membership != null) {
      await axios
        .post("https://charity-cnyj.onrender.com/register/new", data)
        .then((res) => {
          if (res.status === 200) {
            alert("Welcome ,you have successfully registered.");
            axios
              .post("https://charity-cnyj.onrender.com/sendloginid", {
                Email: data.Email,
              })
              .then((res2) => {
                console.log("mail sent");
              });
            navigate("/");
          } else Promise.reject();
        })
        .catch((err) => console.log(err));
      //     setFormValues('')
    }
  };

  const refill = () => {
    setcategory(1);
    setstipend(null);
    setmembership(null);
    reset();
  };

  const handleNext = () => {
    let category = watch("Category");
    let stipend = watch("stipendget");
    if (category == "I am a student") {
      setcategory("student");
    }
    if (category == "I am an emoployee") {
      setcategory("employee");
    }
    if (category == "I am a Businessman") {
      setcategory("Businessman");
    }
    if (
      category ==
      "I am neither employess nor Businessman I have other source of income"
    ) {
      setcategory("noemployeebusiness");
    }
    if (category == "I am not a student and I am not earning") {
      setcategory("nostuentnoearning");
    }
    if (stipend == "Yes") {
      setstipend("Yes");
    }
    if (stipend == "No") {
      setstipend("No");
    }
    if (watch("Membershipscheme")) {
      setmembership(watch("Membershipscheme"));
    }
  };

  useEffect(() => {
    let ages = [];
    for (let i = 1; i < 100; i++) {
      ages.push(i);
    }
    setage(ages);
  }, []);

  return (
    <div className="register">
      <div className="img">
        <img src="/img/trustlogo.jpg" alt="notfound" />
      </div>
      <div className="form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Please fill the Membership form</h2>
          {catergory == 1 && (
            <Box
              component="form"
              sx={{
                "& > :not(style)": {
                  m: 1,
                  width: "50ch",
                  "@media (max-width: 820px)": {
                    width: "35ch",
                  },
                },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                error={errors.Email}
                id="outlined-basic"
                fullWidth
                {...register("Email", {
                  required: "This field is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "invalid email address",
                  },
                })}
                label="Email"
                variant="outlined"
                size="small"
                helperText={errors.Email?.message}
              />
              {/* {errors.Email && <p>{errors.Email.message}</p>} */}
              <TextField
                id="filled-basic"
                error={errors.FullName}
                {...register("FullName", {
                  required: "This field is required",
                })}
                label="Full Name"
                variant="outlined"
                size="small"
                helperText={errors.FullName?.message}
              />
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small">Age</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  error={errors.Age}
                  label="Age"
                  {...register("Age", { required: "This field is required" })}
                  helperText={errors.Age?.message}
                  defaultValue={20}
                >
                  {age?.map((e, i) => {
                    return <MenuItem value={e}>{e}</MenuItem>;
                  })}
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <TextField
                  id="standard-basic"
                  error={errors.MobileNumber}
                  type="number"
                  {...register("MobileNumber", {
                    required: "This field is required",
                  })}
                  label="Mobile number"
                  variant="outlined"
                  size="small"
                  helperText={errors.MobileNumber?.message}
                />
              </FormControl>
              <FormControl >
               <div className="select-wrapper">
               <select 
              placeholder="Sex"
              
                  {...register("Sex", { required: "This field is required" })} >
                    <option selected value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                  <label>Sex</label>
               </div>
             
                {/* <Select
               autoWidth
                  error={errors.Sex}
                  label="Sex"
                  defaultValue="Male"
                  {...register("Sex", { required: "This field is required" })}
                  helperText={errors.Sex?.message}
                >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                </Select> */}
                
           
              </FormControl>

              <FormControl sx={{ m: 1, minWidth: 80 }}>
              <div className="select-wrapper">
               <select 
              placeholder="Sex"
              
                  {...register("Married", { required: "This field is required" })} >
           <option value="Yes">Yes</option>
                  <option value="No">No</option>
                  </select>
                  <label>Are you married?</label>
               </div>
            
              </FormControl>
 

              <TextField
                id="outlined-basic"
                {...register("WhatsappNumber", {
                  required: "This field is required",
                })}
                label="WhatsApp number"
                type="number"
                error={errors.WhatsappNumber}
                helperText={errors.WhatsappNumber?.message}
                variant="outlined"
                size="small"
              />
              <TextField
                id="filled-basic"
                {...register("VoterId", {
                  required: "This field is required",
                  pattern: {
                    value: /^[A-Z]{3}[0-9]{7}$/i,
                    message: "invalid voter id",
                  },
                })}
                label="Voter id"
                error={errors.VoterId}
                helperText={errors.VoterId?.message}
                variant="outlined"
                size="small"
              />
              <TextField
                id="filled-basic"
                {...register("PresentAddress", {
                  required: "This field is required",
                })}
                label="Present Address"
                variant="outlined"
                error={errors.PresentAddress}
                helperText={errors.PresentAddress?.message}
                size="small"
              />
              <TextField
                id="filled-basic"
                {...register("PermanentAddress", {
                  required: "This field is required",
                })}
                label="Permanent Address"
                error={errors.PermanentAddress}
                helperText={errors.PermanentAddress?.message}
                size="small"
                variant="outlined"
              />
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <div className="select-wrapper">
               <select 
              placeholder="Sex"
              
                  {...register("ActiveVolunteer", { required: "This field is required" })} >
           <option value="Yes">Yes</option>
                  <option value="No">No</option>
                  </select>
                  <label>  Do you want to be an Active volunteer?</label>
               </div>
          
              </FormControl>

              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <div className="select-wrapper">
               <select 
             
              
                  {...register("Category", { required: "This field is required" })} >
      <option value="I am a student">I am a student</option>
                  <option value="I am an emoployee">
                    I am an emoployee
                  </option>
                  <option value="I am a Businessman">
                    I am a Businessman
                  </option>
                  <option value="I am neither employess nor Businessman I have other source of income">
                    I am neither employess nor Businessman I have other source
                    of income
                  </option>
                  <option value="I am not a student and I am not earning">
                    I am not a student and I am not earning
                  </option>
                  </select>
                  <label>  Which category describe you best?</label>
               </div>
                
              </FormControl>
            </Box>
          )}
          {catergory == "student" && stipendget == null && (
            <Box
              component="form"
              sx={{
                "& > :not(style)": {
                  m: 1,
                  width: "50ch",
                  "@media (max-width: 820px)": {
                    width: "35ch",
                  },
                },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                fullWidth
                error={errors.Course}
                {...register("Course", { required: "This field is required" })}
                label="Please mention your course"
                helperText={errors.Course?.message}
                variant="outlined"
              />

              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <div className="select-wrapper">
               <select 
             
              
                  {...register("stipendget", { required: "This field is required" })} >
           <option value="Yes">Yes</option>
                  <option value="No">No</option>
                  </select>
                  <label> Are you getting stipend/fellowship on monthly basis?</label>
               </div>
                
              </FormControl>
            </Box>
          )}
          {catergory == "student" &&
            stipendget == "Yes" &&
            membership == null && (
              <div>
                <fieldset style={{ border: "none" }}>
                  <legend>
                    Which membership scheme do you want to opt for?
                  </legend>

                  <div>
                    <input
                      type="radio"
                      value="200"
                      {...register("Membershipscheme", {
                        required: "This field is required",
                      })}
                      defaultChecked
                    />
                    <label for="huey">200</label>
                  </div>

                  <div>
                    <input
                      type="radio"
                      value="500"
                      {...register("Membershipscheme")}
                    />
                    <label for="dewey">300</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      value="500"
                      {...register("Membershipscheme")}
                    />
                    <label for="dewey">500</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      value="700"
                      {...register("Membershipscheme")}
                    />
                    <label for="dewey">700</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      value="1000"
                      {...register("Membershipscheme")}
                    />
                    <label for="dewey">1000</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      value="More than 1000"
                      {...register("Membershipscheme")}
                    />
                    <label for="dewey">More than 1000</label>
                  </div>
                </fieldset>
              </div>
            )}
          {catergory == "student" &&
            stipendget == "No" &&
            membership == null && (
              <div>
                <fieldset style={{ border: "none" }}>
                  <legend>
                    Which membership scheme do you want to opt for?
                  </legend>
                  <div>
                    <input
                      type="radio"
                      value="100"
                      defaultChecked
                      error={errors.Membershipscheme}
                      {...register("Membershipscheme", {
                        required: "This field is required",
                      })}
                      helperText={errors.Membershipscheme?.message}
                    />
                    <label for="huey">100</label>
                  </div>

                  <div>
                    <input
                      type="radio"
                      value="200"
                      {...register("Membershipscheme")}
                    />
                    <label for="huey">200</label>
                  </div>

                  <div>
                    <input
                      type="radio"
                      value="300"
                      {...register("Membershipscheme")}
                    />
                    <label for="dewey">300</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      value="500"
                      {...register("Membershipscheme")}
                    />
                    <label for="dewey">500</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      value="700"
                      {...register("Membershipscheme")}
                    />
                    <label for="dewey">700</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      value="1000"
                      {...register("Membershipscheme")}
                    />
                    <label for="dewey">1000</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      value="More than 1000"
                      {...register("Membershipscheme")}
                    />
                    <label for="dewey">More than 1000</label>
                  </div>
                </fieldset>
              </div>
            )}
          {membership != null && (
            <>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": {
                    m: 1,
                    width: "50ch",
                    "@media (max-width: 820px)": {
                      width: "35ch",
                    },
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <p>I hereby declare that:</p>
                <FormControlLabel
                  control={
                    <Checkbox
                      style={{ color: errors.iammuslim && "red" }}
                      {...register("iammuslim", {
                        required: "this field is required",
                      })}
                      value="1.I am a Muslim by faith, Alhamdulillah."
                      error={errors.iammuslim}
                    />
                  }
                  label="1.I am a Muslim by faith, Alhamdulillah."
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      style={{ color: errors.careofummah && "red" }}
                      {...register("careofummah", {
                        required: "this field is required",
                      })}
                      value="2. My intention of joining ‘The Life Care Trust’ is to serve the Ummah, only for the sake of Allah Subhanahu Wa Ta'ala."
                    />
                  }
                  label="2. My intention of joining ‘The Life Care Trust’ is to serve the Ummah, only for the sake of Allah Subhanahu Wa Ta'ala."
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      style={{ color: errors.obeyrules && "red" }}
                      {...register("obeyrules", {
                        required: "this field is required",
                      })}
                      value="3. I will abide by the rules and regulations of ‘The Life Care Trust’."
                    />
                  }
                  label="3. I will abide by the rules and regulations of ‘The Life Care Trust’."
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      style={{ color: errors.noobjection && "red" }}
                      {...register("noobjection", {
                        required: "this field is required",
                      })}
                      value="4. I will not object any decision taken by  ‘The Life Care Trust’ as long as it is not violating the Shariah."
                    />
                  }
                  label="4. I will not object any decision taken by  ‘The Life Care Trust’ as long as it is not violating the Shariah."
                />
              </Box>
            </>
          )}
          {/* second */}
          {catergory == "employee" &&
            stipendget == null &&
            membership == null && (
              <Box
                component="form"
                sx={{
                  "& > :not(style)": {
                    m: 1,
                    width: "50ch",
                    "@media (max-width: 820px)": {
                      width: "35ch",
                    },
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  fullWidth
                  {...register("Highestqualification", {
                    required: "This field is required",
                  })}
                  label="Highest Qualification"
                  variant="outlined"
                  helperText={errors.Highestqualification?.message}
                  error={errors.Highestqualification}
                />
                <TextField
                  id="outlined-basic"
                  fullWidth
                  {...register("Designation", {
                    required: "This field is required",
                  })}
                  label="Designation/Occupation"
                  variant="outlined"
                  helperText={errors.Designation?.message}
                  error={errors.Designation}
                />
                <TextField
                  id="outlined-basic"
                  fullWidth
                  {...register("Employmentdetails", {
                    required: "This field is required",
                  })}
                  label="Employment details."
                  variant="outlined"
                  helperText={errors.Employmentdetails?.message}
                  error={errors.Employmentdetails}
                />

                <div>
                  <fieldset style={{ border: "none" }}>
                    <legend>
                      Which membership scheme do you want to opt for?
                    </legend>
                    <div>
                      <input
                        type="radio"
                        value="300"
                        defaultChecked
                        {...register("Membershipscheme")}
                      />
                      <label for="dewey">300</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        value="500"
                        {...register("Membershipscheme")}
                      />
                      <label for="dewey">500</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        value="700"
                        {...register("Membershipscheme")}
                      />
                      <label for="dewey">700</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        value="1000"
                        {...register("Membershipscheme")}
                      />
                      <label for="dewey">1000</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        value="1000"
                        {...register("Membershipscheme")}
                      />
                      <label for="dewey">2000</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        value="More than 1000"
                        {...register("Membershipscheme")}
                      />
                      <label for="dewey">More than 2000</label>
                    </div>
                  </fieldset>
                </div>
              </Box>
            )}
          {catergory == "Businessman" &&
            stipendget == null &&
            membership == null && (
              <Box
                component="form"
                sx={{
                  "& > :not(style)": {
                    m: 1,
                    width: "50ch",
                    "@media (max-width: 820px)": {
                      width: "35ch",
                    },
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  fullWidth
                  {...register("Highestqualification", {
                    required: "This field is required",
                  })}
                  label="Highest Qualification"
                  variant="outlined"
                  helperText={errors.Highestqualification?.message}
                  error={errors.Highestqualification}
                />
                <TextField
                  id="outlined-basic"
                  fullWidth
                  {...register("Designation", {
                    required: "This field is required",
                  })}
                  label="Designation/Occupation"
                  variant="outlined"
                  helperText={errors.Highestqualification?.message}
                  error={errors.Highestqualification}
                />
                <TextField
                  id="outlined-basic"
                  fullWidth
                  {...register("Businessdetails", {
                    required: "This field is required",
                  })}
                  label="Business details."
                  variant="outlined"
                  helperText={errors.Businessdetails?.message}
                  error={errors.Businessdetails}
                />

                <div>
                  <fieldset style={{ border: "none" }}>
                    <legend>
                      Which membership scheme do you want to opt for?
                    </legend>

                    <div>
                      <input
                        type="radio"
                        value="300"
                        defaultChecked
                        {...register("Membershipscheme")}
                      />
                      <label for="dewey">300</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        value="500"
                        {...register("Membershipscheme")}
                      />
                      <label for="dewey">500</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        value="700"
                        {...register("Membershipscheme")}
                      />
                      <label for="dewey">700</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        value="1000"
                        {...register("Membershipscheme")}
                      />
                      <label for="dewey">1000</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        value="1000"
                        {...register("Membershipscheme")}
                      />
                      <label for="dewey">2000</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        value="More than 1000"
                        {...register("Membershipscheme")}
                      />
                      <label for="dewey">More than 2000</label>
                    </div>
                  </fieldset>
                </div>
              </Box>
            )}
          {catergory == "noemployeebusiness" &&
            stipendget == null &&
            membership == null && (
              <Box
                component="form"
                sx={{
                  "& > :not(style)": {
                    m: 1,
                    width: "50ch",
                    "@media (max-width: 820px)": {
                      width: "35ch",
                    },
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  fullWidth
                  {...register("Highestqualification", {
                    required: "This field is required",
                  })}
                  label="Highest Qualification"
                  helperText={errors.Highestqualification?.message}
                  error={errors.Highestqualification}
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  fullWidth
                  {...register("Designation", {
                    required: "This field is required",
                  })}
                  label="Designation/Occupation"
                  variant="outlined"
                  helperText={errors.Designation?.message}
                  error={errors.Designation}
                />
                <TextField
                  id="outlined-basic"
                  fullWidth
                  {...register("Occupationdetails", {
                    required: "This field is required",
                  })}
                  label="Details of your occupation"
                  variant="outlined"
                  helperText={errors.Occupationdetails?.message}
                  error={errors.Occupationdetails}
                />

                <div>
                  <fieldset style={{ border: "none" }}>
                    <legend>
                      Which membership scheme do you want to opt for?
                    </legend>

                    <div>
                      <input
                        type="radio"
                        value="200"
                        defaultChecked
                        {...register("Membershipscheme")}
                      />
                      <label for="dewey">200</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        value="300"
                        {...register("Membershipscheme")}
                      />
                      <label for="dewey">300</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        value="500"
                        {...register("Membershipscheme")}
                      />
                      <label for="dewey">500</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        value="700"
                        {...register("Membershipscheme")}
                      />
                      <label for="dewey">700</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        value="1000"
                        {...register("Membershipscheme")}
                      />
                      <label for="dewey">1000</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        value="1200"
                        {...register("Membershipscheme")}
                      />
                      <label for="dewey">1200</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        value="1500"
                        {...register("Membershipscheme")}
                      />
                      <label for="dewey">1500</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        value="1500"
                        {...register("Membershipscheme")}
                      />
                      <label for="dewey">monthly more than 1500</label>
                    </div>
                  </fieldset>
                </div>
              </Box>
            )}
          {catergory == "nostuentnoearning" &&
            stipendget == null &&
            membership == null && (
              <Box
                component="form"
                sx={{
                  "& > :not(style)": {
                    m: 1,
                    width: "50ch",
                    "@media (max-width: 820px)": {
                      width: "35ch",
                    },
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  fullWidth
                  {...register("Highestqualification", {
                    required: "This field is required",
                  })}
                  label="Highest Qualification"
                  variant="outlined"
                  helperText={errors.Highestqualification?.message}
                  error={errors.Highestqualification}
                />
                <TextField
                  id="outlined-basic"
                  fullWidth
                  {...register("Designation", {
                    required: "This field is required",
                  })}
                  label="Designation/Occupation"
                  variant="outlined"
                  helperText={errors.Designation?.message}
                  error={errors.Designation}
                />
                <TextField
                  id="outlined-basic"
                  fullWidth
                  {...register("occupationdetail", {
                    required: "This field is required",
                  })}
                  label="Details of your occupation. (If applicable)"
                  variant="outlined"
                  helperText={errors.occupationdetail?.message}
                  error={errors.occupationdetail}
                />

                <div>
                  <fieldset style={{ border: "none" }}>
                    <legend>
                      Which membership scheme do you want to opt for?
                    </legend>

                    <div>
                      <input
                        type="radio"
                        value="100"
                        defaultChecked
                        {...register("Membershipscheme")}
                      />
                      <label for="dewey">100</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        value="200"
                        {...register("Membershipscheme")}
                      />
                      <label for="dewey">200</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        value="300"
                        {...register("Membershipscheme")}
                      />
                      <label for="dewey">300</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        value="500"
                        {...register("Membershipscheme")}
                      />
                      <label for="dewey">500</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        value="700"
                        {...register("Membershipscheme")}
                      />
                      <label for="dewey">700</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        value="1000"
                        {...register("Membershipscheme")}
                      />
                      <label for="dewey">1000</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        value="More than 1000"
                        {...register("Membershipscheme")}
                      />
                      <label for="dewey">More than 2000</label>
                    </div>
                  </fieldset>
                </div>
              </Box>
            )}
          <div className="submitdiv">
            <button className="submit" type="submit">
              {membership == null ? "next" : "submit"}
            </button>
            {catergory != 1 && (
              <a className="refill" onClick={refill}>
                reset
              </a>
            )}
          </div>

          <br />
          <a className="tohome">
            <Link style={{ textDecoration: "none" }} to="/">
              Back to home page
            </Link>
          </a>
        </form>
      </div>
    </div>
  );
};

export default Regitration;
