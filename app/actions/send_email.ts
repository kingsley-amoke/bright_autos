"use server";

import nodemailer from "nodemailer";
import { ServerActionResponse, SupportInquiry } from "../types/email";

export async function sendSupportEmail(
  formData: SupportInquiry,
): Promise<ServerActionResponse> {
  const {
    firstName,
    lastName,
    email,
    phone,
    department,
    subject,
    message,
    vehicle,
    vin,
    contactMethod,
  } = formData;

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST,
    port: parseInt(process.env.EMAIL_SERVER_PORT || "587", 10),
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD,
    },
  });

  const hasVehicleData = !!(vehicle || vin);
  const vehicleSection = hasVehicleData
    ? `
      <h3 style="color: #555;">Vehicle Diagnostics</h3>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
        ${
          vehicle
            ? `<tr>
          <td style="padding: 8px; font-weight: bold; width: 35%;">Vehicle Model:</td>
          <td style="padding: 8px; text-transform: capitalize;">\${vehicle}</td>
        </tr>`
            : ""
        }
        ${
          vin
            ? `<tr>
          <td style="padding: 8px; font-weight: bold;">VIN:</td>
          <td style="padding: 8px; font-family: monospace;">\${vin}</td>
        </tr>`
            : ""
        }
      </table>
    `
    : "";

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
      <h2 style="color: #333; border-bottom: 2px solid #0070f3; padding-bottom: 10px;">New Support Inquiry</h2>
      
      <h3 style="color: #555;">Customer Information</h3>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
        <tr>
          <td style="padding: 8px; font-weight: bold; width: 35%;">Name:</td>
          <td style="padding: 8px;">${firstName} ${lastName}</td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold;">Email:</td>
          <td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold;">Phone:</td>
          <td style="padding: 8px;">${phone}</td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold;">Preferred Contact:</td>
          <td style="padding: 8px; text-transform: capitalize;">${contactMethod}</td>
        </tr>
      </table>

      <h3 style="color: #555;">Case Details</h3>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
        <tr>
          <td style="padding: 8px; font-weight: bold; width: 35%;">Department:</td>
          <td style="padding: 8px; text-transform: capitalize;">${department}</td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold;">Subject:</td>
          <td style="padding: 8px;">${subject}</td>
        </tr>
      </table>

      ${vehicleSection}

      <h3 style="color: #555;">Message</h3>
      <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 4px solid #0070f3; white-space: pre-wrap;">
        ${message}
      </div>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"Support System" <${process.env.EMAIL_FROM}>`,
      to: "recipient@example.com",
      subject: `[${department.toUpperCase()}] ${subject} - From ${firstName} ${lastName}`,
      html: htmlContent,
    });

    return { success: true, message: "Email sent successfully!" };
  } catch (error) {
    console.error("Email transmission failed:", error);
    return { success: false, error: "Failed to deliver email." };
  }
}
