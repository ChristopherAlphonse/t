import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";

interface EmailProps {
  userFirstname: string;
}

export const NotionWaitlistEmail = ({ userFirstname }: EmailProps) => (
  <Html>
    <Head />
    <Preview>You are on the Rolebound waitlist, {userFirstname}.</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src="https://nextjs-notion-waitlist.vercel.app/logo.svg"
          width="72"
          height="72"
          alt="Rolebound logo"
          style={logo}
        />
        <Text style={brand}>Rolebound</Text>
        <Text style={greeting}>Hi {userFirstname},</Text>
        <Text style={paragraph}>
          Thanks for joining the waitlist. Rolebound is a CRM for job seekers
          who want to track fitting jobs, know who to contact, and move each
          opportunity forward.
        </Text>
        <Text style={paragraph}>
          The goal is simple: show the roles that fit your background, explain
          why each one is relevant, identify the best contact, and draft a
          message you can approve.
        </Text>
        <Text style={paragraph}>
          You stay in control of your profile, job criteria, outreach drafts,
          follow-ups, and pipeline. No unsupported claims, fake familiarity, or
          guessed contacts.
        </Text>
        <Text style={signOff}>
          Thanks,
          <br />
          Rolebound
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          You received this email because you signed up for the Rolebound
          waitlist.
          If you believe this is a mistake, feel free to ignore this email.
        </Text>
      </Container>
    </Body>
  </Html>
);

NotionWaitlistEmail.PreviewProps = {
  userFirstname: "Tyler",
} as EmailProps;

export default NotionWaitlistEmail;

const main = {
  background: "linear-gradient(-225deg, #FFE29F 0%, #FFA99F 48%, #FF719A 100%)",
  fontFamily: 'figtree, "Helvetica Neue", Helvetica, Arial, sans-serif',
  padding: "40px 0",
  color: "#cccccc",
};

const container = {
  margin: "0 auto",
  padding: "24px 32px 48px",
  backgroundColor: "#1a1a1a",
  borderRadius: "12px",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  maxWidth: "600px",
};

const brand = {
  color: "#F7FF9B",
  fontSize: "28px",
  fontWeight: "700",
  lineHeight: "36px",
  margin: "0 0 24px",
};

const logo = {
  display: "block",
  margin: "0 0 16px",
};

const greeting = {
  fontSize: "18px",
  lineHeight: "28px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  marginBottom: "20px",
};

const signOff = {
  fontSize: "16px",
  lineHeight: "26px",
  marginTop: "20px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8c8c8c",
  fontSize: "12px",
};
