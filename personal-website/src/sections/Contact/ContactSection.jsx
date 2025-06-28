import styles from "./ContactSection.module.css";
import { useState } from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";

export default function ContactSection() {
  const template = process.env.REACT_APP_EMAILJS_TEMPLATE;
  const publicKey = process.env.REACT_APP_EMAILJS_PUBLICKEY;
  const serviceId = process.env.REACT_APP_EMAILJS_SERVICEID;

  const [values, setValues] = useState({ name: "", subject: "", message: "" });

  const handleSubmit = () => {
    if (values.name == "" || values.subject == "" || values.message == "") {
      alert("Please fill in your name, the subject, and message content!");
      return;
    }

    emailjs.send(serviceId, template, values, publicKey).then(
      (result) => {
        alert("Message Sent Successfully :)");
        console.log(result);
      },
      (error) => {
        alert(
          "We Ran Into An Error Sending Your Message. Please Try Again Later!",
        );
        console.log(error.text);
      },
    );
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Contact Me:</h2>
      <div className={styles.textInputWrapper}>
        <TextField
          name="name"
          id="outlined-basic-name"
          className="form-control"
          label="Name"
          fullWidth
          variant="outlined"
          onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            },
          }}
        />

        <TextField
          id="outlined-basic-subject"
          className="form-control"
          label="Subject"
          fullWidth
          variant="outlined"
          onChange={(e) =>
            setValues((v) => ({ ...v, subject: e.target.value }))
          }
        />
      </div>
      <div className={styles.textInputWrapper}>
        <TextField
          id="outlined-multiline-flexible"
          className="form-control"
          label="Message"
          multiline
          fullWidth
          maxRows={8}
          minRows={4}
          onChange={(e) =>
            setValues((v) => ({ ...v, message: e.target.value }))
          }
        />
      </div>

      <div className={styles.buttonWrapper}>
        <Button
          variant="contained"
          style={{ width: "95%" }}
          onClick={handleSubmit}
        >
          Send Message
        </Button>
      </div>
    </div>
  );
}
