import React from 'react'
import Grid from "@material-ui/core/Grid";
import Header from '../header/index'
import ContactForm from '../contactForm/index'

const Contacts = () => {
    return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Header/>
      </Grid>
      <Grid item xs={12} sm={4}>
        <ContactForm/>
      </Grid>
      <Grid item xs={12} sm={8}></Grid>
    </Grid>);
}

export default Contacts;