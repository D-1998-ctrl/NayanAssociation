import { useState } from "react";


import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import axios from "axios";



export default function SupplierMaster ()  {

    const [comapnycode, comapnycodechange] = useState();
    const [comapnyname, companynamechange] = useState("");
    const [address1, address1change] = useState("");
    const [address2, address2change] = useState("");
    const [city, citychange] = useState("");
    const [state, statechange] = useState('');

    const [mobile, setMobile] = useState('');
    const [isError, setIsError] = useState(false);
    const pattern = new RegExp(/^\d{1,10}$/);
    
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null)

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    const handleChange = event => {
        setEmail(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();

        setError(null);

        if (isValidEmail(email)) {
            console.log('The email is valid');
        } else {
            setError('Email is invalid');
        }
    }

    const [contactperson, contactpersonchange] = useState("");
    const [gstno, gstnochahge] = useState();
    const [pan, panchange] = useState();




    const handlesubmit = (e) => {
        e.preventDefault();
        const supplierdata = { comapnycode, comapnyname, address1, address2, city, state, mobile, email, contactperson, gstno, pan };


        axios.get("https://peapi.microtechsolutions.co.in/php/getcity.php", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(supplierdata)
        }).then
            ((result) => {
                alert('Saved successfully.')
                console.log(result)

            })
            .catch((err) => {
                console.log(err.message)
            })

    }

    return (
        <div className="d-flex">
            <div>
                <Sidebar />
            </div>
            <div
                style={{
                    flex: "1 1 auto",
                    display: "flex",
                    flexFlow: "column",
                    height: "100vh",
                    overflow: "hidden",
                }}
            >
                <Navbar />
                <div style={{ height: "100%" }}>
                    <div
                        style={{
                            padding: "20px 5%",
                            height: "calc(100% - 64px)",
                            overflow: "scroll",
                            background: "whitesmoke",
                        }}
                    >
                        <div
                            style={{
                                display: "grid",
                                background: "white",
                                gridTemplateColumns: "repeat(1, minmax(200px, 1200px))",
                            }}
                        >
                            <>


                                <div className="page-wrapper" onSubmit={handlesubmit}>
                                    <div className="content container-fluid">

                                        <div className="page-header" style={{ backgroundColor: '#AFDBF5' }}>
                                            <div className="row align-items-center">
                                                <div className="col">
                                                    <h3 className="page-title" style={{ color: "#00308F", textAlign: 'center' }}>Supplier Master</h3>

                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="card">
                                                    <div className="card-body" style={{ backgroundColor: '#AFDBF5' }}>
                                                        <form>
                                                            <div className="row">

                                                                <div className="col-12 col-sm-4">
                                                                    <div className="form-group local-forms">
                                                                        <label>Comapny Code <span className="login-danger"></span></label>
                                                                        <input value={comapnycode} onChange={e => comapnycodechange(e.target.value)} type="text" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-12 col-sm-4">
                                                                    <div className="form-group local-forms">
                                                                        <label>Comapny Name <span className="login-danger"></span></label>
                                                                        <input value={comapnyname} onChange={e => companynamechange(e.target.value)} type="text" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-12 col-sm-4">
                                                                    <div className="form-group local-forms">
                                                                        <label>Address 1 <span className="login-danger"></span></label>
                                                                        <input value={address1} onChange={e => address1change(e.target.value)} type="text" className="form-control" />
                                                                    </div>
                                                                </div>

                                                                <div className="col-12 col-sm-4">
                                                                    <div className="form-group local-forms">
                                                                        <label>Address 2 <span className="login-danger"></span></label>
                                                                        <input value={address2} onChange={e => address2change(e.target.value)} type="text" className="form-control" />
                                                                    </div>
                                                                </div>

                                                                <div className="col-12 col-sm-4">
                                                                    <div className="form-group local-forms">
                                                                        <label>
                                                                            City<span className="login-danger"></span>
                                                                        </label>
                                                                        <select className="form-control select" value={city} onChange={e => citychange(e.target.value)}>
                                                                            <option>Select City</option>
                                                                            <option>Kolhapur</option>
                                                                            <option>Sangali</option>

                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12 col-sm-4">
                                                                    <div className="form-group local-forms">
                                                                        <label>
                                                                            State <span className="login-danger"></span>
                                                                        </label>
                                                                        <select className="form-control select" value={state} onChange={e => statechange(e.target.value)}>
                                                                            <option>Select State</option>
                                                                            <option>Maharashtra</option>
                                                                            <option>Karnataka</option>

                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12 col-sm-4">
                                                                    <div className="form-group local-forms">
                                                                        <label>Mobile<span className="login-danger"></span></label>
                                                                        <input value={mobile} type="number" className="form-control" onChange={(e) => {
                                                                            setMobile(e.target.value);
                                                                            if (!pattern.test(e.target.value))
                                                                                setIsError(true);
                                                                            else setIsError(false);
                                                                        }} />
                                                                        {Error && <h6 style={{ color: 'red' }}>{Error}</h6>}
                                                                    </div>
                                                                </div>
                                                                <div className="col-12 col-sm-4">
                                                                        <div className="form-group local-forms">
                                                                            <label>Email <span className="login-danger"></span></label>
                                                                            <input id="email" value={email} onChange={handleChange} name="email" className="form-control" />
                                                                            {error && <h6 style={{ color: 'red' }}>{error}</h6>}
                                                                        </div>
                                                                    </div>

                                                                <div className="col-12 col-sm-4">
                                                                    <div className="form-group local-forms">
                                                                        <label>Contact Person <span className="login-danger"></span></label>
                                                                        <input value={contactperson} onChange={e => contactpersonchange(e.target.value)} type="text" className="form-control" />
                                                                    </div>
                                                                </div>

                                                                <div className="col-12 col-sm-4">
                                                                    <div className="form-group local-forms">
                                                                        <label>GST No <span className="login-danger"></span></label>
                                                                        <input value={gstno} onChange={e => gstnochahge(e.target.value)} type="text" className="form-control" />
                                                                    </div>
                                                                </div>

                                                                <div className="col-12 col-sm-4">
                                                                    <div className="form-group local-forms">
                                                                        <label>PAN <span className="login-danger"></span></label>
                                                                        <input value={pan} onChange={e => panchange(e.target.value)} type="text" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr className="my-3" />

                                                                <div className="col-12 col-sm-4">
                                                                    <div className="supplier-submit">
                                                                        <button type="submit" className="btn btn-primary">
                                                                            Submit
                                                                        </button>
                                                                    </div>
                                                                </div>

                                                                <div className="col-12 col-sm-4">
                                                                    <div className="supplier-clear">
                                                                        <button type="clear" className="btn btn-secondary">
                                                                            Clear
                                                                        </button>
                                                                    </div>
                                                                </div>


                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>






                            </>



                        </div>
                        <footer className="mx-auto my-3 text-center">
                            <small>&copy; Microtech, 2023. All rights reserved.</small>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    );
};
