import React from "react";
import Joi from "joi";
import { toast } from "react-toastify";
import { forcePasswordUpdate } from "../../services/forcePasswordUpdate";
import Form from "../common/Form";

class ForcePasswordUpdate extends Form {
  state = {
    data: { newPassword: "", confirmNewPassword: "" },
    errors: {}
  };

  componentDidMount() {
    document.title = "Force Update Password";
  }

  schema = {
    newPassword: Joi.string()
      .regex(
        /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
      )
      .required()
      .label("New Password")
      .options({
        language: {
          string: {
            regex: {
              base:
                "should be at least 8 characters long and must include at least one uppercase letter, one lowercase letter, and one number or special character"
            }
          }
        }
      }),

    confirmNewPassword: Joi.string()
      .regex(
        /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
      )
      .required()
      .label("New Password")
      .options({
        language: {
          string: {
            regex: {
              base:
                "should be at least 8 characters long and must include at least one uppercase letter, one lowercase letter, and one number or special character"
            }
          }
        }
      })
  };

  doSubmit = async () => {
    const { newPassword: newpassword, confirmNewPassword } = {
      ...this.state.data
    };

    if (newpassword !== confirmNewPassword) {
      alert("Confirm Password must match New Password");
      return;
    }

    const userId = this.props.match.params.userId;
    const data = { userId, newpassword };
    const result = await forcePasswordUpdate(data);
    if (result.status === 200) {
      toast.success(
        "You will now be directed to the password page where you can login with your new password.",
        {
          onClose: () => (window.location = "/login")
        }
      );
    } else {
      toast.error("Something went wrong. Please contact your administrator.");
    }
  };

  render() {
    return (
      <div className="container mt-5">
        <h2>Change Password</h2>

        <form className="col-md-6 xs-12" onSubmit={e => this.handleSubmit(e)}>
          {this.renderInput("newPassword", "New Password:", "password")}
          {this.renderInput(
            "confirmNewPassword",
            "Confirm Password:",
            "password"
          )}
          {this.renderButton("Submit")}
        </form>
      </div>
    );
  }
}

export default ForcePasswordUpdate;
