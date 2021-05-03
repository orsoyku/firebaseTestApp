import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Header from "../header/index";
import ContactForm from "../contactForm/index";
import ContactTable from "../contactTable/index";
import firebaseDB from "../../firebase";

const Contacts = () => {
  const [contactData, setContactData] = useState({});
  const [currentId, setCurrentId] = useState("");

  useEffect(() => {
    getContact();
  }, [currentId]);

  const addContact = (data) => {
    if (currentId === "") {
      firebaseDB.child("contact").push(data, (err) => {
        if (err) {
          console.log(err);
        }
      });
    } else {
      firebaseDB.child(`contact/${currentId}`).set(data, (err) => {
        if (err) {
          console.log(err);
        }
      });
    }
  };
  const editContact = id => {
    setCurrentId(id);
  };
  const deleteContact = id => {
      console.log(id)
      firebaseDB.child(`contact/${id}`).remove(err => {
        if (err) {
          console.log(err)
        }
      })

    

  }
  const getContact = () => {
    firebaseDB
      .child("contact")
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          setContactData({ ...snapshot.val() });
        } else {
          console.log("No data");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12} sm={4}>
        <ContactForm {...{ addContact, currentId, contactData }} />
      </Grid>
      <Grid item xs={12} sm={8}>
        <ContactTable {...{ contactData, editContact, deleteContact }} />
      </Grid>
    </Grid>
  );
};

export default Contacts;
