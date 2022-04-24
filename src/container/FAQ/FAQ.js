import React from "react";
import "./FAQ.css";
import CustomAccordion from "../../components/CustomAccordion";

const FAQ = () => {
  return (
    <section className="faq" id="faq">
      <h2>FAQ</h2>
      <div>
        <CustomAccordion
          id={1}
          summary="How do startup frameworks work?"
          details="The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS."
        />
        <CustomAccordion
          id={2}
          summary="Do you provide hosting with Startup Framework?"
          details="No, hosting is on you. You upload the result on your hosting via FTP or using other tools you like. You can use any server, just make sure it have a PHP installed in case if you need a contact form."
        />
        <CustomAccordion
          id={3}
          summary="What exactly am I buying?"
          details="You’re buying an access to the Startup Generator app to export ready-made templates with the rest source files included. It’s an online tool, not a software. For more details about generator’s workflow watch this tutorial."
        />
        <CustomAccordion
          id={4}
          summary="Are you planning to update Startup Framework?"
          details="We are! Here is the changelog of changes we’ve made after the release. Thanks our clients who helped us to improve our product."
        />
        <CustomAccordion
          id={5}
          summary="How Startup Framework works?"
          details="The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS."
        />
        <CustomAccordion
          id={6}
          summary="Do you provide support for customers?"
          details="Yes, we are. Please use our contact us form to chat with us. We DO NOT provide product support via Facebook, Twitter or others sources."
        />
      </div>
    </section>
  );
};

export default FAQ;
