import { Request, Response } from "express";
import Header from "../components/header";
import Footer from "../components/footer";
import Section from "../components/section";
import ValueCard from "../components/valueCard";
import TimelineItem from "../components/timelineItem";
import Leader from "../components/leader";

export default function about(req: Request, res: Response): void {
  const whoWeAre = Section(
    "WhoWeAre",
    `<p style="font-size:1.2rem;line-height:1.7;max-width:900px;margin:auto;text-align:center;">
      We are a global technology company committed to helping businesses innovate, scale, and thrive.
      Our mission is to empower organizations with modern tools, intelligent automation, and world-class support.
    </p>`
  );

  const values = Section(
    "OurValues",
    `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px;">
      ${ValueCard("Innovation","We push boundaries and embrace new ideas.","💡")}
      ${ValueCard("Integrity","We operate with transparency and trust.","🛡️")}
      ${ValueCard("Excellence","We deliver quality in everything we do.","🏆")}
    </div>`
  );

  const journey = Section(
    "OurJourney",
    `<div style="max-width:700px;margin:0 auto;">
      ${TimelineItem("2015","Company founded with a vision to modernize enterprise technology.")}
      ${TimelineItem("2018","Expanded globally and launched our flagship cloud platform.")}
      ${TimelineItem("2021","Reached 10,000+ enterprise customers worldwide.")}
      ${TimelineItem("2024","Introduced AI-powered automation tools for next-gen businesses.")}
    </div>`
  );

  const leadership = Section(
    "LeadershipTeam",
    `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px;">
      ${Leader("AlexMorgan","ChiefExecutiveOfficer","Alex leads the company with over 20 years of experience in global enterprise strategy.")}
      ${Leader("JordanLee","ChiefTechnologyOfficer","Jordan oversees innovation, engineering, and product development across all divisions.")}
      ${Leader("TaylorReed","ChiefOperationsOfficer","Taylor ensures operational excellence and world-class customer experience.")}
    </div>`
  );

  res.send(
    `<html>
      <head>
        <title>AboutUs</title>
        <meta name="description" content="Learn about our mission, values, leadership, and journey.">
        <meta name="keywords" content="about,company,leadership,values,mission">
        <style>
          body{margin:0;font-family:Arial,sans-serif;background:#fafafa;}
        </style>
      </head>
      <body>
        ${Header()}
        ${whoWeAre}
        ${values}
        ${journey}
        ${leadership}
        ${Footer()}
      </body>
    </html>`
  );
}
