import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import CInput from "../../../components/CInput";
import CNotification from "../../../components/CNotification";
import { Regular } from "common/Regular";
import { Actions } from "store/Global/Action";
import { IResponseMessage } from "common/Models";
import { Message, UserType } from "common/Enums";
import CButton from "../../../components/CButton";
import { useHistory } from "react-router-dom";

interface Props {
  UserSignup?: Function;
}

const Signup = (props: Props) => {
  const history = useHistory();
  const [InputSignup, setInputSignup] = useState({
    FullName: "",
    UserName: "",
    Password: "",
    Email: "",
    Phone: "",
    Address: "",
    Type: UserType.Internal,
  });
  const refNotification = useRef<any>();
  const handleKeyDown = (event: any) => {
    if (event.keyCode == 13) {
      let tagNameFocus = document.activeElement.tagName.toLowerCase();
      if (tagNameFocus !== "button") {
        Signup();
      }
    }
  };
  const ValidateForm = () => {
    if (!InputSignup.FullName) {
      refNotification.current.showNotification(
        "warning",
        Message.FullName_Is_Not_Empty
      );
      return false;
    }
    if (!InputSignup.UserName) {
      refNotification.current.showNotification(
        "warning",
        Message.UserName_Is_Not_Empty
      );
      return false;
    }
    if (!InputSignup.Password) {
      refNotification.current.showNotification(
        "warning",
        Message.Password_Is_Not_Empty
      );
      return false;
    }
    if (!InputSignup.Email) {
      refNotification.current.showNotification(
        "warning",
        Message.Email_Is_Not_Empty
      );
      return false;
    } else {
      if (!Regular.email(InputSignup.Email)) {
        refNotification.current.showNotification(
          "warning",
          Message.Email_Is_Not_Format
        );
        return false;
      }
    }
    // if(!InputSignup.Phone)
    // {
    //     refNotification.current.showNotification("warning", Message.Phone_Is_Not_Empty);
    //     return false;
    // }
    // else
    // {
    //   if(!Regular.phoneVN(InputSignup.Phone))
    //   {
    //     refNotification.current.showNotification("warning", Message.Phone_Is_Not_Format);
    //     return false;
    //   }
    // }

    return true;
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    // cleanup this component
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });
  const Signup = async () => {
    if (ValidateForm()) {
      let res: IResponseMessage = await props.UserSignup(InputSignup);
      if (res && res.Success) {
        refNotification.current.showNotification("success", res.Message);
        setInputSignup({
          FullName: "",
          UserName: "",
          Password: "",
          Email: "",
          Phone: "",
          Address: "",
          Type: UserType.Internal,
        });
      }
    }
  };
  const onChange = (key: string, value: string) => {
    setInputSignup({
      ...InputSignup,
      [key]: value,
    });
  };
  return (
    <>
      <CNotification ref={refNotification} />
      <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="pt-4 pb-2">
                    <h5 className="card-signup-title text-center pb-0 fs-4">
                      <span className="title-underline">????ng k?? </span>
                      <span> t??i kho???n</span>
                    </h5>
                  </div>
                  <div className="row g-3 needs-validation form-register">
                    <div className="col-12">
                      <CInput
                        key="fullname"
                        placeholder="H??? v?? t??n"
                        value={InputSignup.FullName}
                        onChange={(e: any) => {
                          onChange("FullName", e);
                        }}
                      />
                    </div>
                    <div className="col-12">
                      <CInput
                        key="username"
                        placeholder="T??n ????ng nh???p"
                        value={InputSignup.UserName}
                        onChange={(e: any) => {
                          onChange("UserName", e);
                        }}
                      />
                    </div>
                    <div className="col-12">
                      <CInput
                        key="password"
                        placeholder="M???t kh???u"
                        type="password"
                        value={InputSignup.Password}
                        onChange={(e: any) => {
                          onChange("Password", e);
                        }}
                      />
                    </div>
                    <div className="col-12">
                      <CInput
                        key="email"
                        placeholder="Email"
                        value={InputSignup.Email}
                        onChange={(e: any) => {
                          onChange("Email", e);
                        }}
                      />
                    </div>
                    <div className="col-12">
                      <CInput
                        key="phone"
                        placeholder="S??T"
                        value={InputSignup.Phone}
                        onChange={(e: any) => {
                          onChange("Phone", e);
                        }}
                      />
                    </div>
                    <div className="col-12">
                      <CInput
                        key="address"
                        placeholder="?????a ch???"
                        value={InputSignup.Address}
                        onChange={(e: any) => {
                          onChange("Address", e);
                        }}
                      />
                    </div>
                    <div className="col-12">
                      <CButton
                        title="????ng k??"
                        onClick={Signup}
                        isFullWidth={true}
                      />
                    </div>
                    <div className="col-12">
                      <p className="small mb-0">
                        B???n ???? c?? t??i kho???n?{" "}
                        <a
                          href="#"
                          onClick={() => {
                            history.push("/login");
                          }}
                        >
                          ????ng nh???p h??? th???ng
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
const mapState = ({ ...state }) => ({});
const mapDispatchToProps = {
  UserSignup: Actions.UserSignup,
};

export default connect(mapState, mapDispatchToProps)(Signup);
